import request from '@/utils/request'

// 获取没有删除的标签
export function getTagList(){
  return request({
    url: '/tag/tagList',
    method: 'get',
    headers: {
      isToken: false
    }
  })
}
