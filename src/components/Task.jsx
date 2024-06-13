import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { pedirTareasPorUsuario, crearTarea, actualizarTarea, eliminarTarea } from '../helpers/pedirDatos';
import ModalTask from './ModalTask';
import '../style/Task.css';
import '../style/Comentario.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskParaEditar, setTaskParaEditar] = useState(null);
  const auth = useAuth();
  const user = auth.getMe();

  useEffect(() => {
    const fetchTasks = async () => {
      const tareas = await pedirTareasPorUsuario(user.usuario_id);
      setTasks(tareas);
    };
    fetchTasks();
  }, [user.usuario_id]);

  const handleAgregarTarea = async (task) => {
    const nuevaTarea = await crearTarea({ ...task, usuario_id: user.usuario_id });
    if (nuevaTarea) {
      setTasks([...tasks, nuevaTarea]);
    }
  };

  const handleActualizarTarea = async (task) => {
    const tareaActualizada = await actualizarTarea(taskParaEditar.task_id, { ...task, usuario_id: user.usuario_id });
    if (tareaActualizada) {
      setTasks(tasks.map(t => t.task_id === taskParaEditar.task_id ? tareaActualizada : t));
    }
    setTaskParaEditar(null);
  };

  const handleEliminarTarea = async (taskId) => {
    const eliminado = await eliminarTarea(taskId, user.usuario_id);
    if (eliminado) {
      setTasks(tasks.filter(task => task.task_id !== taskId));
    }
  };

  const handleEditarClick = (task) => {
    setTaskParaEditar(task);
    setIsModalOpen(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC' // Asegura que la fecha no cambie debido a la zona horaria
    });
  };

  return (
    <div className='container'>
      <h1>Mis Pendientes</h1>
      <button onClick={() => setIsModalOpen(true)}>Agregar Tarea</button>
      <br/>
      <br/>
      <ul>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.task_id} className='comentario-wrapper'>
              <p>Descripción: {task.descripcion}</p>
              <p>Fecha: {formatDate(task.fecha)}</p>
              <button onClick={() => handleEditarClick(task)}>Editar</button>
              <button onClick={() => handleEliminarTarea(task.task_id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No tienes tareas asignadas.</p>
        )}
      </ul>
      <ModalTask
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={taskParaEditar ? handleActualizarTarea : handleAgregarTarea}
        taskParaEditar={taskParaEditar}
      />
    </div>
  );
}

export default Task;
