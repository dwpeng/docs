<script setup lang="ts">

import type { Item } from '../../../types';

defineProps<{
    title: string,
    items: Item[]
}>()

</script>

<template>
    <h2 class="card-group-title">{{ title }}</h2>
    <div class="card-itmes">
        <div class="card" v-for="card in items" :key="card.name" :style="{ 'background-color': card.bgColor }">
            <a :href="card.url">
                <div class="wrapper">
                    <img :src="card.imgUrl" alt="">
                    <span>{{ card.name }}</span>
                </div>
            </a>
        </div>
    </div>
</template>


<style lang="less">
.card-group-title {
    font-size: 24px;
    font-weight: 800;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    margin: 0 10px;

    &:before {
        position: absolute;
        content: ' ';
        height: 100%;
        width: 5px;
        left: -10px;
        border-radius: 8px;
        background: #6a57f6;
    }
}

.card-itmes {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;
    column-gap: 20px;
    padding: 20px 0;
    box-sizing: border-box;
    justify-content: start;

    @media (min-width : 768px) {
        grid-template-columns: repeat(auto-fill, 300px);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(auto-fill, 300px);
    }

    .card {
        width: 100%;
        height: auto;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 4px;

        .wrapper {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            @media (min-width: 768px) {
                flex-direction: row;
            }
        }



        &:hover {
            opacity: 0.8;
        }

        img {
            width: 64px;
            height: 64px;
        }

        span {
            display: block;
            font-size: 20px;
            font-weight: 600;
            margin-top: 10px;
            color: #fff;
        }
    }

}
</style>
