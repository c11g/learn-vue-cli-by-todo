<template>
  <div id="app">
    <nav>
      <button type="button" @click="changeView">changeView</button>
    </nav>
    <component :is="currentView" />
  </div>
</template>

<script>
import TodoList from '@/components/todolist/TodoList';
import Region from '@/components/region/Region';

export default {
  name: 'App',
  components: {
    TodoList,
    Region,
  },
  data(){
    return {
      currentView: 'region',
    };
  },
  methods: {
    changeView(){
      this.currentView = this.currentView === 'todo-list' ? 'region' : 'todo-list';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 50px;
}
</style>
