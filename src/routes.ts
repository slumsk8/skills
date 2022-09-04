import { prisma } from './prisma';
import { Router } from 'express'

export const routes = Router()

routes.get('/cards', async (req,res) => {
    const card = await prisma.card.findMany()   

    return res.status(200).json(card)
})

routes.post('/cards', async (req, res) => {
    const { name, description, pic, like } = req.body

    const card = await prisma.card.create({
        data: {
            name,
            description,
            pic,
            like
        }
    })

    return res.status(201).json(card)
})

routes.put('/cards/:id', async (req,res) => {
    const { id } = req.params
    const { name, description, pic, like } = req.body

    const card = await prisma.card.update({
        data: {
            name,
            description,
            pic,
            like
        },
        where: {
            id
        }
    })

    return res.status(201).json(card)
})