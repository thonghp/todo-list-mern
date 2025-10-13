import mongoose, { Schema, InferSchemaType, Types } from 'mongoose'

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['active', 'complete'],
      default: 'active'
    },
    completeAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
)

const Task = mongoose.model('Task', taskSchema)
export type TaskType = InferSchemaType<typeof taskSchema> & {
  _id: Types.ObjectId
}

export default Task
