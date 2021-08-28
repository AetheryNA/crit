import { useState } from 'react'
import Like from '../../public/img/icons/like.svg'

const PostItem = ({ postItems }) => {
  const [postState, setPostState] = useState(postItems)

  const postedItem = postState.map((post, index) => {
    const userData = post.author

    return(
      <div className="post-item" key={index}>
        <div className="post-item__profile flex items-center overflow-hidden">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={userData.avatar_url === '' ? "/img/pfp.png" : `/${userData.avatar_url}`}
          />
          <a className="ml-3"> {userData.username} </a>
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
      </div>
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
