const app = new Vue ({
    el: '#root',
    data: {
        todoInput: '',
        todoList: 
        ['Fare cose',
        'Fare altre cose',
        'Fare altre cose ancora'],
    },
    methods: {
        addNewTodo: function() {
            if(this.todoInput !== ''){
                this.todoList.push(this.todoInput)
                this.todoInput= '';
            }
        },
    
        deleteTodo: function(i){
            this.todoList.splice(i,1);
        }
    },
})