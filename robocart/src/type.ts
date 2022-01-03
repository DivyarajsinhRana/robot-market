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

 export type actionsucType = {
     type : string
     payload   : robotData
     error : string
 }
//  export type actionfailType = {
//      type : string
//      error : string
//  }
 

 export type requesttype = {
     type : string
 }

 export type actionsType = actionsucType 
  
export type robotresponseState = {
    loading : boolean
    robot :  robotData
    errors: string 
}
 export type DispatchType = (args: actionsType | requesttype ) => actionsType | requesttype 
 