<template>
  <div class="messages__container">
    <div class="messages__content">
      <h2 class="ui inverted center aligned header"> Current Channel</h2>
      <div class="ui segment">
        <div class="ui comments">
          <!-- Single messages -->
          <transition-group tag="div" name="list">
            <span :class="message" v-for="message in messages" :key="message.id">
              <div class="comment comment__container">
                <a class="avatar">
                  <img :src="message.user.avatar"/>
                </a>
                <div class="content" :class="{'comment__self': selfMessage(message.user)}">
                  <a class="author">{{ message.user.name }}</a>
                  <div class="metadata">
                    <span class="date comment__date">{{ message.timestamp | fromNow }}</span>
                  </div>
                  <div class="text">
                    {{ message.content }}
                  </div>
                </div>
              </div>
            </span>
          </transition-group>
          <!-- <single-message :class="message" v-for="message in messages"></single-message> -->

        </div>
      </div>
    </div>

    <!-- message form -->
    <message-form></message-form>

  </div>
</template>

<script>
  import MessageForm from './MessageForm'
  import SingleMessage from './SingleMessage'
  import {mapGetters} from 'vuex'
  import moment from 'moment'

  export default {
    name: 'Messages',
    components: { MessageForm, SingleMessage },
    data() {
      return {
        messagesRef: firebase.database().ref('messages'),
        messages: [],
        channel: null
      }
    },
    computed: {
      ...mapGetters(['currentChannel', 'currentUser'])
    },
    watch: {
      currentChannel() {
        this.messages = []

        this.detachListeners()

        this.addListeners()

        this.channe = this.currentChannel
      }
    },
    methods: {
      addListeners() {
        this.messagesRef.child(this.currentChannel.id).on('child_added', snap => {
          let message = snap.val()
          message['id'] = snap.key
          this.messages.push(message)
        })
      },
      detachListeners() {
        if(this.channel !== null) {
          this.messagesRef.child(this.channel.id).off('child_added')
        }
      },
      selfMessage(user) {
        return user.id === this.currentUser.uid
      }
    },
    filters: {
      fromNow(value) {
        return moment(value).fromNow()
      }
    },
    beforeDestroy() {
      this.detachListeners()
    }
  }
</script>

<style scoped>

  .messages__container{
    position: relative;
    background-color: #2a2a2e;
    padding: 10px 30px 210px 30px;
    margin-left: 300px;
    min-height: 100vh;
  }
  .messages__container .comments{
    font-size: 1.2em;
  }
  .list-enter-active{
    transition: all 0.3s
  }
  .list-enter, .list-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }

  /* Comment css */

  .comment__container pre{
   font-size: 0.9em;
   background: #232323;
   box-shadow: 3px 6px 9px 0px #a2a2a2;
  }
  .comment__self{
   border-left: 10px solid orange;
   padding-left: 8px;
  }
  .comment__image{
   min-height: 100px;
   margin-top: 16px;
  }
  .comment__date{
   color: #767676;
  }

</style>
