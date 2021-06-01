import React from 'react'
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export default function List({list, onDel}) {
  return (
    <>
      <div className="Container">
        <div>Дата (ДД.ММ.ГГГГ)</div>
        <div>Пройдено, км</div>
        <div>Действия</div>
      </div>
      <div className="Container Data">
        {list.map((day, index) => (
          <div className="Row" key={index}>
            <div>{day.date.toLocaleString("ru", options)}</div>
            <div>{day.distance}</div>
            <div>
              📝
              <span onClick={() => onDel(index)}>✖</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
      .red {
        color: red;
      }
      .Data {
        margin-top: 2px;
        border: 1px solid #333;
        border-radius: 10px;
        padding: 13px 0;
        box-sizing: border-box;
        width: 414px;
      }
      .Row {
        padding: 5px 0;
        display: flex;
        width: 100%;
        align-content: center;
        justify-content: space-around;
      }
      span {
        margin-left: 8px;
        cursor: pointer;
      }
      span:hover {
        color: red;
      }
    `}</style>
    </>
  );
}
