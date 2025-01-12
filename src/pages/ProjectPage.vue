<template>
    <div>
        <header>
            <h2 class="h2 article-title">Projects</h2>
        </header>

        <!-- filter -->

        <ul class="filter-list">
            <li v-for="category in categories" :key="category" class="filter-item"
                :class="{ active: selectedCategory === category }">
                <button @click="(e) => filterItems(e, category)">{{ category }}</button>
            </li>
        </ul>

        <!-- mobile filter -->

        <div class="filter-select-box">
            <button @click="() => isSelectBoxOpen = !isSelectBoxOpen" :class="isSelectBoxOpen ? 'active' : ''"
                class="filter-select" data-select>
                <div class="select-value" data-selecct-value>
                    <p>{{ selectedCategory }}</p>
                </div>

                <div class="select-icon">
                    <ion-icon name="chevron-down"></ion-icon>
                </div>
            </button>

            <ul class="select-list">
                <li v-for="category in categories" :key="category" class="select-item"
                    :class="{ active: selectedCategory === category }">
                    <button @click="(e) => filterItems(e, category)">{{ category }}</button>
                </li>
            </ul>
        </div>


        <!-- project list -->

        <ul class="project-list">
            <EclipseProjects v-for="item in filterdItems" :key="item.id" :name="item.name" :category="item.category"
                :image="item.img" :link="item.path" />
        </ul>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import EclipseProjects from '../components/EclipseProjects.vue';


const items = [
    {
        id: 1,
        name: "Kabbee +",
        category: "Mobile App",
        path: "https://play.google.com/store/apps/details?id=org.kabbee.kabbeeplus",
        img: "/img4.png",
    },
    {

        id: 2,
        name: "Quiz",
        category: "Mobile App",
        path: "https://play.google.com/store/apps/details?id=org.kabbee.kabbeeplus",
        img: "/img6.png",
    },
    {
        id: 3,
        name: "learn Streaming",
        category: "mobile app",
        path: "https://eridemy.com/",
        img: "/project-13.png",
    },


    {
        id: 5,
        name: "Quiz",
        category: "Website",
        path: "https://ela-quiz-app.netlify.app/",
        img: "/img1.png",
    },

    {
        id: 6,
        name: "Bible",
        category: "Website",
        path: "https://vue-bible.vercel.app/",
        img: "/img5.png",
    },

    {
        id: 7,
        name: "E-commerce",
        category: "Website",
        path: "https://miki-recipe.netlify.app",
        img: "/img3.png",
    },
    {
        id: 8,
        name: "Recipe",
        category: "Website",
        path: "https://miki-recipe.netlify.app",
        img: "/img2.png",
    },

    {

        id: 9,
        name: "Shopping",
        category: "Mobile App",
        path: "https://ecommerce-app-scratch.web.app/",
        img: "/ecommerce.png",
    },
    {

        id: 10,
        name: "Africa Earth Keepers",
        category: "Website",
        path: "https://africaearthkeepers.com/",
        img: "/aek.png",
    },
    {
        id: 11,
        name: "Modernistic",
        category: "Website",
        path: "https://www.modernistic.io/",
        img: "/modernistic.png",
    },
    {
        id: 12,
        name: "Lina plumbing",
        category: "Website",
        path: "https://linaplumb.co.uk",
        img: "/project-12.jpg",
    },
    {
        id: 13,
        name: "Restaurant Reservation",
        category: "Design",
        path: "#",
        img: "/figma.png",
    },


];

const categories = ["All", "Design", "Mobile App", "Website"]

const selectedCategory = ref('All')
const filterdItems = ref(items)
const isSelectBoxOpen = ref(false)


const filterItems = (e, category) => {
    selectedCategory.value = category
    isSelectBoxOpen.value = !isSelectBoxOpen.value

    e.target.parentElement.classList.remove('active')
    categories.map((i) => {
        if (i === e.target.innerText) {
            // console.log('check');
            // e.target.parentElement.classList.add('active')
            console.log(e.target.parentElement);
        }
        else {
            // console.log('nope');
            e.target.parentElement.classList.remove('active')
        }
    })


    if (selectedCategory.value === 'All') {
        filterdItems.value = items;


    }
    else if (selectedCategory.value) {
        filterdItems.value = items.filter(
            (item) => item.category === selectedCategory.value
        );

        console.log('categoryValue', selectedCategory.value);

    }
    else {
        filterdItems.value = items;
    }
}


</script>