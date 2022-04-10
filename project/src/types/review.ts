export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: UserReview
}

type UserReview = {
  id: number
  name: string
}
