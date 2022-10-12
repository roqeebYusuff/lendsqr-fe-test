import React, { useState, useEffect, useMemo } from 'react'
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from 'reactstrap'
import DashboardCards from '../data/DashboardCards'
import filter from '../assets/icons/filter-results-button.svg'
import more from '../assets/icons/more.svg'
import user from '../assets/icons/user.svg'
import view from '../assets/icons/view.svg'
import deleteIcon from '../assets/icons/delete.svg'
import Pagination from '../components/Pagination'
import { useAuth } from '../utils/Provider'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import Filter from '../components/Filter'

function getRandomStatus() {
  const status: string[] = [
    'Inactive',
    'Pending',
    'Blacklisted',
    'Active',
  ];

  const randomStatus = status[Math.floor(Math.random() * status.length)]

  return (
    <span className={`badge rounded-pill ${randomStatus.toLowerCase()}`}>{randomStatus}</span>
  )
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const { fetchUsers } = useAuth()
  const [pageSize, setPageSize] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(0)
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pageData, setPageData] = useState<any[]>([])

  useMemo(
    () => {
      // console.log('Executing useMemoo')
      const start: number = (currentPage * pageSize) - pageSize
      const end: number = start + pageSize
      setTotalPage(Math.ceil(users.length / pageSize))
      setPageData(users.slice(start, end))
    },
    [pageSize, currentPage]
  )

  useEffect(() => {
    // console.log('Executing useEffect')
    async function fetchData() {
      setLoading(true)
      await fetchUsers()
        .then((data: any) => {
          setUsers(data)
          setTotalPage(Math.ceil(data.length / pageSize))

          const start: number = (currentPage * pageSize) - pageSize
          const end: number = start + pageSize
          setPageData(data.slice(start, end))

          setLoading(false)
        })
        .catch((error: any) => {
          setLoading(false)
          // console.log(error)
        })
    }
    fetchData();
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <Row className='g-4'>
        {
          DashboardCards.map((item, index) => (
            <Col key={index} md='4' lg='3' sm='6'>
              <div className="dashboard-card">
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <h5 className="card-type">{item.type}</h5>
                <h3 className="card-type">{users.length}</h3>
              </div>
            </Col>
          ))
        }
      </Row>

      <section className='users-table'>
        <div className="table-wrapper">
          <Table>
            <thead>
              <tr>
                <th scope="row">
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Organization</span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th>
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Username</span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th>
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Email</span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th>
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Phone Number</span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th>
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Date Joined </span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th>
                  <UncontrolledDropdown>
                    <DropdownToggle className='d-flex justify-content-between' caret={false} tag='div'>
                      <span>Status</span>
                      <img src={filter} alt="Filter" />
                    </DropdownToggle>
                    <Filter />
                  </UncontrolledDropdown>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                loading ? <>Loading Data</> : <>
                  {
                    pageData.map((item, index) => (
                      <tr key={index}>
                        <td >{item.orgName}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.profile.phoneNumber}</td>
                        {/* <td>May 15, 2020 10:00 AM</td> */}
                        <td>{moment(item.createdAt).format('MMM DD, YYYY h:mm A')}</td>
                        <td className='status'>
                          {getRandomStatus()}
                        </td>
                        <td>
                          <UncontrolledDropdown>
                            <DropdownToggle caret={false} tag='div'>
                              <img src={more} alt="More" />
                            </DropdownToggle>
                            <DropdownMenu >
                              <DropdownItem onClick={() => {
                                localStorage.setItem('userid', item.id);
                                navigate('/users/details')
                              }}
                              ><img src={view} alt="" /> View Details</DropdownItem>
                              <DropdownItem><img src={deleteIcon} alt="" /> Blacklist User</DropdownItem>
                              <DropdownItem ><img src={user} alt="" /> Activate User</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  }
                </>
              }
            </tbody>
          </Table>
        </div>
        <Pagination totalPage={totalPage} pageSize={pageSize} setPageSize={setPageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} users={users} />
      </section>
    </section >
  )
}

export default Dashboard