import React, { useEffect, useState } from "react";
import QuoteCard from "../UI/QuoteCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Lodder from "../UI/Lodder";

const Bookmarks = () => {
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState(new Set());
  const [bookmarkedData, setBookmarkedData] = useState(new Set());
  const [bookmarkIcon, setBookmarkIcon] = useState(true);

  useEffect(() => {
    getBookmark();
  }, [bookmarkIcon]);
  useEffect(() => {
    getQuotes();
  }, [bookmarkedData]);

  const getBookmark = () => {
    setBookmarkedData(new Set());
    for (let i = 0; i < localStorage.length; i++) {
      setBookmarkedData((pre) => new Set(pre).add(localStorage.key(i)));
    }
  };

  const getQuotes = async () => {
    setBookmarkedQuotes(new Set());
    for (let id of bookmarkedData) {
      try {
        const res = await axios.get(`https://api.quotable.io/quotes/${id}`);
        setBookmarkedQuotes((pre) => new Set(pre).add(res.data));
      } catch (e) {
        console.log(e);
      }
    }
  };
  const setBookmark = async () => {
    setBookmarkIcon(!bookmarkIcon);
  };

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[4rem] font-[700] text-[#F3CB89]">
          Your favourites...
        </h1>
        {bookmarkedQuotes.size === 0 ? (
          bookmarkedData.size === 0 ? (
            <h1 className="text-[1.5rem] font-[300] text-[#F3CB89]">
              <Link to="/home">Edit your favourits here</Link>
            </h1>
          ) : (
            <Lodder />
          )
        ) : (
          [...bookmarkedQuotes].map((bookmarkedQuote) => (
            <div className="w-[50%] my-8">
              <QuoteCard
                quote={bookmarkedQuote}
                initBookmar={true}
                setBookmark={setBookmark}
              />
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Bookmarks;
