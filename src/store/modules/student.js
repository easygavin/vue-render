import service from '../services';

// state
const state = {
  loading: false, // 是否正在加载
  students: [], // 学生列表
  params: null, // 查询参数
  student: {
    id: null,
    detail: {
      id: 0,
      name: '',
      age: 0,
      country: ''
    }
  }
};

// getters
const getters = {

  /**
   * 学生人数
   * @param state
   * @param getters
   * @returns {Number}
   */
  studentCount: (state, getters) => {
    return state.students.length;
  },

  /**
   * 获取学生列表
   * @param state
   * @param getters
   * @returns {Array}
   */
  students: (state, getters) => {
    return state.students;
  },
};

// actions
const actions = {

  /**
   * 获取学生列表
   * @param ctx
   * @param params
   */
  getStudents: (ctx, params) => {
    ctx.commit('FETCH_STUDENTS', {params});
    service.getStudents(params).then(data => ctx.commit('RECEIVE_STUDENTS', {data}));
  }
};

// mutations
const mutations = {

  /**
   * 获取学生列表
   * @param state
   * @param params
   * @constructor
   */
  FETCH_STUDENTS: (state, {params}) => {
    state.loading = true;
    state.params = params;
  },

  /**
   * 接受学生列表
   * @param state
   * @param data
   * @constructor
   */
  RECEIVE_STUDENTS: (state, {data}) => {
    state.loading = false;
    state.students = data;
  },

  /**
   * 获取学生详情
   * @param state
   * @param id
   * @constructor
   */
  FETCH_STUDENT: (state, {id}) => {
    state.loading = true;
    state.student.id = id;
  },

  /**
   * 接受学生详情
   * @param state
   * @param data
   * @constructor
   */
  RECEIVE_STUDENT: (state, {data}) => {
    state.loading = false;
    state.student.detail = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}