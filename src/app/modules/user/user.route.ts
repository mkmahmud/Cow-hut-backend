import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

// Get Singel User
router.get('/:id', userController.getSingelUser)

// Update Singel User
router.patch('/:id', userController.updateSingelUser)

// Delete Singel User
router.delete('/:id', userController.deleteSingelUser)

// Get All Users
router.get('/', userController.getAllUsers)

export const UserRoutes = router
