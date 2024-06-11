const Tareas = require('./Tareas');

exports.getTareasRepo = async ()=>{
    try{
        let tareas = await Tareas.find();
        return tareas;
    }catch(error){
        console.log(error);
    }
};

exports.getTareaByIdRepo = async (id)=>{
    try{
        let tarea = await Tareas.findById(id);
        return tarea;
    }catch(error){
        console.log(error);
    }
};




































































































exports.deleteTareaByIdRepo = async (id) => {
    try{
        let tarea = await Tareas.findById(id);
        
        if(!tarea){
            return console.log(`Repository: No existe el id: ${id}`)
        }else{
            console.log(`Repository: Se eliminó la tarea con id: ${id}`)
            return await Tareas.findByIdAndDelete({_id:id})
        }
        
    }catch(error){
        return console.log(error);
    }
}