export {}
export interface robotType {
    image : string
    name : string
    price : number
    stock : number
    createdAt : Date
    material : string
}
export type robotData = robotType[] ;
 

 export type actionsucType = {
     type : string
     payload   : robotData
     error : any
 }
 export type actionfailType = {
     type : string
     error : string 
     payload : any
 }
 

 export type requesttype = {
     type : string
 }

 export type actionsType = actionsucType | actionfailType
  
export type robotresponseState = {
    loading : boolean
    robot :  robotData
    errors: string 
}
 export type DispatchType = (args: actionsType | requesttype | actionfailType) => actionsType | requesttype | actionfailType
 