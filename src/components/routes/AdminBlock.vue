<template>
    <b-container style="text-align: left">
        <h1 style="text-align: center">Create new Article</h1>
        <b-row>
            <b-col md="3" sm="6">
                <label for="title-form">Title:</label>
            </b-col>
            <b-col md="9" sm="6">
                <b-form-input id="title-form" v-model="title" placeholder="Insert a title" />
            </b-col>
        </b-row>
        <b-row>
            <b-col md="3">
                <span>Small Description</span>
            </b-col>
            <b-col md="9">
                <input v-model="title" placeholder="Insert Descripion">
            </b-col>
        </b-row>
        <textarea :value="input" @input="update" />
        <div v-dompurify-html="compiledMarkdown" />
        <v-md-editor v-model="input" height="400px" />
        <div>{{input}}</div>
    </b-container>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'
    export default {
        name: "AdminBlock",
        components: {
        },
        data() {
            return {
                title: '',
                input: '',
                text: ''
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.input, {highlight: (markdown) => {return hljs.highlightAuto(markdown).value}})
            }
        },
        methods: {
            update(e) {
                clearInterval(this.interval)
                this.interval = setInterval(() => {
                    this.input = e.target.value
                }, 300)
            }
        }
    }
</script>

<style scoped>
@import "~highlight.js/styles/github.css";

.markdown-body > p > img {
    max-width: 90%;
    max-height: 600px;
    display: flex;
    margin: auto;
}
</style>
