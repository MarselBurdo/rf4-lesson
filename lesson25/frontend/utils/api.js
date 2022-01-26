export const api = {
  url: "http://localhost:2715/restarants",
  get() {
    return fetch(this.url).then((res) => res.json());
  },
  delete(id) {
    return fetch(this.url + "/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
  },
  put(id) {
    return fetch(this.url + "/" + id, { method: "PUT" }).then((res) =>
      res.json()
    );
  },
};
