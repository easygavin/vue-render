<template>
  <div>
    <h1>students 人数：{{studentCount}}</h1>

    <ul class="student-list">
      <li v-for="item in students">
        <a href="javascript:void(0)" @click="getDetail(item)">{{item.name}}</a>
      </li>
    </ul>

    <div v-if="student.detail.name">
      name: {{student.detail.name}}, age: {{student.detail.age}}, country: {{student.detail.country}}
    </div>
  </div>
</template>

<script>

  /**
   * 获取学生列表
   * @param store
   */
  function getStudents(store) {
    store.dispatch('getStudents', {offset: 0, limit: 10});
  }

  import { mapGetters } from 'vuex'
  export default {
    // on the server, only fetch the item itself
    preFetch: getStudents,
    beforeMount () {
      getStudents(this.$store)
    },
    methods: {
      getDetail(item) {
        this.$store.dispatch('getStudentDetail', {item});
      }
    },
    computed: {
      students() {
        return this.$store.state.student.students;
      },
      studentCount() {
        return this.$store.getters.studentCount;
      },
      student() {
        return this.$store.state.student.student;
      }
    }
//    computed: mapGetters([
//      'studentCount',
//      'students'
//    ])
  }
</script>
<style lang="stylus">
  .student-list
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
      text-decoration none
      color #f00
      -webkit-tap-highlight-color rgba(0, 0, 0, 0)
</style>