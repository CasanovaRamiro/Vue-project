<template>
    <h1 class="title">Mexican Food Recipes</h1>
    <button @click="pageUp">page +1</button>
    <button @click="pageDown">page -1</button>
    <div class="container">
        <div v-for="item in listItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)" class="card">
            <router-link style="text-decoration: none; color: inherit;"
                :to="{ name: 'CardDetail', params: { id: item.id } }">
                <img class="card-image" :src="item.image" />
                <div class="card-content activator">
                    <span class="card-title activator grey-text text-darken-4">{{ item.title }}</span>
                    <p>{{ item.difficulty }}</p>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>


export default {
    data() {
        return {
            listItems: [],
            page: 0,
            itemsPerPage: 10,
        }
    },
    methods: {
        pageUp() {
            if (Math.floor(this.listItems.length / this.itemsPerPage) === this.page) return
            console.log(Math.floor(this.listItems.length / this.itemsPerPage), this.page)
            this.page += 1
            console.log(this.page)
        },
        pageDown() {
            if (this.page === 0) return
            this.page -= 1
            console.log(this.page)
        },
        async getData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
                }
            };

            await fetch('https://the-mexican-food-db.p.rapidapi.com/', options)
                .then(response => response.json())
                .then((response) => this.listItems = response)
                .catch(err => console.error(err));
        }
    }, mounted() {
        this.getData()

    }
}
</script>

<style lang="scss" scoped>
$width-container: 100%;
$margin: 30px auto;
$padding-general: 5px;
$padding-out: 24px;
$line-height-general: 20px;
$box-shadow-general: 0px 2px 16px 0px rgba(0, 0, 0, 0.75);
$title: 20px;
$black-font: rgb(40, 40, 40);

.title {
    width: $width-container*0.8;
    margin: auto;
    font-size: 40px;
    text-align: center;
    color: $black-font;
    border-bottom: solid 2px $black-font;
    padding: $padding-general;
}

.container {
    width: $width-container;
    margin: $margin;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;


    .card {
        width: calc($width-container/7);
        overflow: hidden;
        border-radius: 4px;
        box-shadow: $box-shadow-general;
        position: relative;
        padding-bottom: 20px;
        color: $black-font;
        transition: 0.1s;
    }

    .card:hover {
        transform: scale(1.02);
    }
}

.card-image {
    width: $width-container;
}



.card-content {
    line-height: $line-height-general;
    vertical-align: middle;
    padding: $padding-out;


    p {
        position: absolute;
        bottom: 0;
        left: 5
    }
}

.activator {
    font-size: 16px;
    font-weight: 350;
}

.card-title {
    font-size: $title;
}
</style>