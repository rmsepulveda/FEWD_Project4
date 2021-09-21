var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const { default: axios } = require('axios');
dotenv.config();
const cors = require('cors');
const app = express()
// Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.


app.use(cors());
app.use(bodyParser.json())//bodyParser not needed with express ver 4.16.0 or higher
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());app.use(cors());
app.use(bodyParser.json())//bodyParser not needed with express ver 4.16.0 or higher
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('dist'))

// API URL setup and API Key
//const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// route /api fetch API data
app.post('/api', async function(req, res) {
    //console.log(apiKey)
    //const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`
    console.log(apiURL)
    const response = await axios(apiURL)
    //console.log('response =======>', response)
    res.send(response.data)
    

})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
