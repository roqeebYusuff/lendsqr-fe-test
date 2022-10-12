import React, { useRef, useState } from 'react'
import illustration from '../assets/illustration.svg'
import logo from '../assets/logo.svg'
import { FormGroup, Input, Row, Col, Button, Container } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/Provider'

interface ErrorTypes {
  email: string,
  password: string
}

const Auth: React.FC = () => {
  const navigate = useNavigate()
  const user = useAuth()
  const [togglePassword, setTogglePassword] = useState<boolean>(false)
  const [inputs, setInputs] = useState<ErrorTypes>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<ErrorTypes>({
    email: '',
    password: ''
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setErrors(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter email";
          }
          else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
            stateObj[name] = "Email is not valid";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputs.email || !inputs.password) {
      return
    }

    user.login(inputs.email, inputs.password)
      .then((data: any) => {
        navigate('/users')
      })
  }

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
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                      <Col md='12'>
                        <FormGroup>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                            value={inputs.email}
                            onChange={(e) => onInputChange(e)}
                            onBlur={(e) => validateInput(e)}
                          />
                          {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </FormGroup>
                      </Col>
                      <Col md='12'>
                        <FormGroup className='input-group-password'>
                          <Input
                            id="password"
                            name="password"
                            placeholder="Password"
                            type={togglePassword ? 'text' : 'password'}
                            value={inputs.password}
                            onChange={(e) => onInputChange(e)}
                            onBlur={(e) => validateInput(e)}
                          />
                          {errors.password && <span className='text-danger'>{errors.password}</span>}
                          <span className='showHide' onClick={() => setTogglePassword(!togglePassword)}> {togglePassword ? 'Hide' : 'Show'} </span>
                        </FormGroup>
                      </Col>
                      <Col md='12'>
                        <Link to='/' className='forgot-password'>Forgot Password?</Link>
                      </Col>
                      <Col md='12'>
                        <Button type='submit' className='w-100'>Log in</Button>
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