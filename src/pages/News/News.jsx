import React, { useEffect, useState } from 'react';
import NewsCard from './newsCard';


const News = () => {
  const [newses, setNewses] = useState([]);
//http://localhost:5000
  useEffect(() => {
    fetch("https://dragon-news-server-chadnee.vercel.app/news")
    .then(res => res.json())
    .then(data => setNewses(data))
  })
    return (
        <div>
            {
                newses.map(news => <NewsCard
                key = {news._id}
                news = {news}></NewsCard>  )
            }
        </div>
    );
};

export default News;
