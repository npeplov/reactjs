/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import moment from "moment";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function withHOC(Component) {
  return function hocedComponent(props) {
      const now = new Date(), date = new Date(props.date);
      const hrs = ((now - date) / 1000 / 60 / 60).toFixed(1);
      let result;

      if (hrs > 1) result = "5 часов назад";
      if (hrs > 24) result = `${(hrs / 24).toFixed()} дней назад`;
      if (hrs < 1) result = "12 минут назад";
      
    return (
      <Component date={result}/>
    )
  }
}

const DateTimePretty = withHOC(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date}/>
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item, ind) => (
    <Video
      url={item.url}
      date={item.date}
      key={ind}
    />
  ));
}

export default function Main() {
  console.log('rendering...');
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: moment(new Date())
        .subtract(30, "minutes")
        .format("YYYY-MM-DD HH:mm:ss")
        .toString(),
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: moment(new Date())
        .subtract(90, "minutes")
        .format("YYYY-MM-DD HH:mm:ss")
        .toString(),
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: moment(new Date())
        .subtract(25, "hours")
        .format("YYYY-MM-DD HH:mm:ss")
        .toString(),
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2021-01-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2021-01-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2021-06-02 05:24:00'
    },
  ]);

  return (
    <>
      <VideoList list={list} />
    </>
  );
}
