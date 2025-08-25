import { createSlice } from "@reduxjs/toolkit";
import { setNameLocSt, getNameLocSt,} from "./LocStorage"
// import /*добавь функции local storage */

// let initialState = [{description: "Проверь первый ком", status:false},{description: "Работает второй пункт?", status:false}]
let initialState =  getNameLocSt

let sliceTodoLst = createSlice({
    name: "sliceTodoLst",
    initialState:initialState,
    reducers: {
        add_TDL:(state, data)=> {
            // console.log("slice добавление")
            // console.log(data.payload)
            state.push(data.payload)
        },
        change_TDL:(state, action)=> {
            // console.log("slice изменение")

            let id = action.payload.id
            let obj = action.payload.obj

            state.splice(id,1,obj)

        },
        delete_TDL:(state, id)=>{
            // console.log("slice удаление")
            state.splice(id.payload,1)
        },
    }
})

export let Sl_ToDoLst = sliceTodoLst.reducer

export let {add_TDL, change_TDL, delete_TDL, } = sliceTodoLst.actions

// проблема в locStorage. Протести locStorage
