import request from '@/utils/request'

export default{
  //讲师分页查询功能
  getPageList(page, limit){
    return request({
      url:`/eduService/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(id){
    return request({
      url:`/eduService/teacherFront/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  },
}
