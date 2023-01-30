import axios from "axios";


const key = process.env.REACT_APP_KEY
const token = process.env.REACT_APP_TOKEN


export function getBoards() {
    return  axios.get(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
    .then(res => {
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function createBoard(name) {
    return axios.post(`https://api.trello.com/1/boards/?name=${name}&key=${key}&token=${token}`)
    .then(res => {
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function deleteBoard(id) {
    return axios.delete(`https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`)
    .then(res => {
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function getLists(id) {
    return axios.get(`https://api.trello.com/1/boards/${id}/lists?key=${key}&token=${token}`)
    .then(res => {
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function createList(name, id) {
    return axios.post(`https://api.trello.com/1/boards/${id}/lists?name=${name}&key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function deleteList(id) {
    return axios.put(`https://api.trello.com/1/lists/${id}/closed?key=${key}&token=${token}&value=true`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function getCards(id) {
    return axios.get(`https://api.trello.com/1/lists/${id}/cards?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function createCard(id, name) {
    return axios.post(`https://api.trello.com/1/cards?idList=${id}&key=${key}&token=${token}&name=${name}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function deleteCard(cardId) {
    return axios.delete(`https://api.trello.com/1/cards/${cardId}?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function getChecklists(cardId) {
    return axios.get(`https://api.trello.com/1/cards/${cardId}/checklists?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function createChecklist(cardId, name) {
    return axios.post(`https://api.trello.com/1/cards/${cardId}/checklists?key=${key}&token=${token}&name=${name}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function deleteChecklist(cardId, checklistId) {
    return axios.delete(`https://api.trello.com/1/cards/${cardId}/checklists/${checklistId}?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function getCheckItem(id) {
    return axios.get(`https://api.trello.com/1/checklists/${id}/checkItems?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function createCheckItem(id, name) {
    return axios.post(`https://api.trello.com/1/checklists/${id}/checkItems?name=${name}&key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function getCheckItemsOnCard(id) {
    return axios.get(`https://api.trello.com/1/cards/${id}/checkItemStates?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function deleteCheckItem(checklistId, checkItemId) {
    return axios.delete(`https://api.trello.com/1/checklists/${checklistId}/checkItems/${checkItemId}?key=${key}&token=${token}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function updateCheckItem(cardId, checklistId, checkItemId, newState) {
    return axios.put(`https://api.trello.com/1/cards/${cardId}/checklist/${checklistId}/checkItem/${checkItemId}?key=${key}&token=${token}&state=${newState}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}
