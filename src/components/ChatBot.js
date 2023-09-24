import React from "react";
import axios from "axios";
import { useState } from "react";
import "./ChatBot.css";
import arrow from '../images/icon-send.png'
import Footer from "./Footer";
function ChatBot() {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `"You are a mental health chatbot. Provide guidance on overcoming mental health challenges. "
                     "You must answer only questions related to health and mental health, and nothing else. "
                     "If there is an irrelevant topic, you must reply 'Sorry, I can't assist with that.' "
                     "Be creative in making the user feel good. and answer to this "${input}" `,
        model: "text-davinci-002",
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"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"}`,
        },
      }
    );

    return response.data.choices[0].text;
  };
  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="chat-bot-page">
      <div className="chat-box">
        <h2 className="chat-heading">Your personalized Mental health chatbot</h2>
        {completedSentence && <p className="message">{completedSentence}</p>}
        <div className="chat-ip">
        <input className="chat-ip-box"
        type='text'
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          placeholder="Let go your emotions here!"
        />
        <button className="send" onClick={handleClick}>
          <img className="arrow" src={arrow} alt="Send"/>
        </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ChatBot;
