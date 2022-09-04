//arquivo que uso para acessar o banco de dados através do prisma
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    //loga no console todas as queries realizadas pelo prisma no banco de dados
    log: ['query']
})