import request from '@/utils/request'

export default {
  //生成统计数据
  createStaByDay(day){
    return request({
      url:`/staservice/sta/registerCount/${day}`,
      method: 'get'
    })
  },
  //生成统计数据
  getDataSta(searchObj){
    return request({
      url:`/staservice/sta/showData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
      method: 'get'
    })
  },
}
