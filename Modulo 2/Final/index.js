const express = require('express');
const fs = require('fs');
const app = express();

// Usei express para ler a requisição em JSON
app.use(express.json());

app.post('/grades', (req, res) => {
  let params = req.body;

  fs.readFile('grades.json', 'utf8', (err, data) => {
    if (!err) {
      try {
        let json = JSON.parse(data);
        grade = {
          id: json.nextId,
          ...grade,
        };
        json.grades.push(grade);

        res.send('Post account');
      } catch (err) {
        res.send('Erro');
      }
    } else {
      console.log('erro na leitura');
      res.send('erro na leitura');
    }
  });

  fs.appendFile('grades.json', JSON.stringify(params), (err) => {
    console.log(err);
  });
});

app.listen(3000, () => {
  try {
    fs.readFile('grades.json', 'utf8', (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 0,
          student: '',
          subject: '',
          type: '',
          value: 0,
        };
        fs.writeFile('grades.json', JSON.stringify(initialJson), (err) => {
          console.log(err);
        });
      } else {
      }
    });
  } catch (err) {
    console.log(err);
  }

  console.log('API Started!');
});
