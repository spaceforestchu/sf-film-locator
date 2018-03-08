import app from './app';
import { userDatabase } from './backend/user/userModel';

const { PORT = 3000 } = process.env;

userDatabase.sync({ loggin: false, force: false })
.then(function() {
  app.listen(PORT, () => {
    console.log('Postgres data base connected');
    console.log(`Listening on port ${PORT}`);
  });
}).catch(console.error);
