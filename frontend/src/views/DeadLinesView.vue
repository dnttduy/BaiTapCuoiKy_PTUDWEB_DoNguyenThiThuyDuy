<template>
  <h1>DANH SÁCH DEADLINE</h1>
  <hr>
  <input type="date" v-model="state.newDeadLineDate">
  <span>{{state.newDeadLineDate}}</span>
  <button @click="newDeadLine()" class="btn btn-success">Tạo Deadline</button>
  <br><br>
  <hr>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
          <th style="width: 70%;">Ngày Đến Hạn</th>
          <th style="width: 30%;">Hành Động</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="deadline in state.deadlines" :key="deadline._id">
          <td>{{ deadline.deadlineDate }}</td>
          <td>
            <router-link
              :to="`/deadline/${deadline._id}`"
              class="btn btn-primary"
              >Xem Chi Tiết
            </router-link>
            <button
              @click.prevent="deleteDeadLine(deadline._id)"
              class="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import deadlinecrud from '../modules/deadlinecrud'
import { onMounted } from 'vue'

  export default {
    setup() {

      const { state, GetAllDeadLines, newDeadLine, deleteDeadLine, editDeadLine  } = deadlinecrud()

      onMounted(() => {
        GetAllDeadLines()
      })

      return { state, GetAllDeadLines, newDeadLine, deleteDeadLine, editDeadLine }
    },
   
    
  }
</script>
<style>
.btn-danger {
  margin: 5px;
}
.btn-success {
  margin: 5px;
}
</style>
