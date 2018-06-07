<template >
  <div class="messages__form">
    <div class="form-group container">
      <div class="row container message__form__container">
        <div class="col-sm-8 input-group">
          <textarea class="form-control" name="message" id="message" v-model.trim="message" rows="3" placeholder="skriv besked..."></textarea>
        </div>
        <div class="col-sm-4 btn-group">
          <button class="btn btn-lg btn__send" @click.prevent="sendMessage">send</button>
          <button class="btn btn-lg" @click="openFileModal" :class="{'disabled': uploadState == 'uploading'}"><i class="far fa-file"></i></button>
        </div>
      </div>
    </div>

    <!-- File modal -->
    <file-modal ref="file_modal"></file-modal>
  </div>
</template>

<script>

import FileModal from './FileModal'
import uuidV4 from 'uuid/v4'
import { mapGetters } from 'vuex'

export default {
  name: 'message-form',
  components: { FileModal },
  data() {
    return {
      message: '',
      errors: [],
      storageRef: firebase.storage().ref(),
      uploadTask: null,
      uploadState: null,
      progressPercentage: ''
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
    createMessage(fileUrl = null) {
      let message = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: {
          name: this.currentUser.displayName,
          avatar: this.currentUser.photoURL,
          id: this.currentUser.uid
        }
      }

      if(fileUrl == null) {
        message['content'] = this.message
      } else {
        message['image'] = fileUrl
      }
      return message
    },
    uploadFile(file, metadata) {
      if(file === null) return false

      let pathToUpload = this.currentChannel.id
      let ref = this.$parent.getMessageRef()
      let filePath = this.getPath() + '/' + uuidV4() + '.jpg'

      // file upload
      this.uploadTask = this.storageRef.child(filePath).put(file, metadata)
      this.uploadState = 'uploading'

      this.uploadTask.on('state_changed', snap => {

      }, error => {
        // error
        this.errors.push(error.message)
        this.uploadState = 'error'
        this.uploadTask = null
      }, () => {
        // upload finished
        this.uploadState = 'done'
        this.$refs.file_modal.resetForm()

        // recover file url
        let fileUrl = this.uploadTask.snapshot.downloadURL
        this.sendFileMessage(fileUrl, ref, pathToUpload)

      })
    },
    sendFileMessage(fileUrl, ref, pathToUpload) {

      ref.child(pathToUpload).push().set(this.createMessage(fileUrl))
      .then( () => {
        this.$nextTick(() => {
          $("html, body").scrollTop($(document).height())
        })
      }).catch( error => {
        this.errors.push(error.message)
      })

    },
    openFileModal() {
      $("#fileModal").modal('show')
    },
    getPath() {
      if(this.isPrivate) {
        return 'chat/private/' + this.currentChannel.id
      } else {
        return 'chat/public'
      }
    }
  },
  beforeDestory() {
    if(this.uploadTask !== null) {
      this.uploadTask.cancel()
      this.uploadTask = null
    }
  }
}
</script>

<style scoped>

  .messages__form{
    position: fixed;
    bottom: 0;
    background-color:#f3f3f3;
    padding: 10px;
    padding-top: 20px;
    height: 210px;
    left: 300px;
    right: 0;
    -webkit-box-shadow: 0px -2px 10px 0px rgba(186,186,186,0.5);
    -moz-box-shadow: 0px -2px 10px 0px rgba(186,186,186,0.5);
    box-shadow: 0px -2px 10px 0px rgba(186,186,186,0.5);
  }
  .messages__form.big{
    height: 350px;
  }
  .shortcut{
    color:white;
  }

  .message__form__container {
    margin: 0 auto;
    padding-top: 1.5rem;
  }

  .btn__send {
    background-color: #2962ff;
    color: white;
    font-weight: 500;
  }

  @media screen and (max-width: 991px) {
    .messages__form {
      left: 0;
    }
  }

</style>
