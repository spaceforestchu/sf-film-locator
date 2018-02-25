import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.json({
    confirmation: 'success',
  });
});

export default routes;
