import http from "./httpService";


export function addContact(data) {
    return http.post('/contacts' , data)
}