const express = require('express');
const mongoose = require('mongoose');
const CategoryRoutes = require('./routes/category');
const ProductRoutes = require('./routes/product');

const app = express();
app.use(express.json());

app.use('/api/Category', CategoryRoutes);
app.use('/api/prodcut',ProductRoutes);

const PORT=process.env.PORT || 5000;
const urlmongo=process.env.Mongourl || 'mongodb+srv://nhandycu:Nhan09575789@cluster0.5xtnr.mongodb.net/data?retryWrites=true&w=majority'
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

