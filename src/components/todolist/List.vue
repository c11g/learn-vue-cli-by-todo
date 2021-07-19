<template>
  <ul>
    <li
      v-for="(todo, index) in todolist"
      :key="index"
      :class="getCheckedClass(todo.done)"
    >
      <a
        role="button"
        @click="toggle(todo.id)"
      >
        {{ todo.text }}
      </a>
      <button
        type="button"
        @click="deleteTodo(todo.id)"
      >
        X
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CONSTANT from '@/constant';


export default {
  name: 'list',
  computed: {
    ...mapState(['todolist']),
  },
  methods: {
    getCheckedClass(done){
      return done ? { checked: true } : { checked: false };
    },
    ...mapActions({
      toggle: CONSTANT.DONE_TOGGLE,
      deleteTodo: CONSTANT.DELETE_TODO,
    })
  },
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