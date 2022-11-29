<template>
  <div>
    <h1>CHI TIẾT DEADLINE</h1>
    <h4>
      Ngày Deadline : {{state.currentDeadLine.deadlineDate}}
    </h4>
    <input type="date" v-model="state.newDeadLineDate">
    <button @click="editDeadline()"  class="btn btn-primary"> Chỉnh sửa ngày deadline </button>
    <br><br>
    <input type="text" placeholder="Nhập người thực hiện công việc" class="form-control" v-model="stateToDo.newAuthor">
    <input type="text" placeholder="Nhập nội dung công việc cần thực hiện" class="form-control" v-model="stateToDo.newTodoItem">
    <button @click="newTodo(deadlineId)" class="btn btn-success">Tạo Todo</button>
    <br><br>
    <h4 class="panel-title">DANH SÁCH TODO</h4>
    <hr>
    <table class="table" >
      <thead class="thead-dark">
        <tr>
          <th style="width: 30%;">Người Thực Hiện</th>
          <th style="width: 50%;">Nội Dung</th>
          <th style="width: 20%;">Hành Động</th>
        </tr>
      </thead>
      <tbody v-for="todo in stateToDo.currentTodos" :key="todo._id">
        <tr>
          <td>{{todo.author}}</td>
          <td>{{todo.todo}}</td>
          <td>
            <router-link :to="`/todo/${todo._id}`" class="btn btn-primary">
              Chỉnh sửa
            </router-link>
            <button 
                @click.prevent="deleteTodo(todo._id)"
                type="button"
                class="btn btn-danger"
              >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import deadlinecrud from '../modules/deadlinecrud'
import todocrud from '../modules/todocrud'
  export default {
    setup() {

      const { state, deadlineId, getDeadLine, editDeadline } = deadlinecrud()
      const { stateToDo, todoId, newTodo, deleteTodo, getTodosFromDeadlineId } = todocrud()
      getDeadLine()
      getTodosFromDeadlineId(deadlineId.value)
      return { state, stateToDo, deadlineId, todoId, getDeadLine, editDeadline, newTodo, deleteTodo, getTodosFromDeadlineId }
    }
  }
</script>

<style lang="scss" scoped>
.btn-success, .btn-primary {
  margin: 5px;
}
.form-control {
      width:500px;
    }
</style>