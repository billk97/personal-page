<template>
    <div class="footer">
        <div class="content">
            <div class="social-container">
                <a href="https://github.com/billk97" class="social-icon" target="_blank">
                    <img src="@/assets/github.png" alt="github">
                </a>
                <a href="https://www.linkedin.com/in/vasilis-konstantinou-a77a281aa/" class="social-icon" target="_blank">
                    <img src="@/assets/linkedin.png" alt="linkIN">
                </a>
                <a href="https://twitter.com/VKonstantiou" class="social-icon" target="_blank">
                    <img src="@/assets/twitter.png" alt="twitter">
                </a>
                <a href="https://stackoverflow.com/users/7994351/vasilis-konstantinou?tab=profile" class="social-icon" target="_blank">
                    <img src="@/assets/stack.png" alt="stackOverflow">
                </a>
                <a href="mailto:vasileios@konstantinou.dev" class="social-icon">
                    <img src="@/assets/email-light.png" alt="email">
                </a>
            </div>
            <div class="copyright">
                <span>Made with ❤️ by <a href="https://github.com/abregre" class="abregre" target="_blank">Abregre</a></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        background-color: var(--secondary-clr);
        color: var(--main-clr);
        height: 80px;
        padding: 20px 0;
    }

    .content {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.25rem;
    }

    .abregre {
        color: var(--main-clr);
        text-decoration: none;
    }

    .social-icon {
        cursor: pointer;
    }

    .social-icon:hover img {
        animation: spin 0.7s ease;
    }

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }


    .social-icon + .social-icon{
        margin-left: 1rem;
    }


@media screen and (min-width: 600px) {
      .content {
        padding: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
    }
}

</style>
