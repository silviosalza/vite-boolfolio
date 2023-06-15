<script>
import AppAbout from './components/AppAbout.vue';
import HomePage from './pages/HomePage.vue';
import ProjectsList from '../src/pages/ProjectsList.vue';


export default{
    components: { HomePage, AppAbout, ProjectsList }
}

</script>

<template>
  <!-- <HomePage/> -->
  <!-- <ProjectsList/> -->
  <router-view></router-view>

  <AppAbout/>


</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>
