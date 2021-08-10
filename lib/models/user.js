import formError from '../errors/formError'
import prisma from '../adapters/prismaClient'
import bcrypt from 'bcrypt'

class User {
  constructor({ avatar_url, username, password, email } = {}) {
    this.avatar_url = avatar_url
    this.username = username,
    this.password = password,
    this.email = email
  }
  
  async create() {
    const saltRounds = 3
    const passedPassword = this.password
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassowrd = await bcrypt.hash(passedPassword, salt)

    await prisma.users.create({
      data: {
        avatar_url: this.avatar_url,
        username: this.username,
        password: hashedPassowrd,
        email: this.email
      }
    }).catch((error) => {
      throw new formError({
        message: `Woopsie something went wrong T.T, The data sent through already exists! Please change: (${error.meta.target})`,
        target: error.meta.target
      })
    })
  } 
}

export default User
