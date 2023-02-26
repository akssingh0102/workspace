const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

// DATABASE CONFIG
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then((_con) => console.log('DB connection successful !!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
