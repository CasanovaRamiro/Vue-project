<template>
    <div class="container">
        <div v-for="item in listItems" class="card">

            <router-link :to="{ name: 'CardDetail', params: { id: item.id } }">
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
        }
    },
    methods: {
        async getData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9f42f2452dmsh3663ac4e82e18b3p13787fjsn723fb76e2215',
                    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
                }
            };

            await fetch('https://the-mexican-food-db.p.rapidapi.com/', options)
                .then(response => response.json())
                .then((response) => this.listItems = response)
                .catch(err => console.error(err));
            console.log(this.listItems)

        }
    }, mounted() {
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
$width-container: 100%;
$width-fill: 100%;
$margin: 30px auto;
$padding-general: 5px;
$padding-out: 24px;
$line-height-general: 20px;
$box-shadow-general: 0px 2px 16px 0px rgba(0, 0, 0, 0.75);
$title: 20px;


.container {
    width: $width-container;
    margin: $margin;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;

    .card {
        width: calc($width-fill/7);
        overflow: hidden;
        border-radius: 4px;
        box-shadow: $box-shadow-general;
        position: relative;
        padding-bottom: 20px;
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