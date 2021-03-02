import axios from 'axios'

export const post = <T>(data: any) => (
  axios.post<T>('https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback', data)
)