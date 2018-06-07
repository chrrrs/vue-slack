<template>
  <div class="channels__container">
    <div class="add__group__btn" @click="openChannelModal">
      <h2>Opret klynge <i class="fas fa-users"></i></h2>
    </div>
    <div class="channels__list container">
      <ul>
        <li
          class="channels__item row"
          v-for="channel in channels"
          :key="channel.id"
          :class="{'is_active': setChannelActive(channel)}"
          @click="changeChannel(channel)">
          <div class="rounded-circle channels__indicator__item">
            <i class="fas fa-users"></i>
          </div>
          <p>{{ channel.name }}</p>
          <div class="text-muted" v-if="getNotification(channel) > 0 && channel.id !== currentChannel.id">
            - {{ getNotification(channel) }}
          </div>
        </li>
      </ul>
    </div>

    <!-- Modal -->

    <div class="my__modal modal" id="channelModal">
      <div class="container">
        <div class="form-group" :class="{'error' : hasErrors}">

          <div>
            <label for="new_channel">Navngiv gruppe</label>
            <input class="form-control" type="text" name="new_channel" v-model="new_channel" id="new_channel" @keyup.enter="addChannel"/>
          </div>

          <div class="ui error message" v-if="hasErrors">
            <p v-for="error in errors" :key="error.index">
              {{ error }}
            </p>
          </div>

        </div>
      </div>
      <div class="container btn-group">
        <div class="btn btn-outline-danger" @click="closeChannelModal">
          Annuller
        </div>
        <div class="btn btn-success" @click="addChannel">
          <i class="fas fa-check"></i> Accepter
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import mixin from '../mixins'

export default {
  name: 'Channels',
  data() {
    return {
      channels: [],
      channelsRef: firebase.database().ref('channels'),
      messagesRef: firebase.database().ref('messages'),
      new_channel: '',
      errors: [],
      firstLoad: true,
      notifCount: [],
      channel: null
    }
  },
  mixins: [mixin],
  computed: {
    // Henter data fra Vuex (store.js), henter objekterne currentChannel og isPrivate
    ...mapGetters(['currentChannel', 'isPrivate']),
    hasErrors() {
      return this.errors.length > 0
    }
  },
  watch: {
    isPrivate() {
      if(this.isPrivate) {
        this.resetNotifications()
      }
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
          this.channel = this.channels[0]
        }

        this.firstLoad = false

        // add listener to manage the notifications
        this.addCountListener(snap.key)

      }) //child event listener
    },
    addCountListener(channelId) {
      this.messagesRef.child(channelId).on('value', snap => {
        this.handleNotification(channelId, this.currentChannel.id, this.notifCount, snap)
      })
    },
    getNotification(channel) {
      let notif = 0

      this.notifCount.forEach(el => {
        if(el.id === channel.id) {
          notif = el.notif
        }
      })

      return notif
    },
    openChannelModal() {
      $("#channelModal").modal('show')
    },
    closeChannelModal() {
      $("#channelModal").modal('hide')
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
      this.resetNotifications()
      this.$store.dispatch('setPrivate', false)
      this.$store.dispatch('setCurrentChannel', channel)
      this.channel = channel
    },
    resetNotifications() {
      let index = this.notifCount.findIndex( el => el.id === this.channel.id)

      if(index !== -1 ) {
        this.notifCount[index].total = this.notifCount[index].lastKnownTotal
        this.notifCount[index].notif = 0
      }
    },
    detachListeners() {
      this.channelsRef.off()
      this.channels.forEach(el => {
        this.messagesRef.child(el.id).off()
      })
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
    max-height: 30vh!important;
    overflow-y: auto!important;
  }
  .channels__container ul{
    margin: 0;
    padding: 0;
  }
  .channels__item{
    padding: 8px 0;
    list-style: none;
    color: white;
    cursor: pointer;
    line-height: 30px;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1.1em;
    align-items: center;
  }

  .channels__container .row:hover{
    background: #FFFFFF;
  }

  .channels__item p {
    margin-left: 1.5rem;
    color: #212529;
  }

  .channel__count{
    float:right;
  }

  .add__channel{
    cursor: pointer;
    color: #0187FA;
  }
  .add__channel:hover{
    color: #007CD9;
  }

  .my__modal {
    display: none;
    top: 25vh;
    width: 50%; /*this should be 80% */
    margin: 0 auto;
    height: fit-content;
    background: white;
    border: 1px solid #e2e2e2;
    padding: 2rem 2rem;
    border-radius: .5rem;
    margin-left: 500px; /*change this */
  }

  .add__group__btn {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #2962ff;
    width: 100%;
    cursor: pointer;
  }

  .add__group__btn h2 {
    position: relative;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 10px;
    color: white;
  }

  .channels__indicator__item {
    background: #2962ff;
    padding: 28px 32px;
  }

  @media screen and (max-width: 991px) {
    .my__modal {
      width: 100%;
      margin-left: 0;
    }
  }

</style>
