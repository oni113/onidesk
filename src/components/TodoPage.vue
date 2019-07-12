<template lang="html">
    <div class="container">
        <h2>Todo List</h2>
        <div class="input-group" style="margin-bottom:10px;">
            <input type="text" class="form-control" name="" value="" placeholder="할일을 입력하세요." v-model="name" v-on:keyup.enter="createTodo(name)">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" name="button" @click="createTodo(name)">ADD</button>
            </span>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(todo, index) in todos">
                <a href="#" @click="editTodo(todo.id)">{{todo.name}}</a>
                <div class="btn-group pull-right" style="font-size:12px; line-height:1;">
                    <button class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" name="button">더보기<span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="deleteTodo(todo.id)">DEL</a></li>
                    </ul>
                </div>
            </li>
        </ul>

        <modal name="hello-world">
          hello, world!
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id : 0,
            name : null,
            todos : [],
            showTodo : false
        };
    },
    mounted() {
        this.getTodos();
        this.todos.forEach((todo, index) => {
            if (this.id < todo.id) {
                this.id = todo.id;
            }
        });
    },
    methods : {
        getTodos() {
            var vm = this;
            this.$http.get('/todos')
                .then((result) => {
                    console.log(result);
                    this.todos = result.data;
                });
        },
        deleteTodo(id) {
            console.log(id);
            // TODO : 서버 REST DEL 구현 (axios)
            if (id) {
                this.$http.delete('/todos/remove/' + id)
                    .then((result) => {
                        console.log(result);
                        this.getTodos();
                    });
            }
        },
        createTodo(name) {
            if (name != null) {
                var params = {
                    name : name
                };
                this.$http.post('/todos/add', params)
                    .then((result) => {
                        this.id = result.data.insertId;
                        var newTodo = {
                            id : this.id,
                            name : name
                        };
                        console.log(newTodo);
                        this.todos.push(newTodo);
                    });
            } else {
                this.name = null;
            }
        },
        editTodo (id) {
            // TODO : 팝업 오픈
            this.$modal.show('hello-world');
            /*
            this.showTodo = !this.showTodo;
            console.log(this.$modal);
            if (this.showTodo) {
                this.$modal.show('hello-world');
            } else {
                this.$modal.hide('hello-world');
            }
            console.log(this.showTodo);
            */
        }
    }
}
</script>

<style lang="css" scoped>

</style>
