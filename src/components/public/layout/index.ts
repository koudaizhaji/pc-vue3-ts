import Index from './index.vue'

export interface MenuItemProps {
  children: MenuItemProps[]
  createdAt: string
  icon: string
  id: string | number
  parent_id: string | number
  permission: string | boolean
  sort: number | string
  status: number | string
  title: string
  type: number | string
  updatedAt: string
  url: string
}

export interface MenuProps extends Array<MenuItemProps> {}

export default Index
