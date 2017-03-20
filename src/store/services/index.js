export default {

  /**
   * 获取课程列表
   * @param params
   * @returns {Promise}
   */
  getSubjects(params) {

    let data = [
      {id: 1, name: '语文'},
      {id: 2, name: '数学'},
      {id: 3, name: '英语'}
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  },


  /**
   * 获取学生列表
   * @param params
   * @returns {Promise}
   */
  getStudents(params) {
    let data = [
      {id: 1, name: '小蜜'},
      {id: 2, name: '小花'},
      {id: 3, name: '小翠'},
      {id: 4, name: '小草'}
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  },

  /**
   * 获取指定学生
   * @param item
   * @returns {Promise}
   */
  getStudent(item) {
    let data = Object.assign({}, item, {age: 25, country: '中国'});
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
};