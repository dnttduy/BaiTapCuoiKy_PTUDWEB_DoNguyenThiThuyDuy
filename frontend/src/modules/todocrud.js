import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const getTodos = () => {

  const route = useRoute();

  const todoId = computed(() => route.params.id)
  const todo = ref({})

  const stateToDo = ref({
    newAuthor: '',
    newTodoItem: '',
    newDeadlineId: '',
    currentTodos: [],
    todos: {}
  })


  const GetAllTodos = async () => {
    try {
       await fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        stateToDo.value.todos = data
      })
    }
    catch(error) {
      console.log(error)
    }
  }
  
  const newTodo = (deadlineId) => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        author: stateToDo.value.newAuthor,
        todo: stateToDo.value.newTodoItem,
        deadlineId: deadlineId
      }) 
    }
      fetch("http://localhost:3000/todos/new", 
      requestOptions
    ).then(GetAllTodos())
  }

  const getTodosFromDeadlineId = async (deadlineId) => {
    try {
      await fetch("http://localhost:3000/todos/get-todos/"+deadlineId)
     .then(res => res.json())
     .then(data => {
       stateToDo.value.currentTodos = data
     })
   }
   catch(error) {
     console.log(error)
   }
  }

  const getTodo = async () => {
    try {
      await fetch("http://localhost:3000/todos/get/"+ todoId.value,{method: "GET"})
     .then(res => res.json())
     .then(data => {
      todo.value = data
      console.log(data.todo)
     })
   }
   catch(error) {
     console.log(error)
   }
  }
  

  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE"})
      .then(GetAllTodos())
  }



  
  const editTodo = (deadlineId) => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        author: stateToDo.value.newAuthor,
        todo: stateToDo.value.newTodoItem,
        deadlineId: deadlineId
      }) 
    }
    fetch("http://localhost:3000/todos/update/" + todoId.value, 
      requestOptions)
    .then(GetAllTodos())
  }



  return {
    todo,
    todoId,
    stateToDo,
    GetAllTodos, 
    newTodo,
    getTodo,
    deleteTodo,
    editTodo,
    getTodosFromDeadlineId
  }
}

export default getTodos