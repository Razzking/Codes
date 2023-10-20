// Task 4: Promises, Async, and Await

// Write an async function called 'fetchData' that fetches data from a given URL using fetch.
// Handle any errors that may occur during the fetch using try-catch and return the data as JSON.

async function fetchData(URL) {

    try {
        
        let data = await fetch(URL);
        return await data.json()

    } catch (error) {
        console.log("ERROR!!")
    }
}
console.log(fetchData('https://jsonplaceholder.typicode.com/posts/1'))