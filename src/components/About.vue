<template>
    <b-container fluid="lg">
        <b-row class="mt-3">
            <b-col md="8">
                <h1>About me</h1>
                <p>Undergraduate computer science student at Athens university of Economics and Business.
                    Eager to learn new Technologies and computer science related staff.
                    Interested in computer security, secure application development, applied cryptography,
                    digital signatures, public key infrastructure and lots of other security related topics.
                </p>
            </b-col>
            <b-col md="4" class="d-none d-sm-block">
                <img src="@/assets/personal-image.jpg" alt="a profile picture of me" class="profile-image">
            </b-col>
        </b-row>
        <b-card-group columns>
            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
            </b-card>
            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
            </b-card>
            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .profile-image {
        margin: auto;
        max-width: 200px;
        border-radius: 50%;
    }

</style>
