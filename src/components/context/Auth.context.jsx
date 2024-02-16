import { createContext,useState,useEffect } from "react";

export const AuthContext =createContext();

const [isLoggedIn,setIsLoggedIn]= useState(false)
const {userData,setUserData} =userState ({});


export const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] =useState(false);
    const [userData,setUserData]=useState({})





useEffect (() =>{

const storedUser = localStorage.getItem ("userdata");
if (storedUser){
setUserData(JSON.parse(storedUser))
setIsLoggedIn(true)


}


}, [])


const handleLogin = ({name,email}) =>{
setIsLoggedIn(true)
const userDataObj = {name,email};
setUserData({userDataObj})
localStorage.setItem("userData",JSON.stringify(userDataObj))



}

const handleLogout = () =>{
setIsLoggedIn(false);
setUserData({})
localStorage.removeItem("userData")


}

const AuthContextValue= {
isLoggedIn,
userData,
handleLogin,
handleLogout,

}


return (

    <AuthContext.Provider value={AuthContextValue}>
            {children}
    </AuthContext.Provider>
)


}
