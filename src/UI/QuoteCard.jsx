import React, { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import Lodder from "./Lodder";
import axios from "axios";
const QuoteCard = ({ quoteChange, currentTag }) => {
  const [bookmark, setBookmark] = useState(false);
  const [quote, setQuote] = useState(null);

  const fatching = async () => {
    setQuote(null);
    try {
      if (currentTag === null) {
        const res = await axios.get("https://api.quotable.io/random");
        setQuote(res.data);
      } else {
        const res = await axios.get(
          `https://api.quotable.io/random?tags=${currentTag}`
        );
        setQuote(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fatching();
  }, [quoteChange, currentTag]);

  return (
    <>
      {quote !== null ? (
        <div className="w-full py-[3rem] bg-[#F3CB89] rounded-[1rem] shadow-xl">
          <p className="flex justify-center text-[1.75rem] px-[15%]">
            {quote.content}
          </p>
          <div className="w-full pt-[3rem] flex">
            <p className="flex justify-center text-[1.2rem] font-[900] w-[90%] pl-[10%]">
              -{quote.author}
            </p>
            <i className="w-[10%]" onClick={() => setBookmark(!bookmark)}>
              {!bookmark ? (
                <BookmarkAddIcon
                  fontSize="large"
                  className="text-[#292929] cursor-pointer"
                />
              ) : (
                <BookmarkRemoveIcon
                  fontSize="large"
                  className="text-[#292929] cursor-pointer"
                />
              )}
            </i>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[20rem]">
          <Lodder />
        </div>
      )}
    </>
  );
};

export default QuoteCard;
