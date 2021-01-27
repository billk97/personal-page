<template>
    <div id="app">
        <nav-bar />
        <about />
        <encrypt v-if="false" />
    </div>
</template>

<script>
    import Encrypt from './components/Encrypt.vue'
    import NavBar from '@/components/NavBar'
    import About from '@/components/About'

    export default {
        name: 'App',
        components: {
            NavBar,
            Encrypt,
            About
        }
    }
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f1f1f1;
    height: 100vh;
}
</style>
