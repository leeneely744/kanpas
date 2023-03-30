<template>
    <header class="app-header">
        <h1>My App</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}
</style>
