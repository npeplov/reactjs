import React from 'react';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="/">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} 
                title={props.views}
                frameBorder="0" 
                allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

function withHOC(Component) {
  return function (props) {
      if (props.views < 100) return (<Popular><Component {...props} /></Popular>);
      else if (props.views > 1000) return (<New><Component {...props} /></New>);
      return <Component {...props} />;
  };
}

const PopVideo = withHOC(Video);
const PopArticle = withHOC(Article);

function List(props) {
    return props.list.map((item, index) => {

        switch (item.type) {
            case 'video':
                return (
                    <PopVideo {...item} key={index}/>
                );

            case 'article':
                return (
                    <PopArticle {...item} key={index}/>
                );
            default:
                return null;
        }
    });
};



export default function App() {

    const list = [
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные вести с полей без смс и регистрации...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были рассекречены малдером и скалли!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ];

    return (
        <List list={list} />
    );
}