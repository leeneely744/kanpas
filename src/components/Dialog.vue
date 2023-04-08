<template>
    <v-dialog
        v-model="isDialogOpen"
        persistent
        width="auto"
    
    >
        <v-card>
            <v-card-title class="headline">Use Google's location service?</v-card-title>
            <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
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
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DetailDialog',
    props: {
        isDialogOpen: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    methods: {
        onClickDialogButton(acceptOrDecline: boolean) {
            this.$emit('update:isDialogOpen', acceptOrDecline);
        },
    },
});
</script>