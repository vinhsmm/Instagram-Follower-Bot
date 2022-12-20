const request = require('request');
const apiKey = "V597LNnPnnbcoSWnqfoSywTdwYLLaxen";
const link = "https://www.instagram.com/vinhkicks/";
const quantity = 1000;

request.post({
    url: `https://vinhsmm.com/api/v1?key=${apiKey}&action=add&service=53&link=${link}&quantity=${quantity}`,
}, (err, body, res) => {
    const resp = JSON.parse(res)
    console.log(resp)
})
