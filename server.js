const mongoose = require("mongoose");

const app = require('./app');

const DB_HOST = "mongodb+srv://ivan:6bBfwK3bs6TL4*.@cluster0.0qmv3dz.mongodb.net/contacts_reader?retryWrites=true&w=majority";

// mongoose.connect('strictQuery', true);

mongoose.connect(DB_HOST).then(() => {
  app.listen(3000, () => {
  console.log("Database connection successful");
})
}).catch(error => {
  console.log(error.message);
  process.exit(1);
});



// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
