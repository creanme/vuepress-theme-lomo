<template>
    <div class="blog-tags">
        <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
    </div>
</template>

<script>
import BlogTag from "@theme/components/BlogTag";
export default {
    components: { BlogTag },
    props: ["tags"]
};
</script>
