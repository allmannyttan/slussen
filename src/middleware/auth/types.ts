export interface User {
  id: number
  username: string
  locked: boolean
  disabled: boolean
  passwordHash: string
  salt: string
  failedLoginAttempts: number
}

export interface UserToken {
  sub: string
  username: string
}

export interface PasswordAndHash {
  password: string
  salt: string
}
