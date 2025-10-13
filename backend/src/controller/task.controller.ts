import express, { Request, Response } from 'express'
import Task from '~/model/Task'

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    console.error('error getAllTasks ', error)
    res.status(500).json({
      message: 'lỗi hệ thống'
    })
  }
}

const createTask = async (req: Request, res: Response) => {
  res.status(201).json({
    message: 'create'
  })
}

const updateTask = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'update'
  })
}

const deleteTask = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'delete'
  })
}

export { getAllTasks, createTask, updateTask, deleteTask }
