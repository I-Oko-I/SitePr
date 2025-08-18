import { createSlice } from "@reduxjs/toolkit";
import { setNameLocSt, getNameLocSt, deleteNameLocSt, getAllNameLocSt } from "../LocStorage"
// import /*добавь функции local storage */

let initialState = {}

let sliceTodoLst = createSlice({
    name: "sliceTodoLst",
    initialState:initialState,
    reducers: {
        show_TDL:(state, name)=> {
            console.log (getNameLocSt(name))},
        addChange_TDL:(state, obj)=> {
            // console.log(obj.payload)
            let objFltrd= obj.payload
            objFltrd={[objFltrd.id]:objFltrd}
            console.log(objFltrd)
            let newStorage = state
            let key_newStorage = Object.keys(objFltrd)[0]
            newStorage[key_newStorage] = objFltrd[key_newStorage]
            state = newStorage
        },
        delete_TDL:(state, name)=>{
            // console.log(state)
            let dataFltrd = name.payload
            if(name.payload!==undefined){
                delete state[dataFltrd]
            }else{state={}}
            // console.log("удалить")
            // console.log(state)
            // почему null. Знает ли какой тип у null?
        },
    }
})

// state это все что в моем поисковике. Возможно есть вещив локал.сторе за пределами его- тогда они в состоянии не будут
// добавляем: перекидываем инфу в локалку. из локалки передаем правильные данные в state. state работает в fold.
// удаляем: перекидываем инфу в локалку, удаляем объект. из локалки передаем правильные данные в state. state работает в fold.
// удаляем все
// показать, показать весь список из локал стора
export let Sl_ToDoLst = sliceTodoLst.reducer

export let {show_TDL, addChange_TDL, delete_TDL, } = sliceTodoLst.actions

// проблема в locStorage. Протести locStorage
