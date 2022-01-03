export {}
export interface robotType {
    image : string
    name : string
    price : number
    stock : number
    createdAt : Date
    material : string
}
export type robotData = {
    robots : robotType[] ;
 }[]
export type payload = string | robotData;
 export type actionsucType = {
     type : string
     payload  ? : payload
 }
 

//  export type requesttype = {
//      type : string
//  }

 export type actionsType = actionsucType
  
export type robotresponseState = {
    loading : boolean
    robot :  robotData
    errors: string 
}
 export type DispatchType = (args: actionsType) => actionsType
