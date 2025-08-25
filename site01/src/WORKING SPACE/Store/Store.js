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


store.subscribe(() => {
    let dataState = store.getState().Sl_ToDoLst
    console.log("subscribe данные")
    console.log(dataState)
    setNameLocSt(dataState)
})