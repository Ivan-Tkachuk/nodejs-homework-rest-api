const mongoose = require("mongoose");

const app = require('./app');

const {DB_HOST} = process.env;
// mongoose.connect('strictQuery', true);

mongoose.connect(DB_HOST, PORT = 3000).then(() => {
  app.listen(PORT, () => {
  console.log("Database connection successful");
})
}).catch(error => {
  console.log(error.message);
  process.exit(1);
});



// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
