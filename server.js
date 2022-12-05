const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Routes = require('./routes/index')

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/Category', Routes.CategoryRoutes);
app.use('/api/prodcut', Routes.ProductRoutes);
app.use('/api/User', Routes.UserRoutes);
app.use('/api/ListUser', Routes.UseCookierRoutes);

const PORT = process.env.PORT || 5000;
const urlmongo = process.env.DB_connet

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
  app.listen(PORT || 5000, () => {
    console.log(`API running at:${PORT}`);
  });
}).catch((err) => {
  console.log(err);
});

