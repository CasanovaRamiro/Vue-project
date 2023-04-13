<template>
    <div class="container">
        <h1 class="title">Mexican Food Recipes</h1>
        <div class="pagination">
            <span @click="pageDown">Prev</span>
            <span v-if="page - 1 > 0" @click="page = page - 2">{{ page - 1 }}</span>
            <span v-if="page > 0" @click="page = page - 1">{{ page }}</span>
            <span class="current-page">{{ page + 1 }}</span>
            <span v-if="page + 1 <= Math.floor(this.listItems.length / this.itemsPerPage)" @click="page = page + 1">{{ page
                + 2
            }}</span>
            <span v-if="page + 2 <= Math.floor(this.listItems.length / this.itemsPerPage)" @click="page = page + 2">{{ page
                + 3
            }}</span>
            <span @click="pageUp">Next</span>
        </div>

        <div class="card-container">
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
    </div>
</template>

<script>


export default {
    data() {
        return {
            listItems: [],
            page: 0,
            itemsPerPage: 12,

        }
    },
    methods: {
        pageUp() {
            if (Math.floor(this.listItems.length / this.itemsPerPage) === this.page) return
            this.page += 1
        },
        pageDown() {
            if (this.page === 0) return
            this.page -= 1
        }, async getData() {
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

.container {
    width: $width-container*0.8;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pagination {
    display: flex;
    justify-content: space-around;
    width: 50%;
    min-width: 300px;
    max-width: 400px;
    padding: $padding-general;

    span {
        margin: auto;
        font-weight: 500;
        border-radius: 30px;
        padding: 3px 8px;
        cursor: pointer;
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.75);
        transition: 0.2s;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }

    span:hover {
        transform: scale(1.05);
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);

    }

    .current-page {
        background-color: $black-font;
        color: beige;
    }
}

.title {

    width: $width-container;
    font-size: 40px;
    text-align: center;
    color: $black-font;
    border-bottom: solid 2px $black-font;
    padding: $padding-general;
}

.card-container {
    margin: $margin;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;


    .card {
        width: calc($width-container/7);
        min-width: 250px;
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