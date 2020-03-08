<template>
    <div id="vuepress-theme-blog__post-layout">
        <div class="vuepress-blog-theme-content">
            <Content />
            <Newsletter v-if="$service.email.enabled" />
            <hr />
            <div class="date-tag-wrap">
                <div v-if="$page.frontmatter.date" class="ui-post-date">
                    <ClockIcon />
                    <span>{{ resolvePostDate($page.frontmatter.date) }}</span>
                </div>
                <PostTags :tags="$page.frontmatter.tags" />
            </div>
        </div>
        <Toc />
    </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";
import PostTags from "@theme/components/PostTags";
import dayjs from "dayjs";
import { NavigationIcon, ClockIcon } from "vue-feather-icons";
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
    components: {
        Toc,
        Comment,
        Newsletter: () => import("@theme/components/Newsletter.vue"),
        PostTags,
        NavigationIcon,
        ClockIcon
    },
    methods: {
        resolvePostDate(date) {
            return dayjs(date).format(
                this.$themeConfig.dateFormat || "ddd MMM DD YYYY"
            );
        }
    }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.vuepress-blog-theme-content {
    @extend $wrapper;
    font-size: 18px;
    letter-spacing: 0px;
    color: $textColor;
    position: relative;

    @media (min-width: $MQNarrow) {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07);
    }
}

.date-tag-wrap {
    display: flex;
    justify-content: space-between;

    .ui-post-date {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: rgba($darkTextColor, 0.54);
        font-weight: 200;

        svg {
            margin-right: 5px;
            width: 14px;
            height: 14px;
        }
    }
}
</style>
