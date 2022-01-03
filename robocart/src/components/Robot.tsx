import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import baseURL from "../Api";
import { fetchRobot } from "../Redux/Action/getRobot";
// type IRobot ={
//     image : string,
//     name : string,
//     price : number,
//     stock : number,
//     createdAt : Date,
//     material : string
// };

const Robot = () => {
     const dispatch = useDispatch()
     const data = useSelector((state)=>state)
     console.log(data);
    useEffect(()=>{
    dispatch(fetchRobot(baseURL));
    },[])
    return (
        <>
           <div>data</div>

        </>
    )
}

export default Robot
