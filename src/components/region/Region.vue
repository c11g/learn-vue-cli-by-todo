<template>
  <div>
    <region-buttons />
    <country-list />
  </div>
</template>

<script>
import RegionButtons from '@/components/region/RegionButtons';
import CountryList from '@/components/region/CountryList';

export default {
  name: 'Region',
  components: {
    RegionButtons,
    CountryList,
  },
}
</script>

<style>

</style>
