<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { onMounted, ref } from 'vue';
import { useData } from 'vitepress';
const { isDark } = useData();

/**
 * 检查是否在QQ中打开
 */
const show = ref(true)
onMounted(() => {
    let UserAgent = window.navigator.userAgent.toLowerCase()
    let isqq = UserAgent.indexOf('qq') > -1
    if (isqq) {
        show.value = false
    }
})

</script>
<template>
    <ClientOnly>
        <div v-if="show" class="comments-container">
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
