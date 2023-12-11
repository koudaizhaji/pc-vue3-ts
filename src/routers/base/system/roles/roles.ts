const roles = () => import('@/views/base/system/roles/roles.vue')
export default {
  path: '/base/system/roles',
  name: 'base-system-roles',
  component: roles,
  children: []
}
