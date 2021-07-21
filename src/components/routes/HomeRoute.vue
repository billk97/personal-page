<template>
    <div class="route">
        <div class="content">
            <div class="svg-img-container">
                <img :src="mySVG" alt="monitoring images" class="svg-img">
            </div>
            <div class="text">
                <h1 class="text-title">Software engineer </h1>
                <p> {{ $t('catchPhrase') }}</p>
                <div
                    v-b-popover="popOverOptions"
                    v-clipboard:copy="emailAddress"
                    class="get-email"
                    @click="addToClipBoard"
                >
                    <span class="call-to-action">Get Email</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRoute",
        data() {
            return {
                mySVG: require('@/assets/code-review.svg'),
                webAddress : 'dmFzaWxlaW9zQGtvbnN0YW50aW5vdS5kZXY',
                emailAddress: '',
                displayAddress: false,
                popOverOptions: {
                    title: 'Email Copied',
                    triggers: 'click',
                    placement: 'right',
                    customClass: 'copy-popover'
                }
            }
        },
        methods: {
            addToClipBoard() {
                if (this.displayAddress) {
                    return
                }
                this.displayAddress = true
                this.emailAddress = atob(this.webAddress)
                setTimeout(() => {
                    this.$root.$emit('bv::hide::popover')
                }, 2000)
                setTimeout(() => {
                    this.displayAddress = false
                }, 5000)
            }
        }
    }
</script>

<style>
.arrow,
.arrow::before,
.arrow::after {
    border-color: var(--secondary-clr);
    border-right-color: var(--secondary-clr)!important;
}
.popover-header {
    background-color: var(--secondary-clr);
    border-color: var(--secondary-clr)!important;
    color: var(--main-clr)!important;
    font-size: 0.8rem;
}
</style>

<style scoped>
.route {
    background: var(--main-clr);
    margin-top: 80px;
}
.content {
    max-width: 1300px;
    height: calc(100vh - 140px);
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.text {
    color: var(--secondary-clr);
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.text h1 {
    font-weight: bold;
    margin-bottom: 1rem;
}


.get-email {
    background: var(--secondary-clr);
    color: var(--main-clr);
    border: 1px solid var(--secondary-clr);
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
}

.copy-popover {
    background: var(--secondary-clr);
}

.svg-img {
    width: 100%;
}

@media screen and (min-width: 600px) {
    .content {
        flex-direction: row;
    }

    .text {
        max-width: 45%;
        margin-top: 0;
        margin-right: 5%;
        text-align: left;
        align-items: flex-start;
        order: 1;
    }
    .text-title {
        font-size: 2rem;
    }

    .get-email {
        margin-top: 1.5rem;
    }

    .svg-img-container {
        order: 2;
        max-width: 55%;
    }

}

@media screen and (min-width: 800px) {
    .text-title {
        font-size: 2.2rem;
    }
    .text p {
        font-size: 1.1rem;
    }
}
@media screen and (min-width: 1200px) {
    .text-title {
        font-size: 3.5rem;
    }
}
</style>
