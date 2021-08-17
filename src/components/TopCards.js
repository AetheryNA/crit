import Tag from '../../public/img/icons/tag.svg'

const TopCards = () => {
  return (
    <div className="top-cards flex flex-col">
      <div className="top-cards__header relative">
        <div className="top-cards__header-title">
          <Tag />
          <h3> Top Trending </h3> 
        </div>
      </div>

      <div className="top-cards__card">
        <div className="top-cards__card-profile">
          <a href="/" className="flex flex-row items-center">
            <img 
              src="/img/pfp.png" 
              alt="" 
            />
            <p> Alice Prisma </p>
          </a>
        </div>
        <div className="top-cards__card-content">
          <p>Got my first penta kill! Check out the play!</p>
        </div>
      </div>
      <div className="top-cards__card">
        <div className="top-cards__card-profile">
          <a href="/" className="flex flex-row items-center">
            <img 
              src="/img/pfp.png" 
              alt="" 
            />
            <p> Alice Prisma </p>
          </a>
        </div>
        <div className="top-cards__card-content">
          <p>Got my first penta kill! Check out the play!</p>
        </div>
      </div>
    </div>
  )
}

export default TopCards
