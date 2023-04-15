import React, { useEffect, useState } from "react";
import QuoteCard from "../UI/QuoteCard";
import axios from "axios";

const Home = () => {
    const [quoteChange, setQuoteChange] = useState(true)
    const [tagList, setTagList] = useState([])
    const [currentTag, setCurrentTag] = useState(null)
    const [quote, setQuote] = useState(null);

const fatchingTag = async () => {
    const res = await axios.get('https://api.quotable.io/tags')
    setTagList(res.data)
}

useEffect(() => {fatchingTag()},[])


const fatchingRandomQuote = async () => {
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
  fatchingRandomQuote();
}, [quoteChange, currentTag]);

const setBookmark=() => {}

  return (
    <main className="flex flex-col justify-center items-center w-full my-20">
      <h1 className="md:text-[3rem] text-[2rem] font-[700] text-[#F3CB89]">
        QUOTE OF THE DAY
      </h1>
      <div className="lg:w-[40%] md:w-[55%] w-[75%]">
        <select
        onChange={(e) => setCurrentTag(e.target.value)}
          name="quotes"
          className=" cursor-pointer px-4 h-[2.5rem] bg-[rgba(255,255,255,0.75)] w-full outline-0 shadow-lg text-[1.25rem] my-12 rounded-lg"
        >
          <option value="" selected disabled hidden>
            Choos your Quoate
          </option>
          {tagList && tagList.map((tag) => (
              <option key={tag.id} value={tag.name}>{tag.name}</option>
          )) 
          }
        </select>
      </div>
      <div className="lg:w-[50%] md:w-[70%] w-[90%]">
        <QuoteCard quote={quote} initBookmar={false} setBookmark={setBookmark} />
      </div>
      <button className="bg-[#F3CB89] px-6 rounded-3xl shadow-2xl mt-[4rem] py-2 text-[1.25rem]" onClick={() => setQuoteChange(!quoteChange)}>NEXT QUOTE</button>
    </main>
  );
};

export default Home;
