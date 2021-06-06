import React from 'react'
import {nanoid} from 'nanoid'
import Icon from './Common/Icon';
import Time from './Common/Time';
import Channel from './BottomWidgets/Channel';
import Subcategory from './BottomWidgets/Subcategory';

export default function BottomWidget(props) {
  const {name, country, data, icon} = props;

  const link = '/';

  return (
    <div className={props.name.split(' ').join('')}>
      <header>
        <a href={link}><h5>{name}{country && ` of ${country}`}</h5></a>
      </header>
      <div>
        {props.children}
        <ul>
          {data && (data[name].map((item) => 
            <li key={nanoid()}>
              <Icon src={icon}/>
              <Time time={item.time}/>
              {item.title}
              <Channel channel={item.channel}/>
              <Subcategory subcategory={item.subcategory}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
