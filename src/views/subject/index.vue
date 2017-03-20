<template>
  <div>
    <h1>subjects 数量：{{subjectCount}}</h1>

    <ul class="subject-list">
      <li v-for="item in subjects">
        <a href="javascript:void(0)" @click="toStudents(item)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

  /**
   * 获取课程列表
   * @param store
   */
  function getSubjects(store) {
    store.dispatch('getSubjects', {offset: 0, limit: 10});
  }

  export default {
    // on the server, only fetch the item itself
    preFetch: getSubjects,
    beforeMount () {
      getSubjects(this.$store)
    },
    computed: {
      subjects() {
        return this.$store.getters.subjects;
      },
      subjectCount() {
        return this.$store.getters.subjectCount;
      }
    },
    methods: {
      toStudents(item) {
        this.$store.commit('FOCUS_SUBJECT', {item});
        this.$router.push('student');
      }
    }
  }
</script>
<style lang="stylus">
  .subject-list
    background-color #f5f4f4
    margin-top 10px
    li
      list-style none
      height 50px
      line-height 50px
      border-bottom 1px #e1e1e1 solid
      font-size 20px
    a
     display inline-block
     padding 0 0.2rem
     height 100%
     width 100%
</style>