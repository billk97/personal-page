<template>
    <div class="route">
        <div class="title">About</div>
        <div class="content">
            <p class="my-3">
                {{ $t('sortDirection[0]') }}
                <a href="https://mpass.gr/" target="_blank">@MPASS</a>
                {{ $t('sortDirection[1]') }}
                <a href="https://aueb.gr/en" target="_blank">@AUEB</a>
                {{ $t('sortDirection[2]') }}
            </p>
            <h3 class="my-3">Work experience  💼</h3>
            <ul>
                <li class="bullets-work">
                    <strong>Software engineer <a href="https://mpass.gr/" target="_blank">@MPASS</a>
                        📆  05/2020 - Present
                    </strong>
                    <p>{{ $t('mpassWorkDescription') }}</p>
                </li>
                <li class="bullets-work">
                    <strong>Assistant System Administrator <a href="https://cslab.aueb.gr/en/about/AboutRoute.vue" target="_blank">@AUEB CsLabs</a>
                        📆  02/2019 - 06/2020
                    </strong>
                    <p>{{ $t('auebWorkDescription') }}</p>
                </li>
            </ul>
            <h4 class="mb-3">
                <a href="https://drive.google.com/file/d/1Vx_eAq8A22D2T2eH35dyZxn1OMN_M6T_/view" class="resume" download="konstantinou-resume.pdf" target="_blank">
                    Download my Resume
                    ⬇
                </a>️
            </h4>
            <h3 class="my-3">Education  🎓 </h3>
            <ul>
                <li class="bullets-education">
                    Mcs Information Systems 🐌
                    <a href="https://aueb.gr/en" target="_blank">@AUEB</a>
                    📆 09/2020 - Present
                </li>
                <li class="bullets-education">
                    Bs Computer Science ✅
                    <a href="https://aueb.gr/en" target="_blank">@AUEB</a>
                    📆 09/2015 - 06/2020
                </li>
            </ul>
            <h3 class="mt-3">Technologies I use </h3>
            <b-card-group class="technologies-container">
                <technologies :technologies="langBox" />
                <technologies :technologies="frameBox" />
                <technologies :technologies="infrastructureBox" />
            </b-card-group>
        </div>
    </div>
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
                        {title: "Java", description: "1 Year of professional experience. 6 year's in total", imagePath: "java.png"},
                        {title: "Javascript", description: "6 Months of professional experience", imagePath: "javascript.png"},
                        {title: "Python", description: "Go to language for scripts, data science, machine learning", imagePath: "python.png"}]
                },
                infrastructureBox: {
                    title: "Infrastructure",
                    boxes: [
                        {title: "Docker", description: "1 Year of professional experience.", imagePath: "docker.png"},
                        {title: "AWS", description: "6 Months of professional experience", imagePath: "aws.png"},
                        {title: "Git", description: "4 Year of experience.", imagePath: "git.png"},
                        {title: "Mysql", description: "1 Year of professional experience.", imagePath: "mysql.png"},
                        {title: "Jenkins", description: "6 Months of professional experience", imagePath: "jenkins-icon.png"},]
                },
                frameBox: {
                    title: "Frameworks",
                    boxes: [
                        {title: "Spring boot", description: "1 Year of professional experience.", imagePath: "spring.png"},
                        {title: "Vue js", description: "6 Months of professional experience", imagePath: "vue.svg"},
                        {title: "Android", description: "1 Year of experience.", imagePath: "android.png"},
                        {title: "Bootstrap", description: "6 Months of professional experience", imagePath: "bootstrap.png"},
                        {title: "OpenFaas", description: "personal project", imagePath: "openfaas.png"}
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.route {
    background: #CCC5B9;
}
.content {
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #403D39;
}
.title {
    position: relative;
    color: #403D39;
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    padding-top: 1rem;
}
.bullets-education {
    text-align: left;
    font-weight: bold;
}
.bullets-work {
    text-align: left;
}

.resume {
    text-decoration: none;
    color: #ee7545;
    font-weight: bold;
}

.technologies-container {
    margin-bottom: 20%;
}

@media screen and (min-width: 600px) {
    .content {
        align-items: flex-start;
    }

    .technologies-container {
        margin-bottom: 12%;
    }
}


@media screen and (min-width: 1600px) {
    .title {
        position: absolute;
        left: 0;
        top: 80px;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        font-size: 12rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
}

</style>
