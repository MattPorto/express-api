// server starter

const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});