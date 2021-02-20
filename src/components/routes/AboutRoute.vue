<template>
    <b-container fluid="lg" class="mt-3">
        <h1>Software engineer 🧑‍💻 </h1>
        <p> {{ $t('catchPhrase') }}</p>
        <img src="@/assets/monitoring.png" alt="monitoring images">
        <p class="mt-5">
            {{ $t('sortDirection[0]') }}
            <a href="https://mpass.gr/" target="blank">@MPASS</a>
            {{ $t('sortDirection[1]') }}
            <a href="https://aueb.gr/en" target="blank">@AUEB</a>
            {{ $t('sortDirection[2]') }}
        </p>
        <h3 class="mt-5">Work experience  💼</h3>
        <ul>
            <li class="bullets-work">
                <strong>Software engineer <a href="https://mpass.gr/" target="blank">@MPASS</a>
                    📆  05/2020 - Present
                </strong>
                <p>{{ $t('mpassWorkDescription') }}</p>
            </li>
            <li class="bullets-work">
                <strong>Assistant System Administrator <a href="https://cslab.aueb.gr/en/about/AboutRoute.vue" target="blank">@AUEB CsLabs</a>
                    📆  02/2019 - 06/2020
                </strong>
                <p>{{ $t('auebWorkDescription') }}</p>
            </li>
        </ul>
        <h3 class="mt-5">Education  🎓 </h3>
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
        <h3 class="mt-5">Technologies I use </h3>
        <b-card-group columns>
            <technologies :technologies="langBox" />
            <technologies :technologies="frameBox" />
            <technologies :technologies="infrastructureBox" />
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
                langBox: {
                    title: "Languages",
                    boxes: [
                        {title: "Java", description: "1 Year of professional experience.", imagePath: "java.png"},
                        {title: "Javascript", description: "6 Months of professional experience", imagePath: "javascript.png"},
                        {title: "Python", description: "Go to language for scripts, data science, machine learning", imagePath: "python.png"}]
                },
                infrastructureBox: {
                    title: "Infrastructure",
                    boxes: [
                        {title: "Docker", description: "1 Year of professional experience.", imagePath: "docker.png"},
                        {title: "AWS", description: "6 Months of professional experience", imagePath: "aws.png"},
                        {title: "Git", description: "", imagePath: "git.png"},
                        {title: "Mysql", description: "1 Year of professional experience.", imagePath: "mysql.png"},
                        {title: "Jenkins", description: "6 Months of professional experience", imagePath: "jenkins-icon.png"},]
                },
                frameBox: {
                    title: "Frameworks",
                    boxes: [
                        {title: "Spring boot", description: "1 Year of professional experience.", imagePath: "spring.png"},
                        {title: "Vue js", description: "6 Months of professional experience", imagePath: "vue.svg"},
                        {title: "Android", description: "", imagePath: "android.png"},
                        {title: "Bootstrap", description: "", imagePath: "bootstrap.png"}
                    ]
                }
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
