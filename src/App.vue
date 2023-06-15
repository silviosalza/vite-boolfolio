<script>
import AppAbout from './components/AppAbout.vue';
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import ProjectsList from '../src/pages/ProjectsList.vue';


export default{
    components: { HomePage, AppAbout, ProjectsList, AppHeader }
}

</script>

<template>
  <AppHeader/>
  <!-- <HomePage/> -->
  <!-- <ProjectsList/> -->
  <router-view></router-view>


</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>
