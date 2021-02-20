<template>
    <b-container fluid="lg">
        <h2>JWT Debugger</h2>
        <b-row>
            <b-col>
                <h5 style="text-align: left">Encoded</h5>
                <b-form-textarea
                    id="plain-text"
                    v-model="encodedJwt"
                    placeholder="Enter the encoded JWT"
                    no-resize
                    rows="10"
                    :state="encodedJwt.length > 0"
                />
            </b-col>
            <b-col>
                <b-row>
                    <h5>Header</h5>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtHeader"
                        no-resize
                        :state="jwtHeader.length > 0"
                    />
                </b-row>
                <b-row>
                    <h5>Payload</h5>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtPayload"
                        no-resize
                        :state="jwtPayload.length > 0"
                    />
                </b-row>
                <b-row>
                    <h5>signature</h5>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtSignature"
                        no-resize
                        :state="jwtSignature.length > 0"
                    />
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "JwtRoute",
        data() {
            return {
                encodedJwt: '',
                jwtHeader: '',
                jwtPayload: '',
                jwtSignature: ''
            }
        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
