require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

let endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=Web7hrcJnuWxC62zvBtx2WQkHFNDsNyC&q=25&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

async function getImage(query) {
    const response = await fetch (endpoint)
    const data = await response.json()
}

let url = "https://giphy.com/gifs/birthday-25-3oriNSevfPEs37Fex2"

console.log(url);
