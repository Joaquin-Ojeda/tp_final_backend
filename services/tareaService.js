const tareaRepository = require('../repository/tareaRepository');

exports.getTareas = ()=>{
    return tareaRepository.getTareasRepo();
}

exports.getTareaById = (id)=>{
    return tareaRepository.getTareaByIdRepo(id);
}

exports.updateTarea = (id, tarea)=>{
    return tareaRepository.updateTarea(id, tarea);
}