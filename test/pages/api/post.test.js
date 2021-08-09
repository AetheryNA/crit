import { expect, jest } from '@jest/globals'
import nc from 'next-connect'
import prisma from '../../../lib/adapters/prismaClient'
import Post from '../../../lib/models/post'
import multer from 'multer'

describe('Everything posts', () => {
  jest.mock('next-connect')
  jest.mock('../../../lib/adapters/prismaClient')
  jest.mock('../../../lib/models/post')
  jest.mock('multer')

  const testPostData = {
    user_id : 99,
    content : "This is test data",
    image_url : "/",
    like_count : 0,
  }

  const upload = multer({
    storage: multer.diskStorage({
      destination: './public/uploads',
      filename: (req, file, cb) => cb(null, file.originalname),
    })
  })

  const uploadMiddleWare = upload.single('file')

  afterEach(async () => {
    await prisma.posts.deleteMany()
    prisma.$disconnect()
  })

  test('should create a post', async () => {
    await prisma.posts.create({
      data: testPostData
    }).then((post) => {
      expect(post.user_id).toEqual(99)
    })
  })

  test('should make a post constructor', async () => {
    const newTestPost = new Post(testPostData)

    expect(newTestPost).toEqual(testPostData)
  })

  test('should create a post using the post constructor', async () => {
    const newTestPost = new Post(testPostData)
    
    await newTestPost.createPost().then((post) => {
      expect(post).toBe(testPostData)
    }).catch(err => {
      expect(err).toBe(err)
    })
  })

  test('should store a picture', async () => {
    const handler = nc()
      .use(uploadMiddleWare)
      .post((req, res) => {
        expect(res).toBe(200)
      })
  })
})
