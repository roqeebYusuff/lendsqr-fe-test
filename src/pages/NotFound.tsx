import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="not-found">
        <h2>404</h2>
        <h5>Page Not Found</h5>
        <p>Sorry, we can't find the page you are looking for.</p>
        <button className="" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </section>
  )
}

export default NotFound