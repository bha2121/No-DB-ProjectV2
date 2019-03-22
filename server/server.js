const express = require('express')

const app = express()
const SC = require(`./controllers/controller`)

app.use(express.json())


const port = 4444


app.get(`/api/sneakers`, SC.getSneakers)
app.post(`/api/sneakers`, SC.addSneakers)
app.put(`/api/sneakers/:id`, SC.editSneakers)
app.delete(`/api/sneakers/:id`, SC.deleteSneakers)









app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
