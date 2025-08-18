// функция для хранения хранилища и использования
// load state

// localStorage.setItem('Иван', JSON.stringify({name: "Ivan", age: 20}))

const storageID = "toDoLst"


export const getNameLocSt = (name) => (name!==undefined)? JSON.parse(localStorage.getItem(storageID))[name] : JSON.parse(localStorage.getItem(storageID))
// export const getNameLocSt = (name) => {console.log(name); return{}}

export const setNameLocSt = (obj) => {


    localStorage.setItem(storageID, JSON.stringify(obj))

}


// export const delAllNameLocSt = () => localStorage.clear(storageID)


