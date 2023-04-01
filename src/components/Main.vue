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

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>