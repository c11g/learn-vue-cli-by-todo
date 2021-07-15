<template>
  <ul>
    <li
      v-for="(todo, index) in todolist"
      :key="index"
      :class="getCheckedClass(todo.done)"
    >
      <a
        role="button"
        @click="toggle(todo)"
      >
        {{ todo.text }}
      </a>
      <button
        type="button"
        @click="deleteTodo(todo)"
      >
        X
      </button>
    </li>
  </ul>
</template>

<script>
import eventBus from '@/components/EventBus.vue';

export default {
  name: 'list',
  data(){
    return {
      todolist: [
        { text: "영화보기", done: false },
        { text: "주말 산책", done: true },
        { text: "ES6 학습", done: false },
        { text: "잠실 야구장", done: false },
      ]
    }
  },
  methods: {
    toggle(todo){
      todo.done = !todo.done;
    },
    deleteTodo(aTodo){
      this.todolist = this.todolist.filter(todo => todo !== aTodo);
    },
    getCheckedClass(done){
      return done ? { checked: true } : { checked: false };
    },
    addTodo(value){
      this.todolist.push({text: value, done: false})
    }
  },
  created: function(){
    eventBus.$on('add-todo', this.addTodo);
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
li.checked {
  text-decoration: line-through;
}
button {
  margin-left: 10px;
}
</style>