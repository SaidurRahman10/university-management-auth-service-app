import { Request, Response } from 'express'
import { createUserToDB } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUserToDB(user)
    res.status(200).json({
      status: true,
      message: 'User Create Successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed To Create User',
    })
  }
}

export default {
  createUser,
}
