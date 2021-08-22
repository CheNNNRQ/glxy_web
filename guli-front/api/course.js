import request from '@/utils/request'

export default{
  //课程条件查询分页
  getCourseList(page, limit,searchObj){
    return request({
      url:`/eduService/courseFront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类（一级分类、二级分类）的方法
  getAllSubject(){
    return request({
      url: `/eduService/subject/getAllSubject`,
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(courseId){
    return request({
      url: `/eduService/courseFront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  },
}
