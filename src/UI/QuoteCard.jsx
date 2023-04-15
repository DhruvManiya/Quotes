import React, { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import Lodder from "./Lodder";

const QuoteCard = ({ quote, initBookmar, setBookmark }) => {
  const [bookmarkIcon, setBookmarkIcon] = useState(false);
  const setBookmarks = async () => {
    console.log(bookmarkIcon);
    setBookmarkIcon(!bookmarkIcon);
    if (bookmarkIcon) {
      localStorage.removeItem(quote._id);
    } else localStorage.setItem(quote._id, quote._id);
    if (initBookmar) {
      localStorage.removeItem(quote._id);
    }
  };

  useEffect(() => {
    return setBookmarkIcon(false);
  }, [quote]);

  return (
    <>
      {quote !== null ? (
        <div className="w-full py-[3rem] bg-[#F3CB89] rounded-[1rem] shadow-xl">
          <p className="flex justify-center md:text-[1.75rem] text-[1.5rem] md:px-[15%] px-[7%]">
            {quote.content}
          </p>
          <div className="w-full pt-[3rem] flex">
            <p className="flex justify-center text-[1.2rem] font-[900] md:w-[90%] w-[80%] md:pl-[10%] pl-[20%]">
              -{quote.author}
            </p>
            <i
              className="md:w-[10%] w-[20%]"
              onClick={() => {
                setBookmark();
                setBookmarks();
              }}
            >
              {!bookmarkIcon && !initBookmar ? (
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
