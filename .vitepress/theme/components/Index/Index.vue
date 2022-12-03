<template>
    <div class="home-wrapper">
        <Card :title=programe.title :items=programe.items />
    </div>
</template>


<script setup lang="ts">
import Card from './Card.vue'
const programe = {
    title: '编程',
    items: [
        { 
            name: 'Python', 
            imgUrl: '/asserts/python_128x128.png', 
            url: '/python/',
            bgColor: '#1a1a1a'
         }
    ]
}

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
