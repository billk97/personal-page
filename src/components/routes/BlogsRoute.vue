<template>
    <div>
        <H1>Blogs</H1>
        <div v-for="article in articles" :key="article.id" class="article-preview">
            <article-preview :article="article" />
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import ArticlePreview from '@/components/ArticlePreview'
    export default {
        name: "BlogsRoute",
        components: { ArticlePreview },
        data() {
            return {
                articles: []
            }
        },
        created() {
            api.fetchArticles().then(resp => {
                this.articles = resp
            })

        }
    }
</script>

<style scoped>

.article-preview {
    width: 50%;
    margin: auto;
}

</style>
