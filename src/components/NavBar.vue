<template>
    <b-navbar toggleable="lg" type="dark" style="background-color: #f68d28; font-weight: bold;">
        <b-navbar-brand href="#">Vasileios Konstantinou</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">
                    About
                </b-nav-item>
                <b-nav-item href="#">Projects</b-nav-item>
                <b-nav-item-dropdown text="Utils">
                    <b-dropdown-item href="/utils/encrypt">Encrypt/Decrypt</b-dropdown-item>
                    <b-dropdown-item href="/utils/jwt">JWT utils</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Blog</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>
