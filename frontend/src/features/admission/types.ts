export interface ChartDataPoint {
  category: string
  value: number
}

export interface ReadmittedStudentsResponse {
  title: string
  chart_type: string
  data: ChartDataPoint[]
}