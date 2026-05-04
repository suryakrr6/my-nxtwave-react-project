const Notification = props => {
  //  Write your code here.
  const {className, colorText, symbolsurl} = props
  return (
    <div className={`bar ${className}`}>
      <img src={symbolsurl} className='symbol-icon' />
      <p className='text'>{colorText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='outercon'>
    <h1>Notification</h1>
    <Notification
      className='card1'
      symbolsurl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      colorText='Information Message'
    />
    <Notification
      className='card2'
      symbolsurl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      colorText='Success Message'
    />
    <Notification
      className='card3'
      symbolsurl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      colorText='Warning Message'
    />
    <Notification
      className='card4'
      symbolsurl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      colorText='Error Message'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
