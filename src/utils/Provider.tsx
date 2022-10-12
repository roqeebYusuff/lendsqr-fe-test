import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'

export const LendsqrUserContext: React.Context<null | any> = createContext(null)
const LOCAL_STORAGE_NAME = 'lendsqruser'

interface Props {
    children?: React.ReactNode
}

export const useAuth: any = () => {
    const authContext = useContext(LendsqrUserContext)

    if (authContext === null) {
        throw new Error(
            'useAuth() can only be used inside of <LendsqrProvider />, ' +
            'please declare it at a higher level.'
        )
    }

    const { user } = authContext

    return useMemo(
        () => ({
            ...user
        }),
        [user]
    )
}


const LendsqrProvider: React.FC<Props> = ({ children }) => {
    const userContext = useContext(LendsqrUserContext)

    if (userContext !== null) {
        throw new Error('LendsqrProvider has lready been declared')
    }


    const [authUser, setAuthUser] = useState<[] | any>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const login = useCallback(
        (email: string, password: string) => {
            return new Promise((resolve, reject) => {
                localStorage.setItem(LOCAL_STORAGE_NAME, email)
                setAuthUser({ email, password })
                setIsLoggedIn(true)
                resolve({ success: true })
            });
        },
        [],
    )

    const logout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_NAME)
        setIsLoggedIn(false)
    }, [])

    const fetchUsers = useCallback(() => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_BASE_API_URL}`, {
                "method": "GET"
            })
                .then(response => {
                    if (response.status !== 200) throw new Error();
                    return response.json();
                })
                .then(json => {
                    resolve(json)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }, [])

    const userDetails = useCallback((id: number) => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_BASE_API_URL}/${id}`, {
                "method": "GET"
            })
                .then(response => {
                    if (response.status !== 200) throw new Error();
                    return response.json();
                })
                .then(json => {
                    resolve(json)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }, [])


    const toggleSidebar = useCallback(() => {
        setShowSidebar(!showSidebar)
    }, [showSidebar])

    /* Check if users credentials are stored */
    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }

        return () => { }
    }, [userContext, isLoggedIn])

    let users = useMemo(() => ({
        authUser,
        login,
        logout,
        fetchUsers,
        userDetails,
        isLoggedIn,
        toggleSidebar,
        showSidebar
    }), [login, fetchUsers, userDetails, isLoggedIn, authUser, logout, toggleSidebar, showSidebar])

    return (
        <LendsqrUserContext.Provider value={{ user: users }}>
            {children}
        </LendsqrUserContext.Provider>
    )
}

export default LendsqrProvider