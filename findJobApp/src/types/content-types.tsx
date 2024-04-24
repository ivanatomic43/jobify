export type ShowJobDto = {
  id: number,
  name: string,
  description: string,
  salary: number,
  imageUrl: string,
  companyName: string
}
export type UserProfile = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
export type UserCredentials = {
  email: string,
  password: string
}

export enum ContentType {
  job = 'tip',
}
