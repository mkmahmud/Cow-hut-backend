import express from 'express'
import { cowController } from './cow.controller'

const router = express.Router()

// Get Singel Cow
router.get('/:id', cowController.getSingelCow)

// Create Cow
router.post('/', cowController.createCow)

// Update Cow
router.patch('/:id', cowController.updateSingelCow)

// Delete User
router.delete('/:id', cowController.deleteSingelCow)

// Get All Cow
router.get('/', cowController.getAllCows)

export const CowRoutes = router
