<template>
  <div class="my__modal modal" id="fileModal">
        <!-- <span @click="closeFileModal" class="close__btn">
          <i class="fas fa-times"></i>
        </span> -->
        <h3 class="container">
            Send en fil
        </h3>
        <div class="container">
            <div>
                <div>Valg en fil <em>( jpg, png, 1 mb max )</em></div>
                <form>
                    <div class="form-group">
                        <input class="form-control" type="file" name="file" id="file" @change="addFile">
                    </div>
                </form>

            </div>
        </div>
        <div class="container btn-group" @click="closeFileModal">
            <div class="btn btn-outline-danger">
                Annuller
            </div>
            <div class="btn btn-success" @click.prevent="sendFile">
                Send
                <i class="fas fa-check"></i>
            </div>
        </div>
    </div>
</template>

<script>

import mime from 'mime-types'

export default {
  name: 'file-modal',
  data() {
    return {
      file: null,
      authorized: ['image/jpeg', 'image/png']
    }
  },
  methods: {
    addFile(e) {
      let files = e.target.files
      if(files.length === 1) {
        this.file = files[0]
      }
    },
    sendFile() {
      if(this.file !== null) {
        if(this.isValid(this.file.name)) {
          let metadata = { contentType: mime.lookup(this.file.name)}
          this.$parent.uploadFile(this.file, metadata)
          $("#fileModal").modal('hide')
        }
      }
    },
    isValid(filename) {
      let index = this.authorized.indexOf(mime.lookup(filename))
      return index !== -1
    },
    closeFileModal() {
      $("#fileModal").modal('hide')
    },
    resetForm() {
      console.log("reset form")
      $(".form").trigger('reset')
      this.file = null
    }
  }
}
</script>

<style scoped>
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

  .close__btn {
    float: right;
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    .my__modal {
      width: 100%;
      margin-left: 0;
    }
  }

</style>
