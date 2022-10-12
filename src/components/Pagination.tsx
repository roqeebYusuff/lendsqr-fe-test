import React, { useMemo, useCallback } from 'react'
import previous from '../assets/icons/previous.svg'
import next from '../assets/icons/next.svg'

interface Props {
    totalPage: number;
    pageSize: number;
    setPageSize: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    users: any[]
}

const Pagination: React.FC<Props> = ({ totalPage, pageSize, setPageSize, currentPage, setCurrentPage, users }) => {

    const GetPager = useCallback(() => {
        // console.log('executing getpager')
        if (totalPage <= 5) {
            return (
                [...Array(totalPage)].map((page, index) => (
                    <li
                        key={index}
                        className={
                            currentPage === index + 1
                                ? "custom-disabled active page-item"
                                : "page-item"
                        }
                    >
                        <a
                            className="page-link"
                            href={`#${index}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(index);
                            }}
                        >
                            {index}
                        </a>
                    </li>
                ))
            )
        }
        else {
            let all = []
            if (currentPage < 3) {
                for (let i = 1; i <= 3; i++) {
                    all.push(
                        <li
                            key={i}
                            className={
                                currentPage === i
                                    ? "page-item disabled"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                href={`#${i}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(i);
                                }}
                            >
                                {i}
                            </a>
                        </li>
                    )
                }

                /* Skip */
                all.push(
                    <li
                        className='page-item skip'
                    >
                        <a
                            className="page-link"
                            href='#!'
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            ...
                        </a>
                    </li>
                )

                /* Last two pages */
                all.push(
                    <>
                        <li
                            className={
                                currentPage === totalPage - 1
                                    ? "page-item disabled"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                href={`#${totalPage - 1}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(totalPage - 1);
                                }}
                            >
                                {totalPage - 1}
                            </a>
                        </li>
                        <li
                            className={
                                currentPage === totalPage
                                    ? "page-item disabled"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                href={`#${totalPage}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(totalPage);
                                }}
                            >
                                {totalPage}
                            </a>
                        </li>
                    </>
                )
            }

            if (currentPage >= 3) {
                /* Skip */
                all.push(
                    <li
                        className='page-item skip'
                    >
                        <a
                            className="page-link"
                            href='#!'
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            ...
                        </a>
                    </li>
                )
                for (let i = 4; i <= totalPage; i++) {
                    all.push(
                        <li
                            key={i}
                            className={
                                currentPage === i
                                    ? "page-item disabled"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                href={`#${i}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(i);
                                }}
                            >
                                {i}
                            </a>
                        </li>
                    )
                }
            }
            return all
        }
    }, [setCurrentPage, currentPage, totalPage])

    const MemoisedGetPager = useMemo(() => {
        return GetPager()
    }, [GetPager])

    return (
        <div className='table-footer d-flex justify-content-between'>
            <div className="showing">
                Showing
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} name="showing" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                out of {users.length}
            </div>
            <nav className='paginations'>
                <ul className='pages'>
                    <li
                        className={`page-item prev ${currentPage <= 1 ? "disabled" : ""}`}
                    >
                        <a
                            href="#!"
                            className="page-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(currentPage - 1)
                            }}
                        >
                            <img src={next} alt="Previous" />
                        </a>
                    </li>

                    {
                        MemoisedGetPager
                    }
                    <li className={`page-item next ${currentPage >= totalPage ? "disabled" : ""}`} >
                        <a
                            className="page-link"
                            href="#!"
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(currentPage + 1)
                            }}
                        >
                            <img src={next} alt="Previous" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
