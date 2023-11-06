import * as Yup from 'yup';

// crear un esquema de validacion
const projectSchema = Yup.object().shope({
  name: Yup.string().required('Se requiere un nombre de projecto'),
  description: Yup.string()
    .max(500, 'La descripcion no debe de tener mas de 500 caracteres')
    .required('se requiere un descripcion del proyecto'),
});

// Middle de extraccion
const getProject = (req) => {
  // extrayendo datos de la peticion
  const { name, description } = req.body;
  return {
    name,
    description,
  };
};
export default {
  projectSchema,
  getProject,
};
