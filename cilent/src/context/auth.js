import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })
    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data) {
            const parse = JSON.parse(data)
            setAuth({
                ...auth,
                user: parse.user,
                token: parse.token
            })
        }
    }, [auth])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//custome hook
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }