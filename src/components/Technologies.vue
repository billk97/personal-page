<template>
    <b-card :title="technologies.title" class="mx-1">
        <b-list-group style="text-align: left">
            <b-list-group-item v-for="tech in technologies.boxes" :key="tech.title">
                <img :src="require(`@/assets/${tech.imagePath}`)" :alt="`${tech.title} image`">
                <strong> {{ tech.title }}</strong>
                {{ tech.description }}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
    export default {
        name: "Technologies",
        props: {
            technologies: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>
