import { useRef, useState } from "react"
import { add_TDL, change_TDL, delete_TDL } from "../Store/SliceLocStorage"
import { useDispatch, useSelector } from "react-redux"

 export let SearchTDL_Component = ()=>{

    // let selectorTodoLst = useSelector((state)=>state.Sl_ToDoLst)
    let dispatch = useDispatch()

    let addD_TDL = (obj)=>{dispatch(add_TDL(obj))}

    let inputRef = useRef()

    let input_Func = (event)=>{
        if (event.key === "Enter"){

            let dataTemplate= {description: inputRef.current.value, status: false}

            addD_TDL(dataTemplate)
            inputRef.current.value=null
        }
        
    }

    return <>
        <input type="text" onKeyDown={input_Func} ref={inputRef}></input>
    </>
}