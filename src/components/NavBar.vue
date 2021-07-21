<template>
    <nav class="navbar">
        <div class="nav-container">
            <a href="." class="brand">
                Vasileios
                <br>
                <span>
                    Konstantinou
                </span>
            </a>
            <div class="nav-links" :class="{ 'show-menu': isMenuOpen}">
                <router-link to="/" class="nav-link" exact>Home</router-link>
                <router-link to="/about" class="nav-link">About</router-link>
                <router-link to="/projects" class="nav-link">Projects</router-link>
                <router-link to="/utils" class="nav-link">Utils</router-link>
            </div>
            <div class="burger" @click="toggleBurger">
                <burger :is-open="isMenuOpen" />
            </div>
        </div>
    </nav>
</template>

<script>
    import Burger from '@/components/Burger'
    export default {
        name: "NavBar2",
        components: {Burger},
        data() {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            toggleBurger() {
                this.isMenuOpen = !this.isMenuOpen
            }
        }
    }
</script>

<style scoped>
.navbar {
    background-color: var(--secondary-clr);
    color: var(--main-clr);
    height: 80px;
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
    padding: 0 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--main-clr);
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
}
.brand span {
    background: var(--main-clr);
    color: var(--secondary-clr);
    padding: 0 1rem;
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
    color: var(--main-clr);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    font-weight: bold;
    transition: border-bottom 0.3s ease-in-out;
}

.nav-link:hover,
.router-link-active,
.router-link-exact-active {
    color: var(--main-clr);
    border-bottom: 2px solid var(--highlight-clr);
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
  background: var(--highlight-clr);
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
        top: 80px;
        right: 0;
        height: calc(100vh - 160px);
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: var(--secondary-clr);
        transform: translateX(100%);
        transition: transform 1s ease;
    }
    .show-menu {
        transform: translateX(0%);
    }
}

</style>
