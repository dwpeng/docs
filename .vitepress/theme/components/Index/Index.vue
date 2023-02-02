<template>
    <div class="home-wrapper">
        <div v-for="card in data.theme.value.cards" :key="card.title">
            <Card :title=card.title :items=card.items />
        </div>
    </div>
</template>


<script setup lang="ts">
import { useData } from 'vitepress'

import Card from './Card.vue'
const data = useData()

</script>


<style lang="less">
.home-wrapper {
    padding: 0px;
    margin: 0 20px;

    @media (min-width: 1280px) {
        margin: 0 180px;
        margin-top: 50px;
    }
}
</style>
