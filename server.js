const express = require('express');
const mongoose = require('mongoose');
const CategoryRoutes = require('./routes/category');

const app = express();
app.use(express.json());

app.use('/api/Category', CategoryRoutes);

const PORT=process.env.PORT;
const urlmongo=process.env.Mongourl
// UPDATE YOUR CONNECTION LINK WITH THE ONE FROM MONGODB
mongoose.connect(
  urlmongo,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
).then(() => {
  app.listen(PORT  ||5000 , () => { 
    console.log(`API running at:${PORT}`);});
}).catch((err) => {
  console.log(err);
});

