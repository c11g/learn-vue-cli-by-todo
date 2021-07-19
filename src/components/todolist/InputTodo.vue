<template>
  <div>
    <input
      type="text"
      placeholder="입력 후 엔터"
      v-model.trim="input"
      @keyup.enter="updateInput"
    >
    <button type="button" @click="updateInput">ADD</button>
  </div>
</template>

<script>
import CONSTANT from '@/constant';

export default {
  name: 'input-todo',
  data(){
    return {
      input: '',
    };
  },
  methods: {
    updateInput(){
      if(!this.input) return;
      this.$store.dispatch(CONSTANT.ADD_TODO, {id: Date.now(), text: this.input, done: false});
      this.input = '';
    },
  }
}
</script>

<style>

</style>