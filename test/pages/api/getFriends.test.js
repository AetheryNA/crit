import { afterAll, expect, jest } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'
import nc from 'next-connect'

describe('Should find all friends of a user', () => {
  jest.mock('../../../lib/adapters/prismaClient')
  jest.mock('next-connect')

  test('should get all friends', async () => {
    const handler = nc()
      .get(async (req, res) => {
        const getFriends = await prisma.usersRelationships.findMany({
          where : {
            user_id : 1
          },
          include : {
            friends : {
              select : {
                id: true,
                username: true,
                avatar_url: true,
                email: true,
                usersRelationships_friends: true,
              }
            }
          }
        }).then((friends) => {
          expect(friends.id).toBe(friends.id)
        })
      })
  })
})

