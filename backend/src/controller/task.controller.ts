import express, { Request, Response } from 'express'
import Task from '~/model/Task'

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch (error) {
    console.error('error getAllTasks ', error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body
    const task = new Task({ title })
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (error) {
    console.error('error createTask ', error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

const updateTask = async (req: Request, res: Response) => {
  try {
    const { title, status, completeAt } = req.body
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, status, completeAt }, { new: true })
    if (!updatedTask) {
      return res.status(404).json({
        message: 'Not found task'
      })
    }
    res.status(200).json(updatedTask)
  } catch (error) {
    console.error('error updateTask ', error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

const deleteTask = async (req: Request, res: Response) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    if (!deleteTask) {
      return res.status(404).json({
        message: 'Not found task'
      })
    }
    res.status(200).json(deleteTask)
  } catch (error) {
    console.error('error deleteTask ', error)
    res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

export { getAllTasks, createTask, updateTask, deleteTask }
