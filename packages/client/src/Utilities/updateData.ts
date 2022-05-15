// import { fetchData } from "./fetchData";

export const updateData = (items, id) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  }
  fetch(`http://localhost:4000/rest/cities/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
}
