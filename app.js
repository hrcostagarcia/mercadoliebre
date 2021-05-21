const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path')
const app = express()
publicPath = path.join(__dirname, 'public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath) // nos da por consola la ruta del public

app.use(express.static(publicPath));

app.listen(3060, () => console.log('Servidor corriendo ')) // levantamos una server en localhost

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/login', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html')
    res.sendFile(htmlPath)
});

app.get('/reset_account', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/reset_account.html')
    res.sendFile(htmlPath)
});

app.get('/register', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html')
    res.sendFile(htmlPath)
});

app.get('/market', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/market.html')
    res.sendFile(htmlPath)
});