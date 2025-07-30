import React from 'react'
import { useState } from 'react'
import Layout from '../layout/Layout'
// import { toast } from 'react-toastify'
import '../../styles/AuthStyles.css'

import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, SetPassword] = useState("")
    const [phone, SetPhone] = useState("")
    const [address, Setaddress] = useState("")

    const navigate = useNavigate()
    //form
    const hanldeSubmit = async (e) => {
        e.preventDefault()
        // console.log(name, email, password, Phone, address);
        // toast.success("register succssfully")
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address })
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate('/login')
            }
            else {
                toast.error(res.data.message)

            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
        }
    }
    console.log(process.env.REACT_APP_API);

    return (
        <Layout title='register page - Ecommerce App'>
            <div className='form-container'>
                <form onSubmit={hanldeSubmit}>
                    <h2 className='title'>Register page</h2>
                    <div className="mb-3">
                        <input type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="form-control"
                            id="exampleInputName"
                            placeholder='Enter Your Name'
                            required />
                    </div>

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

                    <div className="mb-3">
                        <input type="text"
                            value={phone}
                            onChange={(e) => SetPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder='Enter Your Phone'
                            required />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            value={address}
                            onChange={(e) => Setaddress(e.target.value)}
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder='Enter Your Address'
                            required />
                    </div>


                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register