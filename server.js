const app = require("./app");

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Oleg:XUgBEDRL0wPzbKGc@cluster0.b4ujsdr.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// XUgBEDRL0wPzbKGc
