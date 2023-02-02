<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress';
const { isDark } = useData();

</script>
<template>
    <ClientOnly>
        <div class="comments-container">
            <Giscus id="comments" repo="dwpeng/docs" repoId="R_kgDOIkT__w" category="Q&A"
                categoryId="DIC_kwDOIkT__84CT8y0" mapping="title" term="欢迎讨论" reactionsEnabled="1" emitMetadata="1"
                inputPosition="top" :theme="isDark ? 'dark' : 'light'" lang="zh-CN" />
        </div>
    </ClientOnly>
</template>

<style scoped>
.comments-container {
    margin-top: 20px;
}
</style>
