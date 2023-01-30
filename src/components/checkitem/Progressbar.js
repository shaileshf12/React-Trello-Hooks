import React from 'react'

function Progressbar(props) {

  const outerStyle = {
    width : "15rem",
    height : "0.8rem",
    border: "1px solid black",
    borderRadius: "0.5rem"
  }

  const innerStyle = {
    width : "0%",
    height : "0.8rem",
    backgroundColor : "green",
    borderRadius: "0.5rem"
  }

  const completedItems = props.checkItems.reduce((acc, item)=>{
    if(item.state==='complete')
    {
      return acc+1;
    }
    return acc
  }, 0)

  const fill_length = completedItems*100/(props.checkItems.length || 1)
  innerStyle.width = fill_length+"%"

  return (
    <div>
      {Math.round(fill_length)+'%'}
      <div className='progressbar-outer' style={outerStyle}>
        <div className='progressbar-inner' style={innerStyle}>
        </div>
    </div>
    </div>
  )
}

export default Progressbar