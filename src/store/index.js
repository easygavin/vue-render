/**
 * store
 * @author Fisher.Xiong
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import subject from './modules/subject';
import student from './modules/student';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    subject,
    student
  }
});
