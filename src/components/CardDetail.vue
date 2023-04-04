<template class="bg">
    <div class="container">
        <GoBackButton />
        <h1>{{ item.title }}</h1>
        <h4>{{ item.description }}</h4>
        <div class="flex">
            <img class="card-image" :src=item.image />
            <div class="details">
                <h4> ingredients</h4>
                <ul>
                    <li v-for="ingredient in item.ingredients">{{ ingredient }}</li>
                </ul>

                <ul>
                    <fieldset v-for="method in item.method">
                        <legend>{{ Object.keys(method)[0] }}</legend> {{ Object.values(method)[0] }}
                    </fieldset>
                </ul>
            </div>
        </div>


    </div>
</template>

<script>
import GoBackButton from './GoBackButton.vue';
export default {
    components: {
        GoBackButton
    },
    data() {
        return {
            item: []
        }
    },
    methods: {
        async getData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
                }
            };

            await fetch(`https://the-mexican-food-db.p.rapidapi.com/${this.$route.params.id}`, options)
                .then(response => response.json())
                .then((response) => this.item = response)
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

.bg {}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.details {
    width: calc($width-container/3);
}

.container {
    width: $width-container;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    h4 {
        color: rgb(57, 55, 55);
        width: calc($width-container/1.3);
        text-align: center;
    }

    ul {
        border-top: solid 2px black;
        padding-top: 10px;
    }

    div {
        img {
            box-shadow: $box-shadow-general;
            align-self: flex-start;
        }
    }
}
</style>