import Cookies from "js-cookie";


export const useAuth =()=>{
    
    const accessToken = Cookies.get('accessToken');
    const userId = Cookies.get('userId')
    const role = Cookies.get("role");
    return {accessToken,role,userId};

}