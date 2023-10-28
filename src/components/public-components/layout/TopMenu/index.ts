import TopMenu from './index.vue'

export interface TopMenuItemProps {
  id: string
  name: string
  icon: string
}

export interface TopMenuProps extends Array<TopMenuItemProps> {}

export default TopMenu
