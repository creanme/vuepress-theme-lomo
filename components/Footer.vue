<template>
    <footer class="footer" v-if="internetContentProvider">
        <a class="internet-content-provider" :href="internetContentProvider.url">
            {{internetContentProvider.provider}}
        </a>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            internetContentProvider: {}
        }
    },
    created(){
        this.$set(this, 'internetContentProvider', this.$themeConfig && this.$themeConfig && this.$themeConfig.internetContentProvider)
    }
};
</script>

<style lang="stylus" scoped>
.footer {
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 15px 32px;
}

@media (max-width: $MQMobile) {
    .footer {
        height: 100px;
        flex-direction: column;
    }
}
</style>
