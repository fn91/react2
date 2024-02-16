import { useContext } from "react";
import {AuthContext} from "../context/Auth.context"

const useAuth = () =>{

const context =useContext(AuthContext);
return context

}

export default useAuth