<template>
    <main>
        <detail-dialog
            :isDialogOpen="isDialogOpen"
            @update:isDialogOpen="updateIsDialogOpen"
            :card="selectedCard"
        />
        <v-container>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.id"
                    :cols="card.flex"
                >
                    <card @click="getCardDescription(card)" :card="card" />
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';
import DetailDialog from './DetailDialog.vue';
import axios from 'axios';
import { Card as CardInterface } from '@/types/Card';

export default defineComponent({
    name: 'Main',
    components: {
        Card,
        DetailDialog,
    },
    data() {
        return {
            isDialogOpen: false,
            acceptOrDecline: false,
            selectedCard: {},
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
                    description: 'This is a my favorite hat.',
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
    methods: {
        async getCardDescription(card: CardInterface) {
            this.selectedCard = card;
            this.isDialogOpen = true;
            const options = {
                method: 'POST',
                headers: { 
                    'Authorization': 'hmac OPA-Auth:a_KYfXtOOaP3_LyLz:qv9QCLMKBkoVZiPEMKKDfjJ+rnwjjCHRjDMg04PLrW8=:0ddb2b:1680708596:goFh3PqK8qgMqOj5Dv3cOQ==',
                    'X-ASSUME-MERCHANT': 630700163929776128,
                    'Content-Type': 'application/json',
                },
                url: `/v2/payments`,
                body: {
                    "amount":1000,
                    "merchantPaymentId":"DEVELOPER-PANEL-DEMO-03cfa30b-0b53-42bd-8882-db0252066eb8",
                    "requestedAt":1680708596,
                    "userAuthorizationId":"ee4b636d-7e44-4281-8575-2e2255b37aa3",
                    "orderDescription":""
                },
                json: true
            };
            await axios(options)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateIsDialogOpen(acceptOrDecline: boolean) {
            this.isDialogOpen = false;
            this.acceptOrDecline = acceptOrDecline;
        },
    }
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