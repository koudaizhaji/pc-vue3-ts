const users = () => import('@/views/base/system/users/users.vue')
export default {
  path: '/base/system/users',
  name: 'base-system-users',
  component: users,
  children: []
}
