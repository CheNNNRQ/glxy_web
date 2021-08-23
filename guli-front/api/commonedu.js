import request from '@/utils/request'

const a1a=1
export default {
  //分页查询课程评论

  getPageList(page, limit ,courseId ) {
    return request({
      url: `/eduService/comment/getCommentPage/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `/eduService/comment/addComment`,
      method: 'post',
      data: comment
    })
  }
}
