const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());

app.use('/api/tasks', tasksRoutes);

// UPDATE YOUR CONNECTION LINK WITH THE ONE FROM MONGODB
mongoose.connect(
 'mongodb+srv://nhandycu:Nhan09575789@cluster0.5xtnr.mongodb.net/data?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
).then(() => {
  app.listen(5000, () => { console.log('API running at: http://localhost:5000');});
}).catch((err) => {
  console.log(err);
});

