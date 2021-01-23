
window.addEventListener('submit', e =>{
  let formObj = {
    name: document.forms[0].name.value,
    email: document.forms[0].email.value,
    message: document.forms[0].message.value,
  }
  e.preventDefault();
  //вместо body сделать hidden c загрузкой!
        document.body.style.background = '#00f';

//let request = "https://jsonplaceholder.typicode.com/posts";
let request = 'send.php'
//Создаем объект запроса
let xhr = new XMLHttpRequest();
//Вызываем его метод open, где указываем метод запроса(POST, так как мы будем отправлять данные. Хотя эксперты могут поправить меня) и url сервера, куда будем отправлять
xhr.open('POST', request);
//Регистрируем обработчик события, который будет вызван при окончании ( и не только ) получения данных обратно от сервера
xhr.addEventListener('readystatechange', function() {
  //Проверим состояние запроса, нас интересует случай когда он завершен ( DONE )
  if (xhr.readyState === 4 /*&& xhr.status === 200*/) {

    //Дальше проверим какой код ответа нам выдал сервер
      //Если попали сюда, значит можно выполнить функцию, которую вам нужно
     // callback();
      clearForm();
  }
}, false);
//Установим заголовок запроса, где явно укажем тип данных, который будем передавать. В нашем случае это будет объект в формате JSON
//xhr.setRequestHeaders('Content-Type', 'application/json');
//Отправим запрос, передав в тело запроса наш сериализованый в формат JSON наш объект
      function clearForm() {
        document.forms[0].name.value="";
        document.forms[0].email.value="";
        document.forms[0].message.value="";
        document.body.style.background = '#fff';
      }

xhr.send(JSON.stringify(formObj));
})


/*fetch(request, {
    method: 'POST',
    body: JSON.stringify(formObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
})*/