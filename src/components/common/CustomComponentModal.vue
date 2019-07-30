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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">저장</button>
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
        'editTodo',
    ],
    methods : {
        update() {
            console.log('TODO : save data');
            this.$emit('close')
        }
    }
}
</script>
