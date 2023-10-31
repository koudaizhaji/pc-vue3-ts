import Doughnut from './doughnut.vue'

export interface DoughnutProps {
  loading: boolean
  data: Array<{
    name: string
    value: number
  }>
  title: string
}

export { Doughnut }

export default {
  Doughnut
}
