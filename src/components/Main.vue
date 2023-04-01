<template>
    <main>
        hello
        <div>
            <v-btn color="primary" @click="() => $router.push('/login')">Login</v-btn>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Main',
});
</script>