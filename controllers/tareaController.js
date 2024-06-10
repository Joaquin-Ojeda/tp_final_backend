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

exports.updateTarea = async (req, res)=>{
    try{
        const tarea = await tareaService.updateTarea(req.params.id, req.body);
        if(tarea){
            res.status(200).send(req.body);
        }else{
            res.status(404).send("Error al actualizar tarea con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al actualizar tarea.");
    }
}