// import fetch from 'node-fetch'

// async function getDataAsync() {
// try {
// const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
// const data = await response.json()// Have to extrace the body of the response and this is how
// console.log(data)
// } catch (err) {
//     console.error (err) 
// }
// }
// getDataAsync();



//--------------------------

fetch('https://api.sampleapis.com/beers/ale')
    .then(response => response.json()) 
    .then(data => console.log(data[87]))
    .catch(err =>console.error(err))
