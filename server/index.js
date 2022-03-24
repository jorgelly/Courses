const app = require('./app');
const db = require('./db/database');
const PORT = 8080;

const init = async () => {
  await db.sync({force: true});
  console.log('Database has been synced.')
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}!`));
}

init();
