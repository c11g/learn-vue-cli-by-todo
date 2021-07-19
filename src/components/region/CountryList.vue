<template>
  <div>
    <table>
      <caption>지역별 국가정보</caption>
      <thead>
        <th scope="col">번호</th>
        <th scope="col">국가명</th>
        <th scope="col">수도</th>
        <th scope="col">지역</th>
      </thead>
      <tbody>
        <tr v-for="{no, name, capital, region} in countriesByRegion" :key="no">
          <td>{{ no }}</td>
          <td>{{ name }}</td>
          <td>{{ capital }}</td>
          <td>{{ region }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CountryList',
  computed: {
    ...mapGetters(['countriesByRegion']),
  },
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
caption {
  margin: 20px 0 5px;
  font-size: 1.2em;
  text-align: left;
}
th {
  background: coral;
  padding: 5px 0;
  color: #fff;
}
td {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  color: #777;
}
</style>