import service from './services';
export default {

  /**
   * 获取学生详情
   * @param ctx
   * @param item
   */
  getStudentDetail: (ctx, {item}) => {
    ctx.commit('FETCH_STUDENT', {id: item.id});
    service.getStudent(item).then(data => ctx.commit('RECEIVE_STUDENT', {data}));
  }
}