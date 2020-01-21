<template>
    <div class="post-tags">
        <PostTag v-for="tag in tags" :key="tag.name" :tag="tag" />
    </div>
</template>

<script>
import PostTag from "@theme/components/PostTag";
export default {
    components: { PostTag },
    props: ["tags"]
};
</script>
