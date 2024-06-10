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

exports.postTareaRepo = async(tarea) => {
    try {
        let newTarea = new Tareas(tarea);
        await newTarea.save();
    } catch (error) {
        console.log(error)
    }
};

exports.updateTarea = async (id, tarea)=>{
    try{
        let identifier = {_id: id};
        let body = {    
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            asignado: tarea.asignado,
            fecha_fin: tarea.fecha_fin,
            estado: tarea.estado
        };
        let tareaNueva = await Tareas.updateOne(identifier, body, {new: true});
        return tareaNueva;
    }catch(error){
        console.log(error);
    }
};