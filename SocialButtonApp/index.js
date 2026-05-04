const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bgcontainer'>
    <div className='innercon'>
      <h1>Social Buttons</h1>
      <div>
        <Button className='buttoncls1' buttonText="Like"/>
        <Button className='buttoncls2' buttonText="Comment"/>
        <Button className='buttoncls3' buttonText="Share"/>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
