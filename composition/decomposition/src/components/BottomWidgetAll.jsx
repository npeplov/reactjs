import React from 'react'
import BottomWidget from './BottomWidget'

export default function BottomWidgetAll(props) {
  return (
    <div className="BottomWidgets">
      <BottomWidget name="Weather" {...props}>
        <img src="weather.png" alt="" />
        <span>+17°</span>
      </BottomWidget>

      <BottomWidget name="Map" country="Tirol, Austria" {...props} />

      <BottomWidget name="Broadcasting" icon={"./32x32.png"} {...props} />

      <BottomWidget name="Frequented" {...props} />

      <BottomWidget name="TV program" {...props} />
    </div>
  );
}
