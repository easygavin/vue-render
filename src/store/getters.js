export default {
  /**
   * 获取课程列表
   * @param state
   * @param getters
   * @returns {null|*}
   */
  subjects: (state, getters) => {
    return state.subject.subjects
  },
}