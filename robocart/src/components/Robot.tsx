import axios from "axios";
import { useState,useEffect } from "react";
type IRobot ={
    image : string,
    name : string,
    price : number,
    stock : number,
    createdAt : Date,
    material : string
};

const Robot = () => {
    const [robot,setRobot] = useState<IRobot>({} as IRobot)
    useEffect(()=>{
      axios.get("http://localhost:8000/api/robots").then((res)=>setRobot(res.data)).catch((e)=>setRobot(e.message))
    },[])
    return (
        <>
            {  
                [robot].map((item ,index)=>{
                    console.log(item); return (
                         (<div key={index}>{item.createdAt}</div>) 
                    )                     
                })   
            }
        </>
    )
}

export default Robot
