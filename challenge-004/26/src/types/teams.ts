export interface Team {
  name: string
  members: Member[]
  spots: number
}

export interface Member {
  name: string
  email: string
  status: string
}
