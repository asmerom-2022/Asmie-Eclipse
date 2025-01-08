<template>
    <div class="contact">

        <header>
            <h2 class="h2 article-title">Get in Touch!</h2>
        </header>


        <section class="contact-form">
            <h3 class="h3 form-title"></h3>


            <form class="form" action="https://formspree.io/f/mgvvvnyb"method="POST">


                <div class="input-wrapper">
                    <input type="text" name="fullname" class="form-input" placeholder="Full name" required />

                    <input type="email" name="email" class="form-input" placeholder="Email address" required />
                </div>

                <textarea name="message" class="form-input" placeholder="Message" required data-form-input></textarea>

                <button class="form-btn" type="submit">
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                </button>
            </form>



        </section>

    </div>
</template>
<script setup></script>