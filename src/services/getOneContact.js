import http from "./httpService";


export  function getOneContacts(id) {
    return http.get(`/contacts/${id}`)
}