<template>
    <router-link class="post-tag" :to="'/tag/'+tag">{{ tag }}</router-link>
</template>

<script>
export default {
    props: ["tag"]
};
</script>

<style lang="stylus">
.post-tag {
    display: inline-flex;
    align-items: center;
    word-break: break-word;
    height: 25px;
    font-size: 16px;
    padding: 0 15px;
    margin-left 10px;
    border-radius: 5px;
    font-weight: 300;
    text-align: left;
    box-sizing: border-box;
    transition: background-color 0.3s;
    color: $darkTextColor;
    border: 1px solid $darkBorderColor;
    text-decoration: none;
    transition: all 0.5s;
}

@media screen and (max-width: 768px) {
    .post-tag {
        font-size: 14px;
        padding: 3px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
</style>
