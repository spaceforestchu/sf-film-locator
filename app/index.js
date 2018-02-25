import app from './app';
import { accountDatabase } from './backend/account/accountModel';

const { PORT = 3000 } = process.env;

accountDatabase.sync({ loggin: false, force: false })
.then(function() {
  app.listen(PORT, () => {
    console.log('Postgres data base connected');
    console.log(`Listening on port ${PORT}`);
  });
}).catch(console.error);
