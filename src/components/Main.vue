<template>
    <main>
        <v-container>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.id"
                    :cols="card.flex"
                >
                    <v-img
                        :src="card.img"
                        class="align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                        cover
                    >
                      <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Main',
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: 'Card 1',
                    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                    flex: 12,
                },
                {
                    id: 2,
                    title: 'Card 2',
                    img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 6,
                },
                {
                    id: 3,
                    title: 'Card 3',
                    img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 6,
                },
                {
                    id: 4,
                    title: 'Card 4',
                    img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                    flex: 4,
                },
                {
                    id: 5,
                    title: 'Card 5',
                    img: 'https://cdn.vuetifyjs.com/images/cards/water.jpg',
                    flex: 4,
                },
                {
                    id: 6,
                    title: 'Card 6',
                    img: 'https://cdn.vuetifyjs.com/images/cards/wind.jpg',
                    flex: 4,
                },
            ],
        };
    },
});
</script>

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}
</style>