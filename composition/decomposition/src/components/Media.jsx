import React from 'react'
import Icon from './Common/Icon'
import Time from './Common/Time'

export default function Media({data}) {
  console.log(data);
  return (
    <div className="Media">
      <h5>Now in media</h5>
      <ul>
        {data.map((item) => 
        <li>
          <Icon src={item.icon}/>
          <Time time={item.time}/>
          {item.title}
        </li>)}
      </ul>
    </div>
  )
}
