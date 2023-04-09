<template>
    <v-dialog
        v-model="isDialogOpen"
        persistent
        width="auto"
    
    >
        <v-card>
            <v-card-title class="headline">{{ card.title }}</v-card-title>
            <v-card-text>
                {{ card.description }}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onClickDialogButton(false)">Decline</v-btn>
                <v-btn color="blue darken-1" text @click="onClickDialogButton(true)">Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card } from '@/types/Card';

export default defineComponent({
    name: 'DetailDialog',
    props: {
        isDialogOpen: {
            type: Boolean,
            required: true,
            default: false,
        },
        card: {
            type: Object as PropType<Card>,
            required: true,
            default: () => ({ flex: 6}),
        },
    },
    methods: {
        onClickDialogButton(acceptOrDecline: boolean) {
            this.$emit('update:isDialogOpen', acceptOrDecline);
        },
    },
});
</script>