import StackedArea from './stacked-area.vue'
import StackedAreaTotal from './stacked-area-total.vue'

export interface StackedAreaProps {
  loading: boolean
  data: Array<{
    name: string
    data: number[]
  }>
  title: string
  timeLine: string[]
}

export interface StackedAreaTotalProps extends StackedAreaProps {}

export { StackedArea, StackedAreaTotal }

export default {
  StackedArea,
  StackedAreaTotal
}
