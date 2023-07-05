import { useLoaderData } from "react-router-dom";

import { React, useState, useEffect } from "react";

const TextList = () => {
  const textData = useLoaderData();

  console.log(textData);

  return (
    <>
      {textData.length > 0 && (
        <ul>
          {textData.map((dataItem, index) => (
            <li
              key={index}
              word_id={dataItem.word_id}
              word={dataItem.word}
              portuguese={dataItem.portuguese}
              english={dataItem.english}
              spanish={dataItem.spanish}
              japanese={dataItem.japanese}
            />
          ))}
        </ul>
      )}
      {textData.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no words yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default TextList;
