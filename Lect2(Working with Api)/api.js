const https = require('https');
https.get('https://api.github.com/users/sparshsaxena', { headers: { 'User-Agent': 'node.js' } }, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        console.log(user);
    });

    ///now with axios 
    const axios = require('axios');
    axios.get('https://api.github.com/users/sparshsaxena', { headers: { 'User-Agent': 'node.js' } })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });