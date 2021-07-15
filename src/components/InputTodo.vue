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
import eventBus from '@/components/EventBus';

export default {
  name: 'input-todo',
  data(){
    return {
      input: '',
    }
  },
  methods: {
    updateInput(){
      if(!this.input) return;
      eventBus.$emit('add-todo', this.input);
      this.input = '';
    }
  }
}
</script>

<style>

</style>