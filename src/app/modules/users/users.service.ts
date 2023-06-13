import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()

  user.id = id
  // default password

  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUserToDB) {
    throw new Error('Failed to Create User')
  }
  return createdUser
}
