require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query) {
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=Web7hrcJnuWxC62zvBtx2WQkHFNDsNyC&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch (endpoint)
    const data = await response.json()
}

let url = "https://giphy.com/gifs/nehumanesociety-funny-dog-3o7527pa7qs9kCG78A"

console.log(url);
