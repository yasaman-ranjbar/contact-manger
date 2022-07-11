import http from "./httpService";


export  function getContacts() {
    return http.get('/contacts')
}