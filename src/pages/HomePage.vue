<template>
    <main>

        <EclipseSideBar />

        <div class="main-content">

            <EclipseNavigation />

            <article class="active">
                <router-view />
            </article>

        </div>

    </main>

</template>

<script setup>

import EclipseNavigation from '../components/EclipseNavigation.vue';
import EclipseSideBar from '../components/EclipseSideBar.vue';
</script>