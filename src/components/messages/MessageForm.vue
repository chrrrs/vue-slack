<template >
  <div class="messages__form">
    <div class="ui inverted form">
      <div class="two fields">
        <div class="field">
          <textarea name="message" id="message" v-model.trim="message" rows="3" placeholder="skriv besked..."></textarea>
        </div>
        <div class="field">
          <button class="ui green button" @click.prevent="sendMessage">send</button>
          <button class="ui labeled icon button" @click="openFileModal"><i class="cloud upload icon"></i>Filer</button>
        </div>
      </div>
    </div>

    <!-- File modal -->
    <file-modal></file-modal>
  </div>
</template>

<script>

import FileModal from './FileModal'
import { mapGetters } from 'vuex'

export default {
  name: 'message-form',
  components: { FileModal },
  data() {
    return {
      message: '',
      errors: []
    }
  },
  computed: {
    ...mapGetters(['currentChannel', 'currentUser', 'isPrivate'])
  },
  methods: {
    sendMessage() {

      if(this.currentChannel !== null) {

        if(this.message.length > 0) {
          this.$parent.getMessageRef().child(this.currentChannel.id).push().set(this.createMessage()).then( () => {

          }).catch( error => {
            this.errors.push(error.message)
          })

          this.message = ''
        }

      }

    },
    createMessage() {
      return {
        content: this.message,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: {
          name: this.currentUser.displayName,
          avatar: this.currentUser.photoURL,
          id: this.currentUser.uid
        }
      }
    },
    uploadFile(file, metadata) {
      if(file === null) return false

      let pathToUpload = this.currentChannel.id
      let ref = this.$parent.getMessageRef()
      let filePath = this.getPath() + '/' + uuidV4() + '.jpg'
    },
    openFileModal() {
      $("#fileModal").modal('show')
    },
    getPath() {
      if(this.isPrivate) {
        return 'chat/private'+this.currentChannel.id
      } else {
        return 'chat/public'
      }
    }
  }
}
</script>

<style scoped>

  .messages__form{
    position: fixed;
    bottom: 0;
    background-color:#232323;
    padding: 10px;
    padding-top: 20px;
    height: 210px;
    left: 300px;
    right: 0;
  }
  .messages__form.big{
    height: 350px;
  }
  .shortcut{
    color:white;
  }

</style>
