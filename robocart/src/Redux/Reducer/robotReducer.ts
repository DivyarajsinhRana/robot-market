
import { robotData,robotType,robotresponseState ,actionsType} from  '../../type'

const initialState={
    loading:false,
    robot:[],
    errors:""
}

const robotReducer = (state:robotresponseState=initialState,action : actionsType) : robotresponseState =>{
    switch(action.type){
        case "getrobot_Req":
            return{
                loading:true,
                robot:[],
                errors:""
            }
        case "getrobot_Success":
            return{
                loading:false,
                robot:action.payload,
                errors:""
            }
    case "getrobot_fail":{
        console.log(action.error)
        return{
        loading:false,
        robot:[],
        errors:action.error
    }
    }
        default :return state
    }
}
export default robotReducer