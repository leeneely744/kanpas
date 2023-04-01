<template>
    <main>
        <v-container>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.id"
                    :cols="card.flex"
                >
                    <card :card="card" />
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';

export default defineComponent({
    name: 'Main',
    components: {
        Card,
    },
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
                    img: './src/public/hat.png',
                    flex: 4,
                },
                {
                    id: 6,
                    title: 'Card 6',
                    img: './src/public/takoyakiya.png',
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