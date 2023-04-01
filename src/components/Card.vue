<template>
    <v-img
        :src="card.img"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
    >
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
});
</script>
