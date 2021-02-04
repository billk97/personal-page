<template>
    <b-container fluid="lg" class="mt-3">
        <h1>Software engineer 🧑‍💻 </h1>
        <p> {{ $t('catchPhrase') }}</p>
        <img src="@/assets/monitoring.png" alt="monitoring images">
        <p>
            {{ $t('sortDirection[0]') }}
            <a href="https://mpass.gr/" target="blank">@MPASS</a>
            {{ $t('sortDirection[1]') }}
            <a href="https://aueb.gr/en" target="blank">@AUEB</a>
            {{ $t('sortDirection[2]') }}
        </p>
        <h3>Work experience  💼</h3>
        <ul>
            <li class="bullets-work">
                <strong>Software engineer <a href="https://mpass.gr/" target="blank">@MPASS</a>
                    📆  05/2020 - Present
                </strong>
                <p>{{ $t('mpassWorkDescription') }}</p>
            </li>
            <li class="bullets-work">
                <strong>Assistant System Administrator <a href="https://cslab.aueb.gr/en/about/" target="blank">@AUEB CsLabs</a>
                    📆  02/2019 - 06/2020
                </strong>
                <p>{{ $t('auebWorkDescription') }}</p>
            </li>
        </ul>
        <h3>Education  🎓 </h3>
        <ul>
            <li class="bullets-education">
                Mcs Information Systems 🐌
                <a href="https://aueb.gr/en" target="blank">@AUEB</a>
                📆 09/2020 - Present
            </li>
            <li class="bullets-education">
                Bs Computer Science ✅
                <a href="https://aueb.gr/en" target="blank">@AUEB</a>
                📆 09/2015 - 06/2020
            </li>
        </ul>
        <h3>Technologies I use </h3>
        <b-card-group columns>
            <technologies :technologies="[java]" />
            <b-card title="Inferstructure">
                <b-card-text>
                    <b-list-group style="text-align: left">
                        <b-list-group-item>
                            <img src="@/assets/docker.png" alt="docker image">
                            <strong> Docker</strong>
                            1 Year of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/aws.png" alt="aws image">
                            <strong> AWS</strong>
                            6 Months of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/git.png" alt="git image">
                            <strong> Git</strong>
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/mysql.png" alt="mysql image">
                            <strong> Mysql</strong>
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/jenkins-icon.png" alt="jenkins image">
                            <strong> Jenkins</strong>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>
            <b-card title="Frameworks">
                <b-card-text>
                    <b-list-group style="text-align: left">
                        <b-list-group-item>
                            <img src="@/assets/spring.png" alt="spring image">
                            <strong> Spring boot</strong>
                            1 Year of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/vue.svg" alt="vue image">
                            <strong> Vue js</strong>
                            6 Months of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/android.png" alt="android image">
                            <strong> Android</strong>
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/bootstrap.png" alt="boostrap image">
                            <strong> Bootstrap</strong>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>

        </b-card-group>
    </b-container>
</template>

<script>
    import Technologies from '@/components/Technologies'
    export default {
        name: "About",
        components: {Technologies},
        data() {
            return {
                java: {title: "Java", description: "1 Year of professional experience."}
            }
        }
    }
</script>

<style scoped>
    .bullets-education {
        text-align: left;
        font-weight: bold;
    }
    .bullets-work {
        text-align: left;
    }

</style>
