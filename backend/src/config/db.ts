import mongoose from 'mongoose'

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTSTRING as string)
    console.log('Database connected')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
