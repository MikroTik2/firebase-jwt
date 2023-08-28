<template>
    <main>
        <router-link to="/sign-up">
            <Button label="Get started" />
        </router-link>
    </main>
</template>

<script setup>
    import Button from 'primevue/button';
</script>

<style lang="scss" scoped>
    main {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>