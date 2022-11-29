    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
        
    }
    
    const logTodos = () => {
        // console.log(arrayOfTodos[0].title)
        // const toDo = document.getElementById('todo-list')
        // const list = document.createElement("li")
        // const node = document.createTextNode(arrayOfTodos[0].title)
        // list.appendChild(node)
        // toDo.appendChild(list)


    }
    
    const populateTodos = () => {
        console.log(arrayOfTodos[0].title)
        const toDo = document.getElementById('todo-list')
        const list = document.createElement("li")
        const title = document.createTextNode(arrayOfTodos[0].title)
        list.appendChild(title)
        toDo.appendChild(list)
    }

  