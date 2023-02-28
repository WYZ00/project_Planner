<template>
  <div class="project" :class="{complete:project.complete}">
    <div class="flexing">
        <h3 @click="showDetail=!showDetail">{{project.title}}</h3>
        <div>
            <span class="material-symbols-outlined" @click="deleteProject">
            delete
            </span>
            <router-link :to="{name:'EditProject',params:{id:project.id}}">
                <span class="material-symbols-outlined">
                edit
                </span>
            </router-link>
            
            <span class="material-symbols-outlined" @click="completeProject">
            done
            </span>
        </div>
    </div>
    <p v-if="showDetail">{{project.detail}}</p>
    
  </div>
</template>

<script>
export default {
    props:['project'],
    data(){
        return{
            showDetail:false,
            api:"http://localhost:3000/projects/"
        }
    },
    methods:{
        deleteProject(){
            let deleteRoute = this.api+this.project.id;
            fetch(deleteRoute,{method:"DELETE"})
            .then(()=>{
                this.$emit(`delete`,this.project.id);
            })
            .catch((err)=>{
                console.log(err);
            })
        //     console.log(deleteRoute);
        },
        completeProject(){
            let updateCompleteRoute = this.api+this.project.id;
            fetch(updateCompleteRoute,{
                method:"PATCH",
                headers:{
                    "Content-type":"application/json"
                   },
                body:JSON.stringify(
                    {
                        complete:!this.project.complete
                    }
                )
                })
            .then(()=>{
                this.$emit('complete',this.project.id);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
    }
}
</script>

<style>
    .project{
        padding: 20px;
        background-color:#f2f2f2 ;
        
        border-radius: 8px;
        border-left: 6px solid crimson;
        margin: 10px;
    }

    h3{
        cursor: pointer;
        color: indigo;
    }

    .flexing{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span{
        margin-left: 6px;
    }

    span:hover{
        cursor: pointer;
        color: #c21515;
    }

    .complete{
        border-left-color: green;
    }

</style>