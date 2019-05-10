// JSON取数据
var person = {
  "current_page": 1,
  "data": {
    "fname": {
      "id": 3,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    },
    "0": {
      "id": 2,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    }
  },

  "id": "dfdf"
};
// console.log(person.data.fname.id);
// console.log(person.data['fname'].id);
// console.log(person.data['0'].id);
// console.log(person.data[0].id);
// 遍历json取数据
var person1 = {
  "current_page": 1,
  "data": {
    "0": {
      "id": 0,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    },
    "1": {
      "id": 1,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    },
    "2": {
      "id": 2,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    },
    "3": {
      "id": 3,
      "title": "2",
      "publishTime": "2019-04-10 09:24:52"
    }
  },

  "id": "dfdf"
};
// for (let i = 0; i < 4; i++) {
//   console.log(person1.data[i].id);
// }

let j = 0;
while (person1.data[j]) {
  console.log(person1.data[j].id);
  j++;
}



var person1 = {
    "code": 200,
    "data": [
  {
    "id": 11,
    "title": "2",
    "publishTime": "2019-04-10 09:24:52"
  },
  {
    "id": 22,
    "title": "2",
    "publishTime": "2019-04-10 09:24:52"
  },
  {
    "id": 33,
    "title": "2",
    "publishTime": "2019-04-10 09:24:52"
  }
    ]
  }

person1.data.forEach(element => {

  console.log(element.id);
});