<template>
    <div class="messages">

        <ul class="tab-nav">
            <li :class="{on: tabIndex == 0}" @click="tabIndex = 0">已读消息</li>
            <li :class="{on: tabIndex == 1}" @click="tabIndex = 1">未读消息</li>
        </ul>

        <div class="msg-box" v-show="tabIndex == 0">
            <ul class="list" v-if="list.has_read_messages">
                <li v-for="(item, $index) in list.has_read_messages">
                    <router-link class="user" :to="'/user/' + item.author.loginname">
                        <div class="user-headimg" :style="{backgroundImage: 'url(' + item.author.avatar_url +')'}"></div>
                    </router-link>
                    <div>
                        <div class="name">{{ item.author.loginname }}
                            <time>{{ item.create_at | formatDate }}</time>
                        </div>
                        <div class="topic" v-if="item.type == 'at'">
                            在话题
                            <router-link :to="'/detail/' + item.topic.id">{{ item.topic.title }}</router-link> 中 @了你
                        </div>
                        <div class="topic" v-if="item.type == 'reply'">
                            回复你了的话题
                            <router-link :to="'/detail/' + item.topic.id">{{ item.topic.title }}</router-link>
                        </div>
                        <div class="markdown-body" v-html="item.reply.content"></div>
                    </div>
                    <div class="weidu">
                        <i class="iconfont icon-weidu"></i>
                    </div>
                </li>
            </ul>

            <div class="msg-null" v-if="list.has_read_messages == ''">
                <img src="~assets/null.png">
            </div>
        </div>

        <div class="msg-box" v-show="tabIndex == 1">
            <ul class="list" v-if="list.hasnot_read_messages">
                <li v-for="(item, $index) in list.hasnot_read_messages">
                    <router-link class="user" :to="'/user/' + item.author.loginname">
                        <div class="user-headimg" :style="{backgroundImage: 'url(' + item.author.avatar_url +')'}"></div>
                    </router-link>
                    <div>
                        <div class="name">{{ item.author.loginname }}
                            <time>{{ item.create_at | formatDate }}</time>
                        </div>
                        <div class="topic" v-if="item.type == 'at'">
                            在话题
                            <router-link :to="'/detail/' + item.topic.id">{{ item.topic.title }}</router-link> 中 @了你
                        </div>
                        <div class="topic" v-if="item.type == 'reply'">
                            回复你了的话题
                            <router-link :to="'/detail/' + item.topic.id">{{ item.topic.title }}</router-link>
                        </div>
                        <div class="markdown-body" v-html="item.reply.content"></div>
                    </div>
                    <div class="weidu">
                        <i class="iconfont icon-weidu"></i>
                    </div>
                </li>
            </ul>

            <div class="msg-null" v-if="list.hasnot_read_messages == ''">
                <img src="~assets/null.png">
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                tabIndex: 0
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.dispatch('getMessageInfo')
            })
        },
        computed: mapGetters({ list: 'getMessageInfo' }),
        methods: {

        }
    }

</script>

<style lang="css" scoped>
.tab-nav{
    display:flex;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #fff;
    margin-top:43px;
}
.tab-nav li.on {
    color: #80bd01;
}
.tab-nav li {
    flex:1;
    line-height: 38px;
    text-align: center;
    border-right: 1px solid #eee;
    font-size: 14px;
}

.msg-box .list {
	padding: 0;
	margin: 0
}

.msg-box .list li {
    display: flex;
	position: relative;
	padding: 10px;
	list-style: none;
	border-bottom: 1px solid #eee;
	background: #fff
}

.msg-box .list li .name {
	font-weight: 700;
	line-height: 28px
}

.msg-box .list li .name time {
	padding-left: 5px;
	font-size: 12px;
	font-weight: 400;
	color: #999
}

.msg-box .list li .content {
	padding: 5px 0
}

.msg-box .list li .weidu {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	width: auto;
	text-align: right
}

.msg-box .list li .weidu .iconfont {
	font-size: 60px;
	color: #222
}

.user-headimg {
	width: 38px;
	height: 38px;
	margin-right: 10px;
	border-radius: 50%;
	border: 1px solid #ddd;
	background-size: cover;
	background-color: #eee
}
.msg-box .list li .topic{
    color: #333;
}
.msg-box .list li .topic a{
    color: #80bd01;
}

.markdown-body {
	padding: 5px;
	margin-top: 10px;
	border-radius: 5px;
	background: #eee
}
.markdown-text img{
    width:100%;
}

.msg-null{
    text-align:center;
    margin-top:40px;
}
.msg-null img{
    width:150px;
}
</style>