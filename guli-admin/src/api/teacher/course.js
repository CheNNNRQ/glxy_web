import request from '@/utils/request' //引入已经封装好的axios 和 拦截器

export default {
  //1、添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: "/eduService/course/addCourseInfo",
      method: 'post',
      data: courseInfo,
    })
  },
  //查询所有讲师
  getAllTeacher() {
    return request({
      url: "/eduService/teacher/findAll",
      method: 'get',
    })
  },
  //根据课程id查询课程基本信息
  getCourseInfoById(courseId) {
    return request({
      url: `/eduService/course/getCourseInfo/${courseId}`,
      method: 'get',
    })
  },
  //修改课程信息
  updateCourseInfo(courseInfoForm) {
    return request({
      url: "/eduService/course/updateCourseInfo",
      method: 'post',
      data: courseInfoForm,
    })
  },
  //课程确认信息显示
  getPublishCourseInfo(courseId) {
    return request({
      url: "/eduService/course/getPublishCourseInfo/" + courseId,
      method: 'get',
    })
  },
  //课程最终发布
  publishCourse(courseId) {
    return request({
      url: "/eduService/course/publishCourse/" + courseId,
      method: 'post',
    })
  },
  //课程列表多条件分页查询
  //page：当前页，limit：每页记录数，teacherQuery：条件对象
  getCourseListPage(page, limit, courseQuery) {
    return request({
      url: `/eduService/course/pageCourseCondition/${page}/${limit}`,
      method: 'post',
      //teacherQuery条件对象，如果后端使用RequestBody获取数据
      //data表示把对象转换成json对象进行传递到接口里
      data: courseQuery
    })
  },

  //课程列表数据查询
  getCourseList() {
    return request({
      url: "/eduService/course/getCourseList",
      method: 'get',
    })
  },
  //删除课程的所有信息
  removeAllById(courseId) {
    return request({
      url: `/eduService/course/removeCourseAll/${courseId}`,
      method: 'delete',
    })
  },


}
