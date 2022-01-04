import axios from 'axios';
import { error } from 'console';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import baseURL from './Api';
import Home from './components/Home';
import Robot from './components/Robot';
import getRobot from './getRobot';
import { robotType,robotData } from "./type";
import Robotcard from './components/Robotcard'


function App() {
  const [state, setstate] = useState<robotData>({} as robotData)
  useEffect (()=>{
    const data= getRobot();
    data.then((res)=>setstate(res.data)).catch((e)=>setstate(e.message));
    console.log(data);
  },[])
    console.log(state);
  return (
    <>
    <div className='row mt-3'>
      {
         state && state.map((item,index)=>(<div className='col-2 mx-3'>
           <Robotcard image={item.image} name={item.name} createdAt={item.createdAt} price={item.price} stock={item.stock} material={item.material} key={index}/>
         </div>
         ) 
        )
      }
    </div>
    </>
  );
}

export default App;
