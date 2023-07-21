const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/youtubeRegistration", {
    //useNewUrl: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log(
      `connection successful hai beta ji mongodb se || dhyan se erroors ko analyze karo be`
    );
  })
  .catch((e, data) => {
    console.log(e);
  });
