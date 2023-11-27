import express from 'express';

const { Router } = express;

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'Express with babel and HRM', icon });
});

router.get('/author', (req, res) => {
  // Creating a View-Model
  const author = {
    name: 'Luis Alfonso',
    lastname: 'Guzman Jimenez',
    job: 'Expendio bimbo',
  };
  // Sending the view-model to be rendered by a View
  res.render('author', author);
});

export default router;
