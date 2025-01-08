<template>
    <div>
        <aside class="sidebar" :class="isMenuOpen ? 'active' : ''">
            <div class="sidebar-info">
                <figure class="avatar-box">
                    <img src="../assets/images/our-avatar.jpg" alt="Yoel Gebrezgabhier " width="100" />
                </figure>

                <div class="info-content">
                    <h1 class="name" title="Yoel Gebrezgabhier">Asmerom Kiflay</h1>

                    <!-- <p class="title">Web & App developer</p> -->
                </div>

                <button class="info_more-btn" @click="() => isMenuOpen = !isMenuOpen">
                    <span>Show Contacts</span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div class="sidebar-info_more ">
                <div class="separator"></div>

                <ul class="contacts-list">
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Email</p>

                            <a href="mailto:asmiejohn@gmail.com" class="contact-link">asmiejohn@gmail.com</a>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Phone</p>

                            <a href="tel:+12133522795" class="contact-link">+1 (825)-888-1945</a>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Location</p>

                            <address> Canada</address>
                        </div>
                    </li>
                </ul>

                <div class="separator"></div>

                <ul class="social-list">
                    <li class="social-item">
                        <a href="https://www.facebook.com/asmerom.yohannes.90?mibextid=ZbWKwL" target="_blank" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="https://twitter.com/SolianaHaile2?t=4joNOvc6qdAQUmg63t5zgg&s=09" target="_blank" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="https://wa.me/+18258881945?text=Hello! I want to chat with you." target="_blank" class="social-link">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

    </div>
</template>



<script setup>

import { ref } from 'vue';

const isMenuOpen = ref(false)

</script>