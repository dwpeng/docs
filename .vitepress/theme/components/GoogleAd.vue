<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const container = ref()
let hasInitalized = false


const init = () => {
    if (!hasInitalized) {
        hasInitalized = true;
        container.value.innerHTML = `<ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-5247553446852481"
            data-ad-slot="8319897006"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>`

        const r = document.createElement('script')
        r.innerText = '(adsbygoogle = window.adsbygoogle || []).push({});'
        container.value.appendChild(r)
    }
}

onMounted(() => {
    setTimeout(()=>{
        init();
    }, 2 * 1000)
})


</script>

<template>
    <div class="container" ref="container"></div>
</template>

<style scoped>
.container {
    margin-top: 20px;
    height: auto;
    width: 100%;
}
</style>
