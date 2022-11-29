import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const getDeadLines = () => {
  const state = ref({
    newDeadLineDate: '',
    currentDeadLine: {},
    deadlines: {}
  })
  const route = useRoute();
  const deadlineId = computed(() => route.params.id)

  const GetAllDeadLines = async () => {
    try {
       await fetch("http://localhost:3000/deadlines")
      .then(res => res.json())
      .then(data => {
        state.value.deadlines = data
      })
    }
    catch(error) {
      console.log(error)
    }
  }
  
  const newDeadLine = () => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        deadlineDate: state.value.newDeadLineDate
      }) 
    }
      fetch("http://localhost:3000/deadlines/new", 
      requestOptions
    ).then(GetAllDeadLines())
  }

  const getDeadLine = async () => {
    try {
      await fetch("http://localhost:3000/deadlines/get/"+ deadlineId.value,{method: "GET"})
     .then(res => res.json())
     .then(data => {
       state.value.currentDeadLine = data
       console.log(data)
     })
   }
   catch(error) {
     console.log(error)
   }
  }

  const getDeadLineFromId =  async (id) => {
    try {
      await fetch("http://localhost:3000/deadlines/get/"+ id,{method: "GET"})
     .then(res => res.json())
     .then(data => {
       state.value.currentDeadLine = data
       console.log(data)
     })
   }
   catch(error) {
     console.log(error)
   }
  }

  const editDeadline = () => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        deadlineDate: state.value.newDeadLineDate,
      }) 
    }
    fetch("http://localhost:3000/deadlines/update/" + deadlineId.value, 
      requestOptions)
    .then(GetAllDeadLines())
  }
  

  const deleteDeadLine = (_id) => {
    fetch("http://localhost:3000/deadlines/delete/" + _id, { method: "DELETE"})
      .then(GetAllDeadLines())
  }



  return {
    state,
    deadlineId,
    GetAllDeadLines, 
    newDeadLine,
    getDeadLine,
    getDeadLineFromId,
    editDeadline,
    deleteDeadLine,
  }
}

export default getDeadLines