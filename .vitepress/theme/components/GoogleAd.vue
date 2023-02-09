<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const container = ref()
let hasInitalized = false

const init = () => {
    if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement('script')
        s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5247553446852481`
        s.async = true
        container.value.appendChild(s)

        container.value.innerHTML = `<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5247553446852481"
     data-ad-slot="8319897006"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>`

        const r = document.createElement('script')
        r.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
        container.value.appendChild(r)
    }
}

onMounted(() => {
    init()
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
