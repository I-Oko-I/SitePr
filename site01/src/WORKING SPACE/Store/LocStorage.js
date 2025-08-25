// функция для хранения хранилища и использования
// load state

// localStorage.setItem('Иван', JSON.stringify({name: "Ivan", age: 20}))

const storageID = "toDoLst"


export const getNameLocSt = () => JSON.parse(localStorage.getItem(storageID))

// Sql
// agile


// export const getNameLocSt = (name) => {console.log(name); return{}}

export const setNameLocSt = (obj) => {


    localStorage.setItem(storageID, JSON.stringify(obj))

}


// export const delAllNameLocSt = () => localStorage.clear(storageID)


