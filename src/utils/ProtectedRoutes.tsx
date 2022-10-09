import React from 'react'
import { Navigate } from 'react-router-dom';

interface Props {
    children?: React.ReactNode
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
    return <></>
    // const user = useSelector((state) => state.user.profile);

    // return user != null ? <>{children}</> : <Navigate to="/auth" />;

}

export default ProtectedRoutes
