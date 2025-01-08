<script setup>
const props = defineProps(['name', 'category', 'image', 'link'])


console.log('project', props.name, props.category, props.image);


</script>

<template>
    <div>
        <li class="project-item active" data-filter-item data-category="web development">
            <a :href="link" target="_blank">
                <figure class="project-img">
                    <div class="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img :src="`${image}`" alt="image" loading="lazy" />
                </figure>

                <h3 class="project-title">{{ name }}</h3>

                <p class="project-category">{{ category }}</p>
            </a>
        </li>

    </div>
</template>
