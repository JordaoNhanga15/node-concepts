const app = require('./');
const kleur = require('kleur');
const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT, () => {
  console.log(kleur.green().bold(`Server is running in ${process.env.PORT}!`));
});