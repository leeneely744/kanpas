<template>
    <v-img
        :src="card.img"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
    >
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" :content="card.title">
        <meta name="twitter:description" :content="cardDescription">
        <meta name="twitter:image" :content="card.img">
        <v-card-title class="text-white">
            {{ card.title }}
        </v-card-title>
    </v-img>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Card {
    id: number;
    title: string;
    img: string;
    description?: string;
    flex?: number; // use in parent component's v-col
}

export default defineComponent({
    name: 'Card',
    props: {
        card: {
            type: Object as PropType<Card>,
            required: true,
            default: () => ({ flex: 6}),
        },
    },
    computed: {
        cardDescription() {
            return this.card.description || "";
        },
    },
});
</script>
