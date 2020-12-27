const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id': 1,
            'image':'https://placeimg.com/64/64/1',
            'name': '나일번',
            'birthday': '19840316',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image':'https://placeimg.com/64/64/2',
            'name': '나이번',
            'birthday': '19830316',
            'gender': '여자',
            'job': '직딩'
          },
          {
            'id': 3,
            'image':'https://placeimg.com/64/64/3',
            'name': '나삼번',
            'birthday': '19820316',
            'gender': '남자',
            'job': '고시생'
          }
    ]);
});


app.listen( port, () => console.log('listening on port ${port}' ));