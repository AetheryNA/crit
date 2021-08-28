import { afterAll, expect, jest } from '@jest/globals'
import prisma from '../../../lib/adapters/prismaClient'

describe('Should get posts from users', () => {
  test('should retrieve the right user', async() => {
    const users = await prisma.users.findMany({
      include : {
        posts : {
          select : {
            author : true,
            content : true,
            post_id : true,
            user_id : true,
            image_url : true,
          }
        }
      },
      where : {
        id : 1
      }
    })

    expect(users[0].id).toBe(1);
  })

  test('should retrieve the posts from the current user', async() => {
    const users = await prisma.users.findMany({
      include : {
        posts : {
          select : {
            author : true,
            content : true,
            post_id : true,
            user_id : true,
            image_url : true,
          }
        }
      },
      where : {
        id : 1
      }
    })

    expect(users[0].posts).toBeDefined();
  })
})
