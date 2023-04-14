import React, { useEffect, useState } from "react";
import QuoteCard from "../UI/QuoteCard";
import axios from "axios";

const Home = () => {
    const [quoteChange, setQuoteChange] = useState(true)
    const [tagList, setTagList] = useState([])
    const [currentTag, setCurrentTag] = useState(null)
    
const fatchingTag = async () => {
    const res = await axios.get('https://api.quotable.io/tags')
    setTagList(res.data)
}

console.log(currentTag)

useEffect(() => {fatchingTag()},[])

  return (
    <main className="flex flex-col justify-center items-center w-full my-20">
      <h1 className="text-[3rem] font-[700] text-[#F3CB89]">
        QUOTE OF THE DAY
      </h1>
      <div className="w-[40%]">
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
      <div className="w-[50%]">
        <QuoteCard quoteChange={quoteChange} currentTag={currentTag} />
      </div>
      <button className="bg-[#F3CB89] px-6 rounded-3xl shadow-2xl mt-[4rem] py-2 text-[1.25rem]" onClick={() => setQuoteChange(!quoteChange)}>NEXT QUOTE</button>
    </main>
  );
};

export default Home;
