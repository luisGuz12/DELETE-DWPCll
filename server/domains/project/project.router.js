// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './project.controller';
import projectController from './project.controller';

// Creando una instancia del enrutador
const router = new Router();

// Enrutamos
// GET '/project/projects
router.get('/', userController.dashboard);

// GET '/project/dashboard
router.get('/dashboard', userController.dashboard);

// GET '/project/add-form
router.get('project/addView', userController.addform);

// GET '/project/add
router.get('/add', projectController.add);

// POST "/project/add"
router.post('/add', projectController.addPost);
// Exporto este tramo de ruta
export default router;
