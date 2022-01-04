import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import baseURL from "../Api";
import { fetchRobot } from "../Redux/Action/getRobot";
import { robotData, robotresponseState, robotType} from '../type'
// type IRobot ={
//     image : string,
//     name : string,
//     price : number,
//     stock : number,
//     createdAt : Date,
//     material : string
// };

const Robot = () => {
    useEffect(()=>{
    dispatch(fetchRobot(baseURL));
    },[])
     const dispatch = useDispatch()
     const robots = useSelector((state :  robotresponseState)=>state)
    //  const item = robots.loading
     console.log(robots.loading);
     console.log(robots.robot);
     console.log(robots.errors);
     const [item,setItem] = useState<robotData>(robots.robot);
     console.log(item);

    return (
        <>

           <div>data</div>
           <div>
               {/* {
                   robots.loading ? (<h2>Loading</h2>) : 
                        robots.errors ? (<h2>not found</h2>) :
                           [robots.robot].map((item )=> console.log(item))
               } */}
              
           </div>

        </>
    )
}

export default Robot
