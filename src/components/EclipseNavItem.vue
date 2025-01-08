<script setup>

const props = defineProps(['name', 'link', 'isActive'])




</script>

<template>


    <router-link :to="link">

        <li class="navbar-link ">

            {{ name }}
        </li>
    </router-link>



</template>


<style></style>
