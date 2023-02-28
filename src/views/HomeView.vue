<template>
  <div class="home">
    <h1>Home</h1>
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>      
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    SingleProject,
    
  },
  data(){
    return {
      projects:[],
    }
  },
  methods:{
    deleteProject(id){
      this.projects=this.projects.filter(project=>{
        return project.id!=id;
      });
    },
    completeProject(id){
      let findProject=this.projects.find(project=>{
        return project.id===id;
      });
      findProject.complete = !findProject.complete;
    },
  },
  mounted(){
    fetch("http://localhost:3000/projects")
    .then((response)=>{
      if(response.status===404){
        throw new Error(`Not Found`)
      }
      return response.json();
    })
    .then((data)=>{
      this.projects =data;
    })
    .catch((err)=>{
      console.log(err.message);
    })

  }
}
</script>
