<template>
    <div id="app">
        <nav-bar />
        <router-view />
        <footer-bar />
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html, body {
    font-family: 'Roboto', sans-serif;
}

#app {
    font-family: 'Roboto', sans-serif;
}

</style>
