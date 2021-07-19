<template>
  <div>
    <button
      :class="{'button-selected': !currentRegion}"
      @click="changeRegion(null)"
    >
      all
    </button>
    <button
      v-for="region in regions"
      :key="region"
      :class="{'button-selected': currentRegion === region}"
      @click="changeRegion(region)"
    >
      {{ region }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Constant from '@/constant';

export default {
  name: 'RegionButtons',
  computed: {
    ...mapGetters(['regions', 'currentRegion']),
  },
  methods: {
    ...mapActions([Constant.CHANGE_REGION]),
  }
}
</script>

<style scoped>
button {
  padding: 5px;
  background: #fff;
  border: 1px solid;
  color: #999;
}
.button-selected {
  color: #333;
}
button + button {
  margin-left: 5px;
}
</style>