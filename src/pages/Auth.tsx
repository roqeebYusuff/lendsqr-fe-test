import React, { useState } from 'react'
import illustration from '../assets/illustration.svg'
import logo from '../assets/logo.svg'
import { FormGroup, Input, Row, Col, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

function Auth() {
  const [togglePassword, setTogglePassword] = useState<boolean>(false)
  return (
    <main >
      <section className='auth'>
        <Container>
          <Row className="cols-wrapper">
            <Col md='6'>
              <div className="col-illustration">
                <div className="div">
                  <div className="header mb-5">
                    <a href='/' className="logo">
                      <img src={logo} className='img-fluid' alt="Lendsqr Logo" />
                    </a>
                  </div>
                  <div className="illst">
                    <img src={illustration} className='img-fluid' alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6'>
              <div className="col-login">
                <div className="form">
                  <h3>Welcome!</h3>
                  <p>Enter details to login</p>
                  <form>
                    <Row>
                      <Col md='12'>
                        <FormGroup>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col md='12'>
                        <FormGroup className='input-group-password'>
                          <Input
                            id="password"
                            name="password"
                            placeholder="Password"
                            type={togglePassword ? 'text' : 'password'}
                          />
                          <span onClick={() => setTogglePassword(!togglePassword)}> {togglePassword ? 'Hide' : 'Show'} </span>
                        </FormGroup>
                      </Col>
                      <Col md='12'>
                        <Link to='/' className='forgot-password'>Forgot Password?</Link>
                      </Col>
                      <Col md='12'>
                        <Button className='w-100'>Log in</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Auth