<template>
    <div id="app">
        <nav-bar />
        <router-view class="router" style="padding-bottom: 3rem;" />
        <hr>
        <footer-bar class="footer" />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import FooterBar from '@/components/FooterBar'
    export default {
        name: 'App',
        components: {
            NavBar,
            FooterBar
        }
    }
</script>

<style>
html, body{
    height: 100%;
    padding: 0;
    background-color: #f1f1f1 !important;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f1f1f1;
    background-size: cover;
    position: relative;
    min-height: 100vh;
}

</style>
