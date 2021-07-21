<template>
    <div class="route">
        <div class="title">Utils</div>
        <div class="content">
            <encrypt />
            <div class="divider" />
            <jwt />
            <div class="divider" />
            <hash />
        </div>
    </div>
</template>

<script>
    import Encrypt from '@/components/routes/EncryptRoute'
    import Jwt from '@/components/routes/JwtRoute'
    import Hash from '@/components/routes/HashRoute'
    export default {
        components: { Encrypt, Jwt, Hash}
    }
</script>

<style scoped>
.route {
    background: var(--main-clr);
    margin-top: 80px;
}
.content {
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem 2rem 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--secondary-clr);
}
.title {
    position: relative;
    color: var(--secondary-clr);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding-top: 1rem;
}
.divider {
    border-bottom: 1px solid var(--secondary-clr);
    margin: 2rem 0;
}
@media screen and (min-width: 1600px) {
    .title {
        position: absolute;
        left: 0;
        top: 80px;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        font-size: 12rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        user-select: none;
    }
}

</style>