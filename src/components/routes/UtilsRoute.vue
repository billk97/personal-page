<template>
    <div class="route">
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
.divider {
    border-bottom: 1px solid var(--secondary-clr);
    margin: 2rem 0;
}
</style>