// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const toDo = document.getElementById("todo-list");

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const userInput = () => {
  const userId = document.getElementById("userId").value;
  toDo.innerHTML = "";

  // const filtered =
  arrayOfTodos
    .filter((element) => {
      return +userId === element.userId;
    })

    .forEach(() => {
      const list = document.createElement("li");
      list.innerHTML = `
                <p>userId: ${el.userId}</p>
                <p>todo:${el.title}</p>
                <p>completed:${el.completed}</p>
            `;
      toDo.appendChild(list);
    });

  // arrayOfTodos.forEach((el)=>{
  //     if(+userId === el.userId){
  //         const list = document.createElement("li")
  //         list.innerHTML = `
  //             <p>userId: ${el.userId}</p>
  //             <p>todo:${el.title}</p>
  //             <p>completed:${el.completed}</p>
  //         `
  //         toDo.appendChild(list)
  //     }
  // })

  // const filtered = arrayOfTodos.filter((element)=>{
  //     return +userId === element.userId
  // })
  // console.log(filtered)

  // for (let index = 0; index <filtered.length; index++) {
  //     const element =filtered[index];
  //     console.log(userId, element.userId)
  //         console.log(element)

  //         const list = document.createElement("li")
  //         list.innerHTML = `
  //             <p>userId: ${element.userId}</p>
  //             <p>todo:${element.title}</p>
  //             <p>completed:${element.completed}</p>
  //         `
  //         toDo.appendChild(list)
  // }
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  toDo.innerHTML = "";
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const element = arrayOfTodos[index];
    const list = document.createElement("li");
    const title = document.createTextNode(element.title);

    list.appendChild(title);
    toDo.appendChild(list);
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ol.innerHTML = ""
});
