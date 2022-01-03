import { applyMiddleware, createStore,Store } from "redux";
import thunk from "redux-thunk";
import { fetchRobot } from "./Redux/Action/getRobot";
import robotReducer from "./Redux/Reducer/robotReducer";
import  baseURL  from "./Api";
import { actionsType, DispatchType, robotData,robotresponseState} from "./type";
// import rootreducer from "./Redux/combinereducer";
const store : Store<robotresponseState,actionsType> & { dispatch: DispatchType} = createStore(robotReducer,applyMiddleware(thunk));
console.log(store.getState());

// store.subscribe(()=>console.log(store.getState()))
// // store.dispatch(fetchProduct());
// store.dispatch(fetchProduct(`${baseURL}/${id}`))

export default store