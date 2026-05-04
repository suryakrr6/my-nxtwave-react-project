const element = (
  // Write your code here.
  <div className='bgcontainer'>
    <h1 className='heading'>Congratulation</h1>
    <div className='inner-box'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <p>Kiran V</p>
      <p className='para2'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
