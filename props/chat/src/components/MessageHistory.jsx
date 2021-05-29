import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list }) {
  return (
    list.map((item) => {
      if (item.type === 'response')
        return <Response from={item.from} message={item} key={item.id}/>
      if (item.type === 'message')
        return <Message from={item.from} message={item} key={item.id} />
      return <Typing from={item.from} message={item} key={item.id}/>
    }
  ))
}
// зачем 3 компонента с одинаковым html
