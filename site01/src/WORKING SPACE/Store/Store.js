import { useContext } from "react";
import { useSelector, useDispatch, } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";

import { Sl_ToDoLst } from "./SliceLocStorage";
import { getNameLocSt, setNameLocSt, deleteNameLocSt, getAllNameLocSt } from "./LocStorage";

export let store = configureStore ({
    reducer:{
        Sl_ToDoLst: Sl_ToDoLst
    },
    // preloadedState: {...stateLocSt, Object.value(state_TDL)[0]}/*выводит ошибку P.S. разархивируй 16-17*/
})

// let state_TDL = getAllNameLocSt()
// let stateLocSt= store.getState()
// stateLocSt[   Object.keys(state_TDL)[0]  ] = Object.values(state_TDL) [0]


store.subscribe(() => {
    let dataState = store.getState().Sl_ToDoLst
    console.log("subscribe данные")
    console.log(dataState)
    setNameLocSt(dataState)
})
// что я хочу, чтобы отображалось?


// сделать todo лист с local storage 
// удалить добавить, сделано, несделано, фильтр по сделанности, статистика

// добавь слайс
// разберись с getstate