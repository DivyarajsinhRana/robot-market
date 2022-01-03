import axios from "axios"
import {robotType ,DispatchType, robotData} from  '../../type'

const getRobot_Req=() =>{
    return{
        type:"getrobot_Req",
    }
}
const getRobot_Success=(robot : robotData)=>{
    return{
        type:"getrobot_Success",
        payload:robot
    }
}
const getRobot_fail=(error: string)=>{
    return{
        type:"getrobot_fails",
        error:error
    }
}

// const detailProduct_req=()=>{
//     return {
//         type:"detailProduct_req",
//     }
// }
// const detailProduct = (product)=>{
//     return {
//         type :"detailProduct",
//         payload:product
//     }
// }
// const  detailProduct_Fail =(error)=>{
//     return {
//         type: "detailProduct_Fail",
//         payload: error
//     }
// }

const fetchRobot=(url : string)=>{
    return (dispatch :DispatchType)=>{
            dispatch(getRobot_Req());
            axios.get(url)
            .then(
                res=>{
                    const product=res.data;
                    dispatch(getRobot_Success(product))
                }
            ).catch(
                error=>{
                    const erroeMsg=error.message;
                    dispatch(getRobot_fail(erroeMsg))
                }
            )
    }
}
// const fetchDetail=(url)=>{
//     return (dispatch)=> {
//         dispatch(detailProduct_req());
//         axios.get(url).then((res)=>{
//             const product=res.data;
//             console.log("producct detail",product);
//             dispatch(detailProduct(product))
//         }).catch((e)=>{
//             dispatch(detailProduct_Fail(e.message))
//         })
//     }
// }

// export  {fetchProduct,fetchDetail}

export {fetchRobot}
