import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image':'https://placeimg.com/64/64/any',
  'name': '나일번',
  'birthday': '19840316',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/any',
  'name': '나이번',
  'birthday': '19830316',
  'gender': '여자',
  'job': '직딩'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/any',
  'name': '나삼번',
  'birthday': '19820316',
  'gender': '남자',
  'job': '고시생'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
               key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
            
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
