import { useDispatch, useSelector } from "react-redux"
import { add_TDL, change_TDL, delete_TDL } from "../Store/SliceLocStorage"

export let HeadTDL_Component = ()=>{
    let selectorTodoLst = useSelector((state)=>state.Sl_ToDoLst)
    let dispatch = useDispatch()

    let allCount_TDL = selectorTodoLst.length
    let unDoneCount_TDL = selectorTodoLst.filter((val)=>val.status == false).length

    return(
        <>
            <span>Количество задач:{allCount_TDL}</span>
            <br/>
            <span>Осталось несделенных:{unDoneCount_TDL}</span>
        </>
    )
}