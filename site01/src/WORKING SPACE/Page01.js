import { useContext, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { add_TDL, change_TDL, delete_TDL } from "./Store/SliceLocStorage"

import { DoListTDL_Component } from "./SubPage01/DoListComponent";
import { SearchTDL_Component} from "./SubPage01/SearchComponent"
import { HeadTDL_Component } from "./SubPage01/Head";


function FuncFold (){
    // Если данные не перерендерит список- его перерендерит хук DLC
    // Тут заканчивается перерендер? SearchComponent
    // Зачем  нужен preLoadedState?

    // DLC
    //поменяй удаление данных на что то другое
    // Два массива все таки имеют одинаковую ссылку при прям копировании. Зачем нужен prev в setUseState



    return (
        <>
            <HeadTDL_Component></HeadTDL_Component>
            <br />
            <SearchTDL_Component></SearchTDL_Component>
            <DoListTDL_Component></DoListTDL_Component>
            
        </>
    )
}

export default FuncFold