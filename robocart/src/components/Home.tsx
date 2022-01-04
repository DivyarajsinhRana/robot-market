import axios from "axios"
import { useEffect, useState } from "react";
import baseURL from "../Api";
import { robotType,robotData } from "../type";
const Home = () => {
    const [robots,setRobot] = useState<robotData>({} as robotData)
    const getData = ()=>{
        axios.get(baseURL).then((res)=>setRobot(res.data)).catch((error)=>setRobot(error.message))
    }
    useEffect (()=>{
       getData();
    },[]);
    console.log(robots);
    return (
        <div>
            {
             robots.map((item)=><li>{item.price}</li>)
            }
        </div>
    )
}

export default Home
