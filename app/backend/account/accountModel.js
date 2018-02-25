import Sequelize from 'sequelize';

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sf-film-map';

const options = {
  dialect: 'postgres',
};

const accountDatabase = new Sequelize(connectionString, options);

const account = accountDatabase.define('account', {
  full_name: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Full name cannot be empty',
      },
    },
  },
  birthday: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Birthday cannot be empty',
      },
    },
  },
  gender: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Gender cannot be empty',
      },
      isAlpha: true,
    },
  },
  email: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Email is not valid',
      },
      notEmpty: true,
    },
  },
  username: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Username cannot be empty',
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'password cannot be empty',
      },
    },
  },
});

export {
  accountDatabase,
  account,
};
