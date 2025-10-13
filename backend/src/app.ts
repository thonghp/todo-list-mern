import express from 'express'
import taskRouter from '~/routes'
import { connectDb } from './config/db'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
connectDb()
app.use(express.json())
app.use('/api/tasks', taskRouter)

export default app
