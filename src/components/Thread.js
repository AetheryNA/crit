import Like from '../../public/img/icons/like.svg'

const Thread = ({ postData }) => {
  return (
    <div className="thread">
      <div className="thread__profile flex flex-row items-center">
        { postData.author && (
          postData.author.avatar_url ? 
          <img 
            className='rounded-full'
            src={`/${postData.author.avatar_url}`}
          />
          :
          <img 
            className='rounded-full'
            src='/img/pfp.png'
          />
        )}
        
        <h3> { postData.author && (postData.author.username) } </h3>
      </div>
      <div className="thread__wrap flex">
        <div className="thread__content">
          { postData.image_url ? 
            <img 
              src={`/${postData.image_url}`} 
            />
            :
            ''
          }
          <p> {postData.content} </p>
        </div>
        { postData.author && (
          <div className="thread__social-status">
            <div className="thead__stat flex flex-row items-center">
              <Like />
              <p> 1.0K </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Thread
