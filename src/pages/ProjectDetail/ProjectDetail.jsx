import React, { useEffect, useState } from 'react';
 // Asegúrate de importar desde 'react-router-dom'
import './ProjectDetail.css';
import { useParams } from 'react-router';

const ProjectDetail = () => {
  const { proyecto } = useParams(); // Obtiene el parámetro directamente
  const [project, setProject] = useState(null); // Inicializa como null

  useEffect(() => {
    console.log(proyecto);

    // Simulación de una carga de datos del proyecto basado en el parámetro
    setProject({ name: proyecto, description: "Descripción de ejemplo" });
  }, [proyecto]); // Añade `proyecto` como dependencia

  return (
    <div className='projectdetail'>
      <h2>{project ? project.name : "Cargando..."}</h2>
      <p>{project?.description}</p>
    </div>
  );
};

export default ProjectDetail;
