import React from 'react'
import { useState } from 'react'
import Layout from '../layout/Layout'
// import { toast } from 'react-toastify'
import '../../styles/AuthStyles.css'

import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setemail] = useState("")
  const [password, SetPassword] = useState("")



  const navigate = useNavigate()
  //form

  const hanldeSubmit = async (e) => {
    e.preventDefault()
    // console.log(name, email, password, Phone, address);
    // toast.success("register succssfully")
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password, })
      if (res && res.data.success) {
        toast.success(res.data.message)
        navigate('/')
      }
      else {
        toast.error(res.data.message)

      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  }
  return (
    <Layout title='register page - Ecommerce App'>
      <div className='form-container'>
        <form onSubmit={hanldeSubmit} >
          <h2 className='title'>Login page</h2>

          <div className="mb-3">
            <input type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter Your Email'
              required />
          </div>
          <div className="mb-3">
            <input type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder='Enter Your Password'
              required />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>

      </div>
    </Layout >
  )
}

export default Login