<template>
  <div class="channels__container">

    <h2 class="ui inverted center aligned header">Grupper <i class="add square icon add__channel" @click="openChannelModal"></i></h2>
    <div class="ui raised padded segment channels__list">
      <ul>
        <li
          class="channels__item"
          v-for="channel in channels"
          :key="channel.id"
          :class="{'is_active': setChannelActive(channel)}"
          @click="changeChannel(channel)">{{ channel.name }}</li>
      </ul>
    </div>

    <!-- Modal -->

    <div class="ui basic modal" id="channelModal">
      <div class="ui icon header">
        Ny Gruppe
      </div>
      <div class="content">
        <div class="ui inverted form" :class="{'error' : hasErrors}">

          <div class="field">
            <label for="new_channel">Navngiv gruppe</label>
            <input type="text" name="new_channel" v-model="new_channel" id="new_channel" />
          </div>

          <div class="ui error message" v-if="hasErrors">
            <p v-for="error in errors">
              {{ error }}
            </p>
          </div>

        </div>
      </div>
      <div class="actions">
        <div class="ui red cancel inverted button">
          <i class="remove icon"></i> Annuller
        </div>
        <div class="ui green ok cancel inverted button" @click="addChannel">
          <i class="checkmark icon"></i> Accepter
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'Channels',
  data() {
    return {
      channels: [],
      channelsRef: firebase.database().ref('channels'),
      new_channel: '',
      errors: [],
      firstLoad: true
    }
  },
  computed: {
    ...mapGetters(['currentChannel']),
    hasErrors() {
      return this.errors.length > 0
    }
  },
  mounted() {
    this.addListeners()
  },
  methods: {
    addListeners() {
      this.channelsRef.on('child_added', snap => {
        this.channels.push(snap.val())

        if(this.firstLoad && this.channels.length > 0) {
          this.$store.dispatch("setCurrentChannel", this.channels[0])
        }

        this.firstLoad = false

      }) //child event listener
    },
    openChannelModal() {
      $("#channelModal").modal('show')
    },
    addChannel() {
      this.errors = []
      let key = this.channelsRef.push().key

      let newChannel = { id: key, name: this.new_channel }
      this.channelsRef.child(key).update(newChannel).then(() => {

        this.new_channel = ''

        $("#channelModal").modal('hide')

      }).catch( error => {
        this.errors.push(error.message)
      })
    },
    changeChannel(channel) {
      this.$store.dispatch('setCurrentChannel', channel)
    },
    detachListeners() {
      this.channelsRef.off
    },
    setChannelActive(channel) {
      return channel.id === this.currentChannel.id
    }
  },
  beforeDestroy() {
    this.detachListeners()
  }
}
</script>

<style scoped>

  .channels__list {
    min-height: 100px;
    max-height: 300px!important;
    overflow-y: auto!important;
  }
  .channels__container ul{
    margin: 0;
    padding: 0;
  }
  .channels__item{
    height: 30px;
    margin: 8px;
    list-style: none;
    background-color: #0187FA;
    color: white;
    cursor: pointer;
    line-height: 30px;
    border-radius: 2px;
    padding-left: 12px;
    font-weight: bold;
    font-size: 1.1em;
  }
  .channel__count{
    float:right;
  }
  .is_active{
    background-color: #9740c5;
  }
  .channels__item:hover{
    background-color: #007CD9;
  }
  .add__channel{
    cursor: pointer;
    color: #0187FA;
  }
  .add__channel:hover{
    color: #007CD9;
  }

</style>