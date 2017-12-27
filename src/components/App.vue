<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            為什麼你們就是不能加個空格呢？
            <a href="https://github.com/sinchang/pangu-web">
              <img src="https://img.shields.io/badge/madewith%E2%9D%A4%EF%B8%8F-sinchang-brightgreen.svg" class="badge">
            </a>
          </h1>
        </div>
      </div>
    </section>
    <section class="container text-container">
      <div class="columns">
        <div class="column is-two-fifths">
          <textarea class="textarea" v-model="inputText"></textarea>
          <div class="control has-text-centered">
            <button class="button is-primary" :style="{ marginTop: '20px' }" @click="clear">Clear</button>
          </div>
        </div>
        <div class="column">
          <div class="control has-text-centered">
            <button class="button is-primary" @click="transfer">Transfer</button>
          </div>
        </div>
        <div class="column is-two-fifths">
          <textarea class="textarea" readonly v-model="outputText"></textarea>
          <div class="control has-text-centered">
            <button class="button is-primary"
              :style="{ marginTop: '20px' }"
              v-copy="outputText"
              v-copy:callback="handleCopied">Copy</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import pangu from 'pangu'

  export default {
    name: 'app',
    data() {
      return {
        inputText: 'Sephiroth見他這等神情,也是悚然一驚:不知我這Ultimate Destructive Magic是否對付得了?',
        outputText: ''
      };
    },
    methods: {
      transfer() {
        this.outputText = pangu.spacing(this.inputText)
      },
      clear() {
        this.inputText = ''
        this.outputText = ''
      },
      handleCopied(text) {
        alert('Copied')
      }
    },
    mounted() {
      this.transfer()
    }
  }
</script>

<!-- Global CSS -->
<style>
  .text-container {
    padding-top: 40px;
  }

  .text-container textarea {
    height: 400px;
  }
</style>
