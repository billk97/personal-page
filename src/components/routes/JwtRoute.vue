<template>
    <b-container fluid="lg">
        <h2>JWT Debugger</h2>
        <b-row>
            <b-col>
                <h5 style="text-align: left">Encoded</h5>
                <b-form-textarea
                    id="plain-text"
                    ref="encodedJwt"
                    v-model="encodedJwt"
                    placeholder="Enter the encoded JWT"
                    no-resize
                    rows="17"
                    :state="invalidEncodedJwt"
                    @update="parseJwt()"
                />
            </b-col>
            <b-col>
                <b-row>
                    <h5>Header</h5>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtHeader"
                        no-resize
                        :rows="4"
                        style="color: #d62d2d"
                    />
                </b-row>
                <b-row>
                    <h5>Payload</h5>
                    <div>
                        <b-badge v-if="hasExpired === true" style="background-color: #e71919">Expired</b-badge>
                        <b-badge v-else-if="hasExpired === false" style="background-color: green">Active</b-badge>
                        <b-badge style="background-color: #0073ff">Expires:</b-badge> {{ tokenExpirationDate }}
                    </div>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtPayload"
                        no-resize
                        :rows="5"
                        style="color: rgb(146 23 122);"
                    />
                </b-row>
                <b-row>
                    <h5>Signature</h5>
                    <b-form-textarea
                        id="plain-text"
                        v-model="jwtSignature"
                        no-resize
                        :rows="4"
                        style="color: #3ba045"
                    />
                </b-row>
            </b-col>
        </b-row>
        <b-alert variant="danger" :show="invalidEncodedJwt === false" class="mt-3"> {{ errorMessage }} </b-alert>
    </b-container>
</template>

<script>
    import jwtDecode from 'jwt-decode'
    export default {
        name: "JwtRoute",
        data() {
            return {
                encodedJwt: '',
                jwtHeader: '',
                jwtPayload: '',
                jwtSignature: '',
                invalidEncodedJwt: null,
                errorMessage: '',
                tokenExpirationDate: '',
                hasExpired: null,
            }
        },
        methods: {
            parseJwt() {
                try {
                    jwtDecode(this.encodedJwt)
                    this.invalidEncodedJwt = true
                    this.errorMessage = ''
                }
                catch (err) {
                    this.invalidEncodedJwt = false
                    this.errorMessage = 'Token is invalid cannot be parsed'
                    return
                }
                this.jwtPayload = JSON.stringify(jwtDecode(this.encodedJwt), null, 2)
                this.jwtHeader = JSON.stringify(jwtDecode(this.encodedJwt, {header: true}), null, 2)
                this.jwtSignature = this.encodedJwt.split('.')[2]
                if (!jwtDecode(this.encodedJwt).exp) {
                    return
                }
                this.tokenExpirationDate = new Date(jwtDecode(this.encodedJwt).exp * 1000)
                const current = new Date()
                console.log(current)
                console.log(this.tokenExpirationDate)
                this.hasExpired =  current > this.tokenExpirationDate
            }
        }
    }
</script>

<style scoped>

</style>
