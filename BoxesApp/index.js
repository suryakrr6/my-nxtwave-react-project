const Box = props => {
  //  Write your code here.
  const {size, color, className, text} = props
  const SquareStyle = {
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: color,
    margin: '10px',
    display: 'flex' /* 1. Enable flex on the box */,
    justifyContent: 'center' /* 2. Center text horizontally */,
    alignItems: 'center' /* 3. Center text vertically */,
  }
  return (
    <div style={SquareStyle} className={className}>
      {text}
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='outercontainer'>
    <h1>Box</h1>
    <div className='innercontainer'>
      <Box size={50} color='#fbbf24' text='Small' />
      <Box size={100} color='#38bdf8' text='Medium' />
      <Box size={200} color='#ec4899' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
