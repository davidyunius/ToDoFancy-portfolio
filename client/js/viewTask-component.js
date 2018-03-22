Vue.component('viewtask', {
    template: `
    <div>
        <h5 style="color:#999999;">Your unfinished task</h5>
        <table border="0">
            <thead>
                <th>No.</th>
                <th>Date created</th>
                <th>Thing's to do</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="el in task">
                    <td>{{ task.indexOf(el) + 1}} </td>
                    <td>{{ el.status }}</td>
                    <td>{{ el.description }}</td>
                    <a class="btn">
                        <i class="fa fa-times" style="color:red;"></i>
                    </a>
                </tr>
            </tbody>
        </table>
    </div>`,
    data () {
        return {
            task: []
        }
    },
    methods: {
        viewTask: function () {
        let self = this;
        axios.get('http://localhost:3000/task/list')
            .then(data => {
                let taskData = data.data.taskData
                console.log(taskData);
                self.task = taskData
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created () {
        this.viewTask()
    }
})
