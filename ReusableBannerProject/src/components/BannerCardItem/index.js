// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {BannerDetail} = props
  const {headerText, description, className} = BannerDetail

  return (
    <li className={`${className}`}>
      <div className="content-container">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button" className="show-more-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
