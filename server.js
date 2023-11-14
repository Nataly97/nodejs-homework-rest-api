const app = require('./app')
const connect = require('./connect');

app.listen(3100, () => {
  connect.connect();
  console.log("Server running. Use our API on port: http://localhost:3100/api/contacts")
})
