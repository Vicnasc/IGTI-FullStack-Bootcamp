import mongoose from 'mongoose';

//Conectar ao MongoDB pelo Mongoose
async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://igtiuser:resuitgi@bootcamp-smurc.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
};

//criacao do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

//definindo o modelo da colecao
mongoose.model('student', studentSchema, 'student');

//criacao de um objeto
const student = mongoose.model('student');

new student({
  name: 'Paulo Assis',
  subject: 'Matematica',
  type: 'Trabalho Pratico',
  value: 22,
})
  .save()
  .then(() => console.log('Documento inserido'))
  .catch((err) => console.log('Falha ao inserir o documento', err));

mongoose.close();
