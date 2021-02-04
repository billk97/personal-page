<template>
    <b-container fluid="lg">
        <h1>Software engineer</h1>
        <p>I like writing code which is clean and secure enough. </p>
        <p>
            I currently work as a Backend Software engineer
            <a href="https://mpass.gr/" target="blank">@mpass</a>
            developing new features while at the same time refactoring the code base and adding
            more and more automated tests..
            I am also studying for a master's in Information Systems
            <a href="https://aueb.gr/en" target="blank">@AUEB</a>
            My interests develop mostly around the domains of information security, clean coding,
            code architecture, DevOps, secure application development, and lots of other relevant domains.
            I'm eager to learn new technologies and further develop my knowledge.
        </p>
        <h3>Education</h3>
        <ul>
            <li class="bullets">
                Bs Computer Science ✅
                <a href="https://aueb.gr/en" target="blank">@AUEB</a>
            </li>
            <li class="bullets">
                Mcs Information Systems 🐌(in progress)
                <a href="https://aueb.gr/en" target="blank">@AUEB</a>
            </li>
        </ul>
        <h3>Technologies I use </h3>
        <b-card-group columns>
            <b-card title="Development">
                <span style="font-size: larger">Languages</span>
                <b-list-group style="text-align: left">
                    <b-list-group-item>
                        <img src="@/assets/java.png" alt="java image">
                        <strong>Java</strong>
                        1 Year of professional experience
                    </b-list-group-item>
                    <b-list-group-item>
                        <img src="@/assets/javascript.png" alt="javascript image">
                        <strong>Javascript</strong>
                        6 Months of professional experience
                    </b-list-group-item>
                    <b-list-group-item>
                        <img src="@/assets/python.png" alt="python image">
                        <strong>Python</strong>
                    </b-list-group-item>
                </b-list-group>
                <span style="font-size: larger">Frameworks</span>
                <b-list-group style="text-align: left">
                    <b-list-group-item>
                        <img src="@/assets/spring.png" alt="spring image">
                        <strong>Spring boot</strong>
                        1 Year of professional experience
                    </b-list-group-item>
                    <b-list-group-item>
                        <img src="@/assets/vue.svg" alt="vue image">
                        <strong>Vue js</strong>
                        6 Months of professional experience
                    </b-list-group-item>
                    <b-list-group-item>
                        <img src="@/assets/android.png" alt="android image">
                        <strong>Android</strong>
                    </b-list-group-item>
                    <b-list-group-item>
                        <img src="@/assets/bootstrap.png" alt="boostrap image">
                        <strong>Bootstrap</strong>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card title="Inferstructure">
                <b-card-text>
                    <b-list-group style="text-align: left">
                        <b-list-group-item>
                            <img src="@/assets/docker.png" alt="docker image">
                            <strong>Docker</strong>
                            1 Year of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/aws.png" alt="aws image">
                            <strong>AWS</strong>
                            6 Months of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/git.png" alt="git image">
                            <strong>git</strong>
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/mysql.png" alt="mysql image">
                            <strong>mysql</strong>
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/jenkins.png" alt="jenkins image">
                            <strong>jenkins</strong>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
                <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
            </b-card>
            <b-card title="Title">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                    <b-list-group style="text-align: left">
                        <b-list-group-item>
                            <img src="@/assets/java.png" alt="java image">
                            <strong>Java</strong>
                            1 Year of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/javascript.png" alt="javascript image">
                            <strong>Javascript</strong>
                            6 Months of professional experience
                        </b-list-group-item>
                        <b-list-group-item>
                            <img src="@/assets/python.png" alt="python image">
                            <strong>Python</strong>
                        </b-list-group-item>
                    </b-list-group>
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
    .bullets {
        text-align: left;
        font-weight: bold;
    }

</style>
