const tareaService = require('../services/tareaService');

exports.readTareas = async (req, res)=>{
    try{
        const tareas = await tareaService.getTareas();
        res.status(200).send(tareas);
    }catch(error){
        console.log(error)
        res.status(500).send("Error al conseguir tareas.");
    }
    
};

exports.readTareaById = async (req, res)=>{
    try{
        const tarea = await tareaService.getTareaById(req.params.id);
        if(tarea){
            res.status(200).send(tarea);
        }else{
            res.status(404).send("Error al encontrar tarea con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar tarea.");
    }
};

exports.createTarea = async(req, res) => {
    try {
        const tarea = await tareaService.postTarea(req.body)
        res.status(200).send(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al crear la tarea.")
    }
}