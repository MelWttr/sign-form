export interface FormValues {
  name: string,
  nickname: string,
  email: string,
  sex: 'male' | 'female' | '',
  password: string,
  repeatPassword: string,
}