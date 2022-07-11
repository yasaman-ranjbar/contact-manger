import http from "./httpService";

export function deleteContact(id) {
  return http.delete(`/contacts/${id}`);
}
