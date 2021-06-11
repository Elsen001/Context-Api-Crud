import React, { createContext, useReducer } from "react"
import Reducer from "./Reducer";

    const initialState = {
    infos: [
        {id:1,firstname:"elsen",lastname:"camalov",job:"Front-end",number:"0514467486"},
        {id:2,firstname:"Mamed",lastname:"Abusov",job:"Back-end",number:"0514467486"},
        {id:3,firstname:"Hikmet",lastname:"Hesenov",job:"Muhasib",number:"0514467486"},
        {id:4,firstname:"Aslan",lastname:"Cabbarov",job:"Direktor",number:"0514467486"},
        {id:5,firstname:"Leyla",lastname:"Melikov",job:"Front-end",number:"0514467486"},
        {id:6,firstname:"Melik",lastname:"Hesenli",job:"Product-Manager",number:"0514467486"},
    ]
    }

    export const GlobalContext = createContext(initialState);


    export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)


    const createInfo = (info) =>{
        dispatch({
            type:"ADD-INFO",
            payload:info
        })
    }


    const deleteInfo = (id) =>{
        dispatch({
            type:"DELETE-INFO",
            payload:id
        })
    }



    const editInfo = (info) =>{
        dispatch({
            type:"EDIT-INFO",
            payload:info
        })
    }



    return (<GlobalContext.Provider value={{
        infos: state.infos,
        createInfo,
        deleteInfo,
        editInfo
    }} >

        {children}
    </GlobalContext.Provider>)
}
