import { useContext, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { add_TDL, change_TDL, delete_TDL } from "./Store/SliceLocStorage"

import { DoListTDL_Component } from "./SubPage01/DoListComponent";
import { SearchTDL_Component} from "./SubPage01/SearchComponent"
import { HeadTDL_Component } from "./SubPage01/Head";


function FuncFold (){


    // функции нельзя называть одинаково. Не перезаписывается


    return (
        <>
            {/* <button onClick={clearLS}>очисти</button> */}
            {/* <Head_TDL></Head_TDL> */}
            <HeadTDL_Component></HeadTDL_Component>
            <br />
            <SearchTDL_Component></SearchTDL_Component>
            <DoListTDL_Component></DoListTDL_Component>
            
        </>
    )
}

export default FuncFold


// Спроси как работают перерендеры