import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient




export const userValidator = (user, partial =  null) =>{
    if (partial){
        return userSchema.partial(partial).safeParse(user)
    }
    return userSchema.safeParse(user)
}