import { Router } from 'express';
import * as userController from './userController';

const routes = Router();

routes.get('/', async (req, res) => {
  try {
    const users = await userController.get({});
    res.json({
      confirmation: 'success',
      result: users,
    });
  } catch (error) {
    res.json({
      confirmation: 'failure',
      error,
    });
  }
});

routes.get('/getuserbyid/:id', async (req, res) => {
  const paramsData = req.params;
  const { id } = paramsData;
  try {
    const foundUserByID = await userController.getById(id);
    res.json({
      confirmation: 'success',
      result: foundUserByID,
    });
  } catch (error) {
    res.json({
      confirmation: 'failure',
      error: error.toString(),
    });
  }
});

routes.post('/signup', async (req, res) => {
  try {
    const createdUser = await userController.createUser(req.body);
    res.json({
      confirmation: 'success',
      result: createdUser,
    });
  } catch (error) {
    res.statusMessage = error.toString();
    res.status(400).json({
      confirmation: 'failure',
      error: error.toString(),
    });
  }
});

routes.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedUser = await userController.updateUser(body, id);
    res.json({
      confirmation: 'success',
      result: updatedUser,
    });
  } catch (error) {
    res.json({
      confirmation: 'failure',
      error: error.toString(),
    });
  }
});

routes.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await userController.deleteUserByID(id);
    res.json({
      confirmation: 'success',
      result: deletedUser,
    });
  } catch (error) {
    res.json({
      confirmation: 'failure',
      error: error.toString(),
    });
  }
});

export default routes;
