<template>
  <div class="messages__container">
    <div class="messages__content">
      <h2 class="ui inverted center aligned header"> Current Channel</h2>
      <div class="ui segment">
        <div class="ui comments">
          <!-- Single messages -->
          <!-- <span v-for="message in messages"></span> -->
          <single-message :class="message" v-for="message in messages"></single-message>
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
          this.messages.push(snap.val())
        })
      },
      detachListeners() {
        if(this.channel !== null) {
          this.messagesRef.child(this.channel.id).off('child_added')
        }
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

</style>
