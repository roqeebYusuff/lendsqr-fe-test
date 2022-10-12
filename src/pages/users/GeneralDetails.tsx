import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import ArrowBack from '../../assets/icons/arrow_back.svg'
import star from '../../assets/icons/star.svg'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/Provider'

const GeneralDetails: React.FC = () => {
    const navigate = useNavigate()
    const { userDetails } = useAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const [userData, setUserData] = useState<any>()
    const [currentTab, setCurrentTab] = useState<string>('general-details')

    const handleTabChange = (tab: string) => {
        setCurrentTab(tab)
    }

    useEffect(() => {
        const userId = localStorage.getItem('userid');
        /* If no id is found, navigate to users page */
        if (!userId) {
            navigate('/users')
        }
        async function fetchData() {
            setLoading(true)
            await userDetails(userId)
                .then((data: any) => {
                    // console.log(data)
                    setUserData(data)
                    setLoading(false)
                })
                .catch((error: any) => {
                    setLoading(false)
                })
        }
        fetchData();
    }, [])

    return (
        <section className='user-details'>
            <button onClick={() => navigate(-1)} className="navigate"><img src={ArrowBack} alt="" /> Back to Users</button>
            <div className="d-flex justify-content-between align-items-center page-heading-wrapper">
                <h2>User Details</h2>
                <div className="actions d-flex">
                    <Button>Blacklist User</Button>
                    <Button>Activate User</Button>
                </div>
            </div>

            <section className='details'>
                <section className="basic-info">
                    {
                        !loading && (
                            <div className="d-flex info-wrapper">
                                <div className="image">
                                    <img className='img-fluid' src={userData?.profile.avatar} alt="" />
                                </div>
                                <div className="user">
                                    <h3>{userData?.profile.firstName} {userData?.profile.lastName}</h3>
                                    <p>{userData?.profile.bvn}</p>
                                </div>
                                <div className="tiers">
                                    <h6>Users Tiers</h6>
                                    <div className="stars">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                                <div className="account">
                                    <h3>&#8358;{userData?.accountBalance}</h3>
                                    <p><span>{userData?.accountNumber}</span>/<span>Providus Bank</span></p>
                                </div>
                            </div>
                        )
                    }

                    <nav className="tabs">
                        <ul>
                            <li>
                                <button className={`${currentTab === 'general-details' ? 'active' : ''}`} onClick={() => handleTabChange('general-details')}>General Details</button>
                            </li>
                            <li>
                                <button className={`${currentTab === 'document' ? 'active' : ''}`} onClick={() => handleTabChange('document')}>Document</button>
                            </li>
                            <li>
                                <button className={`${currentTab === 'bank-details' ? 'active' : ''}`} onClick={() => handleTabChange('bank-details')}>Bank Details</button>
                            </li>
                            <li>
                                <button className={`${currentTab === 'loans' ? 'active' : ''}`} onClick={() => handleTabChange('loans')}>Loans</button>
                            </li>
                            <li>
                                <button className={`${currentTab === 'savings' ? 'active' : ''}`} onClick={() => handleTabChange('savings')}>Savings</button>
                            </li>
                            <li>
                                <button className={`${currentTab === 'app-and-system' ? 'active' : ''}`} onClick={() => handleTabChange('app-and-system')}>App and Sytem</button>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section className='details-wrapper'>
                    {
                        currentTab === 'general-details' ? (
                            <>
                                {
                                    !loading && (
                                        <>
                                            <div className="single-detail">
                                                <div className="section-title">
                                                    <h4>Personal Information</h4>
                                                </div>
                                                <Row className='deatils_row'>
                                                    <Col md='3'>
                                                        <h4>Full Name</h4>
                                                        <p>{userData?.profile.firstName} {userData?.profile.lastName}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Phone Number</h4>
                                                        <p>{userData?.profile.phoneNumber}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Email Address</h4>
                                                        <p>{userData?.phoneNumber}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Bvn</h4>
                                                        <p>{userData?.profile.bvn}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Gender</h4>
                                                        <p>{userData?.profile.gender}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Marital Status</h4>
                                                        <p>Full Name</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Children</h4>
                                                        <p>Full Name</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Type of Residence</h4>
                                                        <p>{userData?.profile.address}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="single-detail">
                                                <div className="section-title">
                                                    <h4>Education and Employment</h4>
                                                </div>
                                                <Row className='deatils_row'>
                                                    <Col md='3'>
                                                        <h4>Level of Education</h4>
                                                        <p>{userData?.education.level}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Employment Status</h4>
                                                        <p>{userData?.education.employmentStatus}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Sector of Employment</h4>
                                                        <p>{userData?.education.sector}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Duration of employment</h4>
                                                        <p>{userData?.education.duration}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Office email</h4>
                                                        <p>{userData?.education.officeEmail}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Monthly Income</h4>
                                                        <p>&#8358;{userData?.education.monthlyIncome[0]} - &#8358;{userData?.education.monthlyIncome[1]}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Loan Repayment</h4>
                                                        <p>{userData?.education.loanRepayment}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="single-detail">
                                                <div className="section-title">
                                                    <h4>Socials</h4>
                                                </div>
                                                <Row className='deatils_row'>
                                                    <Col md='3'>
                                                        <h4>Twitter</h4>
                                                        <p>{userData?.socials.twitter}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Facebook</h4>
                                                        <p>{userData?.socials.facebook}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Instagram</h4>
                                                        <p>{userData?.socials.instagram}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="single-detail">
                                                <div className="section-title">
                                                    <h4>Gurantor</h4>
                                                </div>
                                                <Row className='deatils_row'>
                                                    <Col md='3'>
                                                        <h4>Full Name</h4>
                                                        <p>{userData?.guarantor.firstName}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Phone Number</h4>
                                                        <p>{userData?.guarantor.phoneNumber}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Email Addres</h4>
                                                        <p>{userData?.guarantor?.emailAddress}</p>
                                                    </Col>
                                                    <Col md='3'>
                                                        <h4>Relationship</h4>
                                                        <p>{userData?.guarantor?.relationship}</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        ) : currentTab === 'document' ? (
                            <>Document</>
                        ) : currentTab === 'bank-details' ? (
                            <>Bank Details</>
                        ) : currentTab === 'loans' ? (
                            <>Loans</>
                        ) : currentTab === 'savings' ? (
                            <>Savings</>
                        ) : currentTab === 'app-and-system' ? (
                            <>App and System</>
                        ) : (
                            <></>
                        )
                    }
                </section>
            </section>
        </section>
    )
}

export default GeneralDetails