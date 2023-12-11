const users = () => import('@/views/weixin/wxapp/users/users.vue')
export default {
  path: '/weixin/wxapp/users',
  name: 'weixin-wxapp-users',
  component: users,
  children: []
}
