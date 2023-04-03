<template>
    <div class="container">
        <h1>{{ item.title }}</h1>
        <h4>{{ item.description }}</h4>
        <img class="card-image" :src=item.image />
        <div>
            <h4> ingredients</h4>
            <ul>
                <li v-for="ingredient in item.ingredients">{{ ingredient }}</li>
            </ul>
            <h4>Steps</h4>
            <ul>
                <fieldset v-for="method in item.method">
                    <legend>{{ Object.keys(method)[0] }}</legend> {{ Object.values(method)[0] }}
                </fieldset>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
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
                    'X-RapidAPI-Key': '9f42f2452dmsh3663ac4e82e18b3p13787fjsn723fb76e2215',
                    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
                }
            };

            await fetch(`https://the-mexican-food-db.p.rapidapi.com/${this.$route.params.id}`, options)
                .then(response => response.json())
                .then((response) => this.item = response)
                .catch(err => console.error(err));
            console.log(this.item)

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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

}
</style>