import { afterAll, expect, jest } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'

describe('Getting all the posts from the posts table', () => {
  jest.mock('../../../lib/adapters/prismaClient')

  afterAll(() => {
    prisma.$disconnect()
  })

  test('should fetch all posts', async () => {
    const getAllPosts = await prisma.posts.findMany({
      include: {
        author : true
      }
    })

    expect(getAllPosts).toBe(getAllPosts)
  })
})
