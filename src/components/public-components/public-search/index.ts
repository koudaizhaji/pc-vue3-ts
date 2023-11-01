import PublicSearch from './index.vue'

export interface PublicSearchInputProps {
  type: 'input'
  label: string
  key: string
}

interface SelectOption {
  value: string | number | boolean
  label: string | number
  disabled?: boolean
}

export interface PublicSearchSelectOneProps {
  type: 'selectOne' | 'select-one'
  label: string
  key: string
  options: SelectOption[]
  loading?: boolean
}

export interface PublicSearchSelectMoreProps {
  type: 'selectMore' | 'select-more'
  label: string
  key: string
  options: SelectOption[]
  loading?: boolean
}

export interface PublicSearchProps {
  config: Array<PublicSearchInputProps | PublicSearchSelectOneProps | PublicSearchSelectMoreProps>
}

export default PublicSearch
