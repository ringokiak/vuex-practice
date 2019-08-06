<template>
  <div>
    <button @click="redFun(3)">-3</button>
    <button @click="redFun(1)">-</button>
    <span class="mid">{{ countToCn }}</span>
    <button @click="addFun(1)">+</button>
    <button @click="addFun(3)">+3</button>
    <!-- <div style="marginTop:30px;">getter 转换正负：{{ countToCn }}</div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({
      countToCn: "countToCn"
    })
  },
  methods: {
    ...mapActions({
      addFun: "add_count",
      redFun: "reduct_count"
    })
  }
};
</script>

<style scoped>
.mid {
  margin: 0 30px;
}
</style>
