<template>
    <div class="container">
        <div class="input-group col-md-3">
            <span class="input-group-addon">
                PW
            </span>
            <input type="text" v-model="todo" class="form-control col-md-2">
        </div>
        <div class="row col-md-6">
            <input class="btn btn-default col-md-3" @click="update" type="button" value="삭제">
            <input class="btn btn-default col-md-3" @click="$emit('close')" type="button" value="취소">
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
        'hot_table',
    ],
    methods : {
        update() {
            console.log('TODO : save data');
            this.$emit('close')
        }
    }
}
</script>
