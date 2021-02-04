<template>
    <b-card title="Development">
        <span style="font-size: larger">Languages</span>
        <b-list-group style="text-align: left">
            <b-list-group-item>
                <img src="@/assets/java.png" alt="java image">
                <strong> {{ technologies[0].title }}</strong>
                {{ technologies[0].description }}
            </b-list-group-item>
            <b-list-group-item>
                <img src="@/assets/javascript.png" alt="javascript image">
                <strong> Javascript</strong>
                6 Months of professional experience
            </b-list-group-item>
            <b-list-group-item>
                <img src="@/assets/python.png" alt="python image">
                <strong> Python</strong>
                Go to language for scripts, data science, machine learning
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
    export default {
        name: "Technologies",
        props: {
            technologies: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        created() {
            console.log(this.technologies)
        }
    }
</script>

<style scoped>

</style>
