<template>
  <div>
    <h1>Chỉnh Sửa Todo</h1>
    <h5> Người Thực Hiện: {{todo.author}}</h5>
    <h5> Nội Dung Công Việc: {{todo.todo}}</h5>

    <hr>

    <input type="text" placeholder="Nhập người thực hiện công việc" class="form-control" v-model="stateToDo.newAuthor">
    <br>
    <input type="text" placeholder="Nhập nội dung công việc cần thực hiện" class="form-control" v-model="stateToDo.newTodoItem">
    <br>
    <button @click="editTodo(todo.deadlineId)" class="btn btn-primary">Cập Nhật</button>

    <hr>
  </div>
</template>

<script>
import todocrud from '../modules/todocrud'
  export default {
    setup() {

      const { stateToDo, todo,  todoId, getTodo, editTodo } = todocrud()
      getTodo()
      return {
        stateToDo,
        todo,
        todoId,
        editTodo,
        getTodo
      }
    }
  }
</script>

<style lang="scss" scoped>
.form-control {
      width:500px;
    }
</style>