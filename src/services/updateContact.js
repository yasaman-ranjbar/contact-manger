import http from "./httpService";


export function updateContact(id , data) {
    return http.put(`/contacts/${id}` , data);
}