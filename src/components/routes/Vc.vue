<template>
    <div>
        <H1>Create a vc</H1>
        <div>
            <b-form-input v-model="name" type="text" placeholder="Enter your name" />
            <b-form-input v-model="age" placeholder="Enter your age" />
        </div>
        <b-button variant="info" @click="generateVc()"> Generate vc</b-button>
        <h2>Credential</h2>
        <div> {{ credential }} </div>
        <h2>VC</h2>
        <div> {{ vc }}</div>
    </div>
</template>

<script>
    import {
        createCredential,
        createVerifiableCredential,
        RequiredProof,
        SignatureValue
    } from '@cef-ebsi/verifiable-credential'
    export default {
        name: "Vc",
        data() {
            return {
                name: '',
                age: 0,
                credential: {},
                vc: {}
            }
        },
        created() {
        },
        methods: {
            generateVc() {
                const credential = createCredential({
                    credentialSubject: { name: this.name, age: this.age },
                    issuer: "did:ebsi:zsSgDXeYPhZ3AuKhTFneDf1",
                })
                this.credential = credential

                let requiredProof = {
                    type: "EcdsaSecp256k1Signature2019",
                    proofPurpose: "assertionMethod",
                    verificationMethod: "did:ebsi:zwDb6tWecUjaoShWYx9fmqZ#eidasKey",
                }

                let signatureValue = {
                    proofValue:
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9..xSfnO21PsmCPgLkE34wZQ5mLOcRmb4NPiBSKw3EULCBZiVSWrR_VhddwMuyydBwkimA04f2NJQofD3gF3t5tuAE",
                    proofValueName: "jws",
                }

                const vc = createVerifiableCredential(
                    credential,
                    requiredProof,
                    signatureValue
                )

                this.vc = vc
            }
        }
    }
</script>

<style scoped>

</style>
