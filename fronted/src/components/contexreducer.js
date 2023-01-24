import React ,{ createContext, useContext, useReducer } from "react"
const createstate=createContext()
const createdispatch=createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return([...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size,img:action.img}])
            case "DROP":
                let empArray = []
                return empArray
            case "UPDATE":
                let arr = [...state]
                arr.map((food, index) => {
                    if (food.id === action.id) {
                        console.log(food.qty, parseInt(action.qty), action.price + food.price)
                        arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                    }
                    return arr
                })
                return arr    
        default:
            return ("data will not fatched")    
    }

}



export const Createprovider=({children})=>{
    const[state,dispatch]= useReducer(reducer,[])
    return (
        <createdispatch.Provider value={dispatch}>
            <createstate.Provider value={state}>
                {children}
            </createstate.Provider>

        </createdispatch.Provider>
    )
    
}
export const Usecart=()=> useContext(createstate)
export const Usedispatch=()=> useContext(createdispatch)