Vue.component('addtask', {
  template: `
    <div>
      <input v-model="task" class="form-control" type="text" placeholder="new to-do...">
      <a @click="addTask" class="btn btn-primary btn-sm add" href="">Add</a>
    </div>
    `,
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTask: function () {
      axios.post('http://localhost:3000/task/add', {
        description: this.task,
      })
        .then(data => {
        console.log(data);
        }).catch(err => {
        console.log(err);
      })
    }
  }
})