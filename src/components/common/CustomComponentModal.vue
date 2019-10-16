<template>
    <div class="" id="myLargeModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">{{editTodo.name}}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" v-model="editTodo.name" style="width:100%"/>
                    <input type="hidden" v-model="editTodo.id"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click="saveTodo">저장</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data : function() {
        return {
            todo : '',
        }
    },
    props : [
        'editTodo'
        , 'todos'
    ],
    methods : {
        saveTodo() {
            var params = {
                name : this.editTodo.name
            };
            this.$http.put('/todos/todo/' + this.editTodo.id, params)
                .then((result) => {
                    console.log(result.data);
                    this.editTodo.name = result.data.name;
                    /*
                    for (var index in this.todos) {
                        console.log(this.todos[index]);
                        if (this.todos[index].id == this.editTodo.id) {
                            this.todos[index].name = this.editTodo.name;
                        }
                    }
                    */
                });
            this.$emit('close');
            // this.$router.replace('login');
        }
    }
}
</script>
