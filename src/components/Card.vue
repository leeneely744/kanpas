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
import axios from 'axios';

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
    methods: {
        async getCardDescription() {
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
    }
});
</script>
