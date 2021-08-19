import { useState } from 'react'
import Like from '../../public/img/icons/like.svg'
import Link from 'next/link'

const PostItem = ({ postItems }) => {
  const [postState, setPostState] = useState(postItems)

  const postedItem = postState.map((post, index) => {
    const userData = post.author

    return(
      <Link href={`/post/${post.post_id}`} key={index}>
        <article className="post-item flex flex-col">
          <div className="post-item__profile flex items-center overflow-hidden">
            <img
              className="h-8 w-8 rounded-full"
              src={userData.avatar_url === '' ? "/img/pfp.png" : userData.avatar_url}
            />
            <Link href={`/profile/user/${userData.id}`}>
              <a className="ml-3 z-50" href={`/profile/user/${userData.id}`}> {userData.username} </a>
            </Link>
          </div>

          <div className="post-item__content mt-4 mb-2">
            {post.image_url === "" ? 
              ""
              :
              <div className="post-item__image mb-6">
                <img className="mx-auto" src={post.image_url} />  
              </div>
            }
            <p>
              {post.content}
            </p>
            <div className="post-item__social-status flex justify-end mt-6">
              <div className="post-item__svg">
                <Like />
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  })

  return (
    <>
      {!postItems.length == 0 ? 
        postedItem :
        <div>
          <p> Couldn't find anything! </p>
        </div>
      }
    </>
  )
}

export default PostItem
