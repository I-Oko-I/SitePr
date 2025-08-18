import { useContext, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addChange_TDL, show_TDL, delete_TDL } from "./Store/SliceLocStorage"

import { ContextApp } from "../App"
import { getNameLocSt, setNameLocSt, delAllNameLocSt } from "./LocStorage"

function FuncFold (){

    // сделать список от переменной
    // сделай функции: добавить, удалить, сделано, несделанно
    // пока у меня будет функционал экспортированный сюда
    // далее сделай пару хуков для работы: 
    // кнопочный текст со сменной шрифта
    // статистику
    // фильтр кнопку: дата изменений, выполненное
    // очистить невыполненное все
    // удалить объект

    let selectorTodoLst = useSelector((state)=>state.Sl_ToDoLst)
    let dispatch = useDispatch()
    

    let addDispatcher_TDL = ((obj)=>{dispatch(addChange_TDL(obj))})
    let showDispatcher_TDL = (name)=>{dispatch(show_TDL(name))}
    let deleteDispatcher_TDL = ((name)=>{dispatch(delete_TDL(name))})
    // функции нельзя называть одинаково. Не перезаписывается

    let ScrollToDoList = [1,2,3]

    let template = {1: {description: "доделай задачу", status: false, id:1}}
    let clearTemplate = {description: null, status: false, id:null}

    // delAllNameLocSt()
    let clearLS = ()=>{
        // deleteDispatcher_TDL()
        dispatch(delete_TDL())
        // console.log(selectorTodoLst)
    }
    


        // Делаем массив.
        // Если в массиве меняются переменные- пусти не меняются все элементы. Memo.map будет меняться при обновлении списка(удалить/добавить)
        // Массив мемоизируй

        // У меня есть функции
        // Сделай 1 div со стастикой и кнопками фильтра
        // Компонент статистики обновляется, в любом раскладе. Статистика это Array_TDL length
        // Кнопка для перендера положений списка дел.

        // Сделай 2 div с компонентами (Кнопка текст, удалить кнопка)
        // Мемоизируй компонент, зависимости:(длинна Array_TDL дел)

        // Сделай 3 div добавления(он выше). Функция возвращает и обновляет селектор.  Array_TDL, фильтруя его.
        //  Если меняется фильтр- обновляется список и статистика
        let [filterType, setFilterType]= useState(1)

        let Array_TDL = useMemo(()=>{
            // console.log("перерасчет")
            let newArray= new Array
            for (let val in selectorTodoLst){
                newArray.push(selectorTodoLst[val])
            }

            switch(filterType){
                case 1 : {
                    console.log("как есть")
                    return newArray
                };
                case 2 : {
                    console.log("сортировка")
                    return newArray.sort((a,b)=>{
                        if(a.status==true && b.status==false) return 1
                        if(a.status==false && b.status==false) return 0
                        if(a.status==false && b.status==true) return -1
                    })
                }
            }

            
        },[selectorTodoLst,filterType])
        // Селектор ререндерится !!

        let [key,setKey] = useState(-1)

        // 
        
        let Head_TDL = ()=>{
            let data = Array_TDL
            let countDone= data.filter((val)=>(val[Object.keys(val)[0]].status===true))
            countDone= countDone.length

            let Filter_TDL = ()=>{
                // Куда поместим фильтр?
                /*помещает в Array_TDL. У него будет if с Хуком-зависимостью */
                let doneStyle={
                    backgroundColor:"blue"
                }
                let timeStyle={
                    backgroundColor:"red"
                }

                let  sortingFunc = ()=>{

                    let nextType = (filterType!==2)? filterType+1 : 1
                    setFilterType(nextType)
                    console.log(Array_TDL)
                }
                return(
                    <>
                        <button style={filterType==1?doneStyle:timeStyle} onClick={sortingFunc}>D/U</button>
                    </>
                )
            }

            return<>
            <span>Сделано:{data.length}; неСделано:{countDone}</span>
            <Filter_TDL></Filter_TDL>
            {/* сделай виды сортировок */}
            </>
        }


        // Сделай классы для "Сделано, неСделано"
        
        
        
        let DoListComponent = ()=>{

            let DoComponent = ({data})=>{

            let dataBase = data

            let [doneStatus, setDoneStatus] = useState (data.status)
            // изменения без хука не будут перендеривать DoListComponent.


            let done_CSS = {
                textDecoration: "line-through",   
            }

            let undone_CSS = {

            }
            
            let changeStatus = ()=>{
                // dataBase.status = true
                // let dataBase=dataBase
                // Почему в одной функции нельзя менять внешнюю переменную
                // dataBase.status=!doneStatus

                // Меняю статус в state

                // console.log(dataBase)

                // addDispatcher_TDL(dataBase)
                setDoneStatus(!doneStatus)
            }

            let deleteFunc = ()=>{deleteDispatcher_TDL(data.id)}
            // !doneStatus? "" : ""
            return<>
                <button style={doneStatus? done_CSS : undone_CSS} onClick={changeStatus}>{data.description}</button>
                <button onClick={deleteFunc}>x</button>
            </>
        }

            return<>

            {Array_TDL.map((data,ind)=>(
                <div key={ind}>
                <DoComponent data={data}></DoComponent>
                </div>
                
            ))}
            </>
        }

        // Array_TDL вызывает ререндер всего. Стоит ли его перенести в другой компонент? За нет: у меня

        let Search_TDL = ()=>{
            let inputRef = useRef()

            let input_Func = (event)=>{
                if (event.key === "Enter"){

                    let newData = new Object
                    setKey(++key)
                    // сгенерируй id
                    // newData[key]=new Object

                    let dataTemplate= [inputRef.current.value, false, key]

                    for (let val=0; val!=3; val++)
                    {
                        let key_DataTemplate = Object.keys(clearTemplate)
                        // newData[Object.keys(newData)[0]][key_DataTemplate[val]]=dataTemplate[val]
                        newData[key_DataTemplate[val]]=dataTemplate[val]

                        
                    }
                    // console.log(newData)
    
                    addDispatcher_TDL(newData)
                    // Сделай одинарную очистку кеша
                }
                
            }

            return <>
                <input type="text" onKeyDown={input_Func} ref={inputRef}></input>
            </>
        }

        // let MDoListComponent = memo(DoListComponent,(oldProps,newProps)=>(oldProps.length==newProps.length))
        

    return (
        <>
            <button onClick={clearLS}>очисти</button>
            <Head_TDL></Head_TDL>
            <Search_TDL></Search_TDL>
            <DoListComponent></DoListComponent>
            
        </>
    )
}

export default FuncFold