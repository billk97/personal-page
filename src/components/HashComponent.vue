<template>
    <b-row class="mt-3 w-100 cypher-text" :class="{hide: hash.value}">
        <b-col style="text-align: left" cm="12" md="2">
            <b-icon-clipboard @click="copyToClipBoard()" />
            <span style="font-weight: bold;"> {{ hash.func }} </span>
        </b-col>
        <b-col class="text-center" cm="12" md="10">
            {{ hash.value }}
        </b-col>
    </b-row>
</template>

<script>
    import {BIconClipboard} from 'bootstrap-vue'
    export default {
        name: "HashComponent",
        components: {
            BIconClipboard
        },
        props: {
            hash: {
                type: Object,
                default() {
                    return {func: "non", value: ""}
                }
            }
        },
        methods: {
            copyToClipBoard() {
                const text = this.hash.value
                navigator.clipboard.writeText(text).then(() => {})
            }
        }
    }
</script>

<style scoped>
.cypher-text {
    border-radius: 10px;
    word-break: break-all;
    background-color: #d4ecda;
}
.hide {
    border-radius: 10px;
}

</style>
