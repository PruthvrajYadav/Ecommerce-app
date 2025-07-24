import { hashPassword } from '../helpers/authHelper.js'
import userModel from '../models/userModel.js'


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
            sucess: false,
            message: "Error in Registration",
            error
        })

    }
}


