import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_TDL, change_TDL, delete_TDL } from "../Store/SliceLocStorage"



export let DoListTDL_Component = ()=>{

    let selectorTodoLst = useSelector((state)=>state.Sl_ToDoLst)
    let dispatch = useDispatch()

    let addD_TDL = (obj)=>{dispatch(add_TDL(obj))}
    let changeD_TDL = (obj,id)=>{dispatch(change_TDL({obj,id}))}
    let deleteD_TDL = (id)=>{dispatch(delete_TDL(id))}

    

    console.log("DLC рендер")
    console.log(selectorTodoLst)


    // 
    let DoComponent = ({data,id})=>{

        // data-массив объектов
        console.log("рендер компонента")
        console.log(data)

        data = Object.assign({},data)

        let [doneStatus, setDoneStatus] = useState (data.status)


        let done_CSS = {
            textDecoration: "line-through",   
        }

        let undone_CSS = {
            textDecoration: "none",
        }
        
        let changeStatus = ()=>{
            data.status = !data.status
            console.log("смена статуса объекта")
            // console.log(data)


            setDoneStatus(!doneStatus)

            changeD_TDL(data,id)

            // Если данные не перерендерит список- его перерендерит хук
        }

        let deleteFunc = ()=>{

            deleteD_TDL(id)

            //поменяй удаление данных на что то другое

            // Два массива все таки имеют одинаковую ссылку при прям копировании. Зачем нужен prev в setUseState

            // setDoListData(prev => {
            //     let temp = prev
            //     temp.splice(id,1)
            //     return temp
            // })

            console.log("удаление объекта")
            console.log(id)
            console.log(selectorTodoLst)
        }

        return<>
            <button style={doneStatus? done_CSS : undone_CSS} onClick={changeStatus}>{data.description}</button>
            <button onClick={deleteFunc}>x</button>
        </>
    }
// 

    return(
    <>

    {selectorTodoLst.map((data,ind)=>(
        <div key={ind}>
        <DoComponent data={data} id={ind}></DoComponent>
        {/* data - объект */}
        </div>
        
    ))}
    </>)
}