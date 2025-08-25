import { useRef, useState } from "react"
import { add_TDL, change_TDL, delete_TDL } from "../Store/SliceLocStorage"
import { useDispatch, useSelector } from "react-redux"

 export let SearchTDL_Component = ()=>{

    let selectorTodoLst = useSelector((state)=>state.Sl_ToDoLst)
    let dispatch = useDispatch()

    let addD_TDL = (obj)=>{dispatch(add_TDL(obj))}

    /*Поговорим о данных. Я буду вводить данные и они будут отправляться на сервер. С сервера отправляются в DLC.
    Объект или массив. Тут будет массив, потому что это slice. Автозапуск забирает state из сервера*/
    let inputRef = useRef()

    let input_Func = (event)=>{
        if (event.key === "Enter"){

            let dataTemplate= {description: inputRef.current.value, status: false}
            console.log(dataTemplate)

            addD_TDL(dataTemplate)
            // Тут заканчивается перерендер?
            inputRef.current.value=null
        }
        
    }

    return <>
        <input type="text" onKeyDown={input_Func} ref={inputRef}></input>
    </>
}