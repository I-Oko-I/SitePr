// функция для хранения хранилища и использования
// load state

// localStorage.setItem('Иван', JSON.stringify({name: "Ivan", age: 20}))

const storageID = "toDoLst"


export const getNameLocSt = () => JSON.parse(localStorage.getItem(storageID))

// Sql
// agile


export const setNameLocSt = (obj) => {


    localStorage.setItem(storageID, JSON.stringify(obj))

}



