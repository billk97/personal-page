<template>
    <div class="route">
        <div class="content">
            <div class="svg-img-container">
                <img :src="mySVG" alt="monitoring images" class="svg-img">
            </div>
            <div class="text">
                <h1>Software engineer 🧑‍💻 </h1>
                <p> {{ $t('catchPhrase') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRoute",
        data() {
            return {
                mySVG: require('@/assets/code-review.svg')
            }
        }
    }
</script>

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
    text-align: center;
}
.text h1 {
    font-weight: bold;
    margin-bottom: 1rem;
}

.svg-img {
    width: 100%;
}

@media screen and (min-width: 600px) {
    .content {
        flex-direction: row;
    }

    .text {
        max-width: 40%;
        margin-top: 0;
        margin-right: 5%;
        text-align: left;
        order: 1;
    }

    .svg-img-container {
        order: 2;
        max-width: 60%;
    }

}
</style>
