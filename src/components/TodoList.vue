<template>
  <div>
    <h1>TODO LIST</h1>
    <InputTodo />
    <List />
  </div>
</template>

<script>
import InputTodo from '@/components/InputTodo';
import List from '@/components/List';

export default {
  name: 'todo-list',
  components: {
    InputTodo,
    List
  }
}
</script>

<style>

</style>