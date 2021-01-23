<template>
    <div id="app">
        <encrypt />
    </div>
</template>

<script>
    import Encrypt from './components/Encrypt.vue'

    export default {
        name: 'App',
        components: {
            Encrypt
        }
    }
</script>

<style>
* {
    background-color: #f1f1f1;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

}
</style>
