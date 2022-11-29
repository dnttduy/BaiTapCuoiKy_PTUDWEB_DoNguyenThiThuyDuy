<template>
  <div>
    <h1>DANH SÁCH TODO</h1>
    <hr>
    <table class="table" >
      <thead class="thead-dark">
        <tr>
          <th style="width: 20%;">Người Thực Hiện</th>
          <th style="width: 40%;">Nội Dung</th>
          <th style="width: 20%;">Ngày Đến Hạn</th>
          <th style="width: 20%;">Hành Động</th>
        </tr>
      </thead>
      <tbody v-for="todo in stateToDo.todos" :key="todo._id">
        <tr v-for="deadline in state.deadlines" :key="deadline._id">
          <td v-if="todo.deadlineId == deadline._id">{{todo.author}}</td>
          <td v-if="todo.deadlineId == deadline._id">{{todo.todo}}</td>
          <td v-if="todo.deadlineId == deadline._id">{{deadline.deadlineDate}}</td>
          <td v-if="todo.deadlineId == deadline._id">
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
import todocrud from '../modules/todocrud'
import deadlinecrud from '../modules/deadlinecrud'
import { onMounted } from 'vue'

  export default {
    setup() {
      const { state, GetAllDeadLines } = deadlinecrud()
      const { stateToDo, GetAllTodos, deleteTodo} = todocrud()

      onMounted(() => {
        GetAllTodos()
        GetAllDeadLines()
      })

      return { stateToDo, GetAllTodos, deleteTodo, state, GetAllDeadLines}
    },
   
    
  }
</script>

<style lang="scss" scoped>

</style>