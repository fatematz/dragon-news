import React from 'react';
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
        <div className="container bg-gray-200 p-3">
            <div className="flex justify-center items-center gap-4 ">
                <button className="btn bg-red-500 text-white">Latest</button>
                <Marquee pauseOnHover={true}>
                    {

                        news.map(n => {
                        return <span key={n._id} className="mx-10">{n.title}</span>
                        })
                        
                    }
              
            </Marquee>
        </div>
        </div>
    );
};

export default BreakingNews;