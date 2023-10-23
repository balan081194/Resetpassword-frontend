import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Dashboard() {
    const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get('resetpassword-backend-api.vercel.app/dashboard')
        .then(res => {
            console.log("dashboad: " + res.data);
            if(res.data === "Success") {
                setSuc("Successded OK")
            } else {
                navigate('/')
            }
        }).catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            <h2>dashboard</h2>
            <p>{suc}</p>
        </div>

     );
}

export default Dashboard;
