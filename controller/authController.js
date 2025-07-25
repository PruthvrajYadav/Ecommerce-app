import { comaprePassword, hashPassword } from '../helpers/authHelper.js'
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body


        //validation
        if (!name) {
            return res.send({ error: "Name is required" })
        }
        if (!email) {
            return res.send({ error: "email is required" })
        }
        if (!password) {
            return res.send({ error: "Password is required" })
        }
        if (!phone) {
            return res.send({ error: "phone number is required" })
        }

        if (!address) {
            return res.send({ error: "address is required" })
        }
        //check user
        const exisitingUser = await userModel.findOne({ email })

        //exitsiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: true,
                message: "Already Register please login"
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)

        //save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()
        res.status(201).send({
            success: true,
            message: "User Register successfully",
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}


//login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body


        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "invalid email or  password"
            })
        }
        //check user
        const user = await userModel.findOne({ email })

        //user validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email is not register",

            })
        }

        //check email or password
        const match = await comaprePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "invalid password"
            })
        }

        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in login"
        })

    }
}


