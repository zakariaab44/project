const express  = require("express")
const app = express()

app.get("/", (req, res) => {
	res.status(201).send("<h1>Hello World:</h1>")
})

app.listen(80,  "0.0.0.0")




