<template>
    <nav class="navbar">
        <div class="nav-container">
            <a href="." class="brand">
                Vasileios<br> Konstantinou
            </a>
            <div class="nav-links" :class="{ 'show-menu': toggleMobileMenu}">
                <router-link to="/" class="nav-link" exact>Home</router-link>
                <router-link to="/about" class="nav-link">About</router-link>
                <router-link to="/projects" class="nav-link">Projects</router-link>
                <router-link to="/utils" class="nav-link">Utils</router-link>
            </div>
            <div class="burger" @click="toggleBurger">
                <div class="line line1" />
                <div class="line line2" />
                <div class="line line3" />
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar2",
        data() {
            return {
                toggleMobileMenu: false
            }
        },
        methods: {
            toggleBurger() {
                this.toggleMobileMenu = !this.toggleMobileMenu
            }
        }
    }
</script>

<style scoped>
.navbar {
    background-color: #403D39;
    color: #CCC5B9;
    height: 70px;
}

.nav-container {
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.brand {
    /* letter-spacing: 1px; */
    text-transform: uppercase;
    text-decoration: none;
    color: #CCC5B9;
    font-weight: bold;
}

.nav-links {
    width: 40%;
    display: flex;
    justify-content: space-around;
    list-style: none;
}

.nav-link,
.nav-link:visited {
    font-size: 1.1rem;
    color: #CCC5B9;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    font-weight: bold;
    transition: border-bottom 0.3s ease-in-out;
}

.nav-link:hover,
.router-link-active,
.router-link-exact-active {
    color: #CCC5B9;
    border-bottom: 2px solid #ee7545;
}

.burger {
  display: none;
  padding: 0.5rem;
  cursor: pointer;
}

.line {
  height: 2px;
  width: 35px;
  margin: 0.5rem 0;
  background: #ee7545;
  transition: transform 0.75s ease, opacity 0.75s ease;
}

@media screen and (max-width: 600px) {
    .brand {
        padding: 0 1rem;
    }
    .burger {
        display: block;
    }
    .nav-links {
        position: fixed;
        top: 70px;
        right: 0;
        height: calc(100vh - 140px);
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: #403D39;
        transform: translateX(100%);
        transition: transform 1s ease;
        box-shadow: 0px 1px 5px #252422;
    }
    .show-menu {
        transform: translateX(0%);
    }
}

</style>
