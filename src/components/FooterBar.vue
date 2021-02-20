<template class="footer-bar">
    <b-container fluid="lg">
        <b-row>
            <b-col>
                <h3>Contact Info</h3>
                <ul>
                    <li class="ml-n4">Vasileios Konstantinou</li>
                    <li class="ml-n5">Email:
                        <span v-if="displayAddress" class="mx-3">{{ webAddress }} </span>
                        <b-icon-eye-fill v-if="!displayAddress" variant="success" @click="addToClipBoard()" />
                    </li>
                </ul>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col class="mb-3">
                <a href="https://github.com/billk97">
                    <img src="@/assets/github.png" alt="github" class="mr-3">
                </a>
                <a href="https://www.linkedin.com/in/vasilis-konstantinou-a77a281aa/">
                    <img src="@/assets/linkedin.png" alt="linkIN" class="mr-3">
                </a>
                <a href="https://twitter.com/VKonstantiou">
                    <img src="@/assets/twitter.png" alt="twitter" class="mr-3">
                </a>
                <a href="https://stackoverflow.com/users/7994351/vasilis-konstantinou?tab=profile">
                    <img src="@/assets/stack.png" alt="stackOverflow" class="mr-3">
                </a>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { BIconEyeFill } from 'bootstrap-vue'
    export default {
        name: "FooterBar",
        components: {
            BIconEyeFill
        },
        data() {
            return {
                webAddress : 'dmFzaWxlaW9zQGtvbnN0YW50aW5vdS5kZXY=',
                displayAddress: false
            }
        },
        methods: {
            addToClipBoard() {
                this.displayAddress = true
                this.webAddress = atob(this.webAddress)
                setTimeout(() => {
                    this.displayAddress = false
                }, 10000)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
</style>
