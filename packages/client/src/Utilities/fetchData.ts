export const fetchData = async (input, callback) => {
  await fetch(`http://localhost:4000/rest/cities/?name=${input}`)
    .then(res => res.json())
    .then(data => callback(data.cities))
    .catch(e => console.log(e))
}
