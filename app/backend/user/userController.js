import bcrypt from 'bcrypt';
import { users } from './userModel';

export const get = async (params) => {
  try {
    const usersRecords = await users.findAll({
      attributes: {
        exclude: ['password'],
      },
      where: params,
      order: [
        ['id', 'ASC'],
      ],
    });
    return usersRecords;
  } catch (error) {
    return error;
  }
};

export const getById = async (id) => {
  try {
    const user = await users.findOne({
      attributes: {
        exclude: ['password'],
      },
      where: {
        id,
      },
    });
    if (user === null || user === undefined) {
      throw new Error('User does not exist');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const { fullName } = userData;
    const { email } = userData;
    const { password } = userData;
    const { birthday } = userData;
    const { gender } = userData;
    const { username } = userData;

    const ifEmailExist = await users.findOne({
      where: {
        email,
      },
    });
    const ifUsernameExist = await users.findOne({
      where: {
        username,
      },
    });

    if (ifEmailExist !== null) {
      throw new Error('Email already exist. Please log in.');
    } else if (ifUsernameExist !== null) {
      throw new Error('Username already exist. Please choose another one.');
    } else {
      let passwordHash;

      const saltRounds = process.env.SALTROUNDS || 10;
      const salt = bcrypt.genSaltSync(saltRounds);

      if (password) {
        passwordHash = bcrypt.hashSync(password, salt);
      }
      const createdUser = await users.create({
        full_name: fullName,
        email,
        password: passwordHash,
        birthday,
        gender,
        username,
      });

      if (createdUser === undefined || createdUser === null) {
        throw new Error('Problem creating user. Please try again.');
      }
      return createdUser;
    }
  } catch (error) {
    throw error;
  }
};

export const currentUser = async (req) => {
  if (req.user === null) {
    throw new Error('current user does not exist. Please log in');
  }

  if (req.user.id === null) {
    throw new Error('current user does not exist. Please log in');
  }
  const foundCurrentUser = await users.findOne({
    attributes: {
      exclude: ['password'],
    },
    where: {
      id: req.user.id,
    },
  });

  if (foundCurrentUser === null) {
    throw new Error('Please log in');
  }
  return foundCurrentUser;
};

export const updateUser = async (userData, id) => {
  const { fullName } = userData;
  const { email } = userData;
  const { password } = userData;
  const { birthday } = userData;
  const { gender } = userData;
  const { username } = userData;

  let passwordHash;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  if (password) {
    passwordHash = bcrypt.hashSync(password, salt);
  }

  const updatedUser = await users.update({
    fullName,
    gender,
    email,
    birthday,
    username,
    passwordHash,
  }, {
    where: {
      id,
    },
  });

  if (updatedUser === null || updatedUser === undefined) {
    throw new Error(`Error: ${updatedUser}`);
  }
  return updatedUser;
};

export const deleteUserByID = async (id) => {
  const deletedUser = await users.destroy({
    where: {
      id,
    },
  });

  if (deletedUser === 0) {
    throw new Error('User does not exist');
  }

  if (deletedUser === 1) {
    return 'Successfully deleted user';
  }
  return 'Successfully deleted user';
};

export const findOne = async (profile) => {
  const profileID = profile.id;
  const foundFacekbookUser = await users.findOne({
    where: {
      id: profileID,
    },
  });

  if (foundFacekbookUser === null || foundFacekbookUser === undefined) {
    return false;
  }

  return foundFacekbookUser;
};
