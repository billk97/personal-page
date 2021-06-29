<template>
    <div class="footer">
        <div class="content">
            <div class="social-container">
                <a href="https://github.com/billk97" class="social-icon" target="_blank">
                    <img src="@/assets/github.png" alt="github">
                </a>
                <a href="https://www.linkedin.com/in/vasilis-konstantinou-a77a281aa/" class="social-icon" target="_blank">
                    <img src="@/assets/linkedin.png" alt="linkIN">
                </a>
                <a href="https://twitter.com/VKonstantiou" class="social-icon" target="_blank">
                    <img src="@/assets/twitter.png" alt="twitter">
                </a>
                <a href="https://stackoverflow.com/users/7994351/vasilis-konstantinou?tab=profile" class="social-icon" target="_blank">
                    <img src="@/assets/stack.png" alt="stackOverflow">
                </a>
            </div>
            <div class="copyright">
                <span>Made with ❤️ by <a href="https://github.com/abregre" class="abregre" target="_blank">Abregre</a></span>
            </div>
        </div>
    </div>
    <!-- <b-container fluid="lg">
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
            </b-col>
        </b-row>
    </b-container> -->
</template>

<script>
    // import { BIconEyeFill } from 'bootstrap-vue'
    export default {
        name: "FooterBar",
        components: {

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
    .footer {
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        background-color: #403D39;
        color: #ccc5b9;
        height: 70px;
    }

    .content {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.25rem;
    }

    .abregre {
        color: #ccc5b9;
        text-decoration: none;
    }

    .social-icon + .social-icon{
        margin-left: 1rem;
    }


@media screen and (min-width: 600px) {
      .content {
        padding: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
    }
}

</style>
