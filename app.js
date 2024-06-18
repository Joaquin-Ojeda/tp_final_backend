const express = require('express');
const cors = require('cors');
const tareaRouter = require('./routers/tareaRouter');

const PORT = process.env.PORT || 3000;
const app = express();

//Middleware
app.use(cors());
 

app.use('/api/tareas', tareaRouter);

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})