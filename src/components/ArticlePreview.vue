<template>
    <b-card
        :header="`${article.title}`"
        border-variant="secondary"
        style="margin-bottom: 10px;"
    >
        <b-badge v-for="lable in article.lables" :key="lable" style="background-color: green; margin-left: 5px">{{ lable }}</b-badge>
        <b-card-text>
            {{ article.description }}
        </b-card-text>
        <div style="display: flex; justify-content: space-between">
            <span> Read time: {{ article.minutesToRead }}m</span>
            <span> {{ new Date(article.createdDate).toLocaleDateString() }}</span>
        </div>
    </b-card>
</template>

<script>
    export default {
        name: "ArticlePreview",
        props: {
            article: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style scoped>

</style>
