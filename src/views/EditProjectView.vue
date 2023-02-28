<template>
  <h1>Edit Project</h1>
   <form action="" @submit.prevent="addProject">
        <label for="">Project Title</label>
        <input type="text" v-model="title">

        <label for="">Project Detail</label>
        <input type="text" v-model="detail">

        <button>update Project</button>
    </form>
  
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:"",
            detail:""
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects/'+this.id)
        .then((response)=>{
            return response.json();
        })
        .then((datas)=>{
            this.title=datas.title
            this.detail=datas.detail
        })
        .catch((err)=>{
            console.log(err);
        })
    }

}
</script>

<style>

</style>