<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

</head>
<body>
<div id="root">
Completed Tasks:
<ul>
    <button v-for="(task,index) in tasks" v-if="task.completed" :id="index" v-text="task.description" v-on:click="markCompleted(task)"></button>
</ul>
Uncompleted Tasks:
<ul>
    <button v-if="tasks.length" v-for="task in uncompleted" v-text="task.description" v-if="" @click="task.completed = true"></button>
</ul>
</div>


<a href="index2.php"> Page2 </a>
<script>

var app = new Vue({
    el: '#root',
    data: {
        tasks:[],
    },
    mounted(){
    var self = this;
    setInterval(function(){
        self.getTasks();
    },400)
        
    },
    methods:{
        getTasks(){
            axios.get('tasks.json')
                .then((response => {
                this.tasks = response.data;
                this.tasks[0].description = new Date().getSeconds();
            }))
        },
        markCompleted(e){
        // get the index of the task and change it to completed
            console.log(e.completed);
            e.completed= false; 
            console.log(e.completed);
        },
    },
    computed: {
        reversedMessage(){
            return this.message0.split('').reverse().join('');
        },
        uncompleted(){
        return this.tasks.filter(
            function(task){ return !task.completed;}
        );
                return this.tasks.filter(task => ! task.completed);
            },
    }

})

</script>
    
</body>
</html>
