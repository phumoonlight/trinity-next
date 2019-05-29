import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
import cors from 'cors';


const app = Express();

app.use(cors());

Mongoose.connect('mongodb://localhost/mydb');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const PersonModel = Mongoose.model('movies', {
  name: String,
  detail: String,
});

app.post('/movies', async (request, response) => {
  const result = await new PersonModel(request.body).save();
  response.send(result);
});

app.get('/movies', async (request, response) => {
  const result = await PersonModel.find().exec();
  response.send(result);
});

app.get('/movies/:id', async (request, response) => {
  const person = await PersonModel.findById(request.params.id).exec();
  response.send(person);
  console.log(person);
});

app.put('/movies/:id', async (request, response) => {
  const person = await PersonModel.findById(request.params.id).exec();
  person.set(request.body);
  const result = await person.save();
  response.send(result);
});

app.delete('/movies/:id', async (request, response) => {
  const result = await PersonModel.deleteOne({ firstname: request.params.id }).exec();
  response.send(result);
});

app.listen(8080, () => {
  console.log('Listening at :8080');
});
