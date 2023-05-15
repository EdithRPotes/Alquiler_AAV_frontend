// se extraen los datos del context
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () =>{

    return useContext(AuthContext);
}

export default useAuth