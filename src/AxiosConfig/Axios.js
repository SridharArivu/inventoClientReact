import axios from 'axios';


const Axios = axios.create({
    
    baseURL: 'https://resource-server-invento.uc.r.appspot.com', 
    headers: {
      'Content-Type': 'application/json',
      
    },
      withCredentials: true
})


export default Axios;