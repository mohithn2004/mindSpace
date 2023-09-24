import React, { useState } from "react";
import BarChart from "./BarChart";
import DoughnutGraph from "./DoughNut";
import "./HomePage.css";
import InstaTracker from "./InstaTracker";
import logo from "../images/Ellipse.png";
import Modal from "react-modal";
import axios from "axios";
import buddha from "../images/buddha.png";

interface SearchResult {
  title: string;
  snippet: string;
  link: string;
}
function HomePage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  // Annotate completedSentence with the SearchResult[] type
  const [completedSentence, setCompletedSentence] = useState<SearchResult[]>(
    []
  );

  const allowedKeywords = [
    "mental health", "health diseases", "digital well-being", "depression", "anxiety",
    "stress management", "self care", "wellness", "emotional well-being", "mindfulness",
    "psychological support", "therapy", "counseling", "positive psychology", "resilience",
    "mental fitness", "self-esteem", "mind-body connection", "emotional intelligence", "well-being apps",
    "stress reduction", "relaxation techniques", "mental health awareness", "support groups", "self-help",
    "trauma recovery", "substance abuse", "addiction recovery", "suicide prevention", "self-compassion",
    "mindful eating", "sleep hygiene", "meditation", "yoga for mental health", "cognitive behavioral therapy",
    "art therapy", "music therapy", "group therapy", "family therapy", "online therapy", "telehealth counseling",
    "peer support", "positive affirmations", "journaling for mental health", "empathy", "compassion",
    "stress coping strategies", "anger management", "grief counseling", "phobias", "OCD support",
    "eating disorders", "body image", "post-traumatic stress", "mindset", "emotional support animals",
    "work-life balance", "burnout prevention", "financial well being", "healthcare access", "health equity",
    "prevention and wellness", "public health", "healthy lifestyle", "nutrition for mental health", "exercise therapy",
    "chronic illness support", "pandemic mental health", "telemedicine", "teletherapy", "e-mental health",
    "digital detox", "screen time management", "social media balance", "cyberbullying prevention",
    "online privacy", "technology addiction", "digital mindfulness", "sustainable technology use",
    "mindful gaming", "digital detox retreats", "e therapy platforms", "virtual mental health services",
    "telepsychiatry", "wearable mental health tech", "mental health wearables", "digital mental health tools",
    "mental health chatbots", "AI for mental health", "telehealth psychology", "remote therapy sessions",
    "online mental health resources", "telepsychology platforms", "digital mental wellness programs",
    "internet-based cognitive therapy", "web-based mental health interventions", "virtual support communities",
    "online mental health forums", "teletherapy apps", "mental health tech startups", "online counseling platforms",
    "digital mental health solutions", "telepsychology services", "virtual mental health workshops",
    "internet-based psychotherapy", "digital well being courses", "online mental health assessments", "motivation",
    "Appointment for Mental Health",
    "life challenges", "emotional struggles", "mental health tips", "coping mechanisms", "stress relief",
    "anxiety management", "dealing with depression", "loneliness", "social isolation", "self-care routines",
    "mindful living", "mental health resources", "mind-body wellness", "emotional health", "positive thinking",
    "happiness", "self-improvement", "overcoming obstacles", "confidence building", "mental resilience",
    "personal growth", "self-acceptance", "self-compassion", "motivational quotes", "self-help books",
    "inspiration", "daily affirmations", "healthy relationships", "communication skills", "mindful communication",
    "self-discovery", "mental health support", "self-empowerment", "stress relief techniques",
    "mindful breathing", "relaxation exercises", "mindful meditation", "yoga for stress relief", "mindful eating habits",
    "cognitive therapy techniques", "expressive arts therapy", "music for relaxation", "online support communities",
    "online mental health chat", "mental health blogs", "teletherapy options", "digital therapy tools",
    "mental health apps", "self-help websites", "virtual mental health events", "mindfulness courses",
    "online mental health assessments", "well being workshops", "therapy sessions", "counseling services",
    "mental health helpline", "life", "love"
]


  const fetchData = async (input: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${input}&cx=5093e82d0227d44e1&key=AIzaSyDR0vQH7pvczC8045Xh4KRw3jw6pNDWGIQ`
    );

   const filteredItems = response.data.items.filter(item => {
      const titleSnippet = `${item.title} ${item.snippet}`.toLowerCase();
      return allowedKeywords.some(keyword => titleSnippet.includes(keyword.toLowerCase()));
    });

    return filteredItems.slice(0,3);
    // return response.data.items.slice(0,3);
  };

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      // Update completedSentence state with the fetched data
      setCompletedSentence(completedSentence);
      console.log(completedSentence);
      setSearchOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  function openSearchModal() {
    setSearchOpen(true);
  }

  function closeSearchModal() {
    setSearchOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="home-page">
      <div className="navbar">
        <div className="top">
          <div className="top1">
            <div className="nav-img">
              <img src={buddha} alt="" width={80} height={70} />
            </div>

            <div>
              <p className=" nav-box home">Home</p>
            </div>
            <div>
              <p className=" nav-box chat-bot">Chat Bot</p>
            </div>
          </div>
          <div className="middle">
            <h1>MindSpace</h1></div>
          <div className="wrapper search-bar">
            <div className="input-data">
              <input
                id="gg"
                type="text"
                required
                onChange={(event) => setInput(event.target.value)}
              />
              <label htmlFor="gg">Search</label>
              <button className="srch-button" onClick={handleClick}>
                SEO Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <Modal
            isOpen={searchOpen}
            onRequestClose={closeSearchModal}
            className="sos-modal"
            contentLabel="SOS Alert"
          >
            <div className="flex sos-nav">
              <h2 className="sos-heading">Search Results</h2>
              <h2 className="sos-head" onClick={closeSearchModal}>
                X
              </h2>
            </div>
            {completedSentence.map((result, index) => (
              <div key={index}>
                <h2>{result.title}</h2>
                <p>{result.snippet}</p>
                <a href={result.link}>Read more</a>
              </div>
            ))}
            <div className="submit" onClick={closeSearchModal}>
              Done
            </div>
          </Modal>
        </div>
        <div className="flex">
          <img className="pfp" src={logo} alt="LOGOOOOOOOO" />
          <h2 className="name">Hello Raghav!</h2>
        </div>
      </div>
      <div className="flex">
        <div>
          <h2 className="sos" onClick={openModal}>
            SOS ALERT
          </h2>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="sos-modal"
            contentLabel="SOS Alert"
          >
            <div className="flex sos-nav">
              <h2 className="sos-heading">SOS ALERT</h2>
              <h2 className="sos-head" onClick={closeModal}>
                X
              </h2>
            </div>
            <div>
              <form>
                <div className="wrapper">
                  <div className="input-data">
                    <input id="gg" type="text" required />
                    <label htmlFor="gg">Enter Your Name</label>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="input-data">
                    <input id="hh" type="text" required />
                    <label htmlFor="hh">Enter Your e-mail</label>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="input-data">
                    <input id="ii" type="text" required />
                    <label htmlFor="ii">Enter the social media platform</label>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="input-data">
                    <input id="jj" type="text" required />
                    <label htmlFor="jj">
                      Enter Your query with the details of suspect
                    </label>
                  </div>
                </div>
                <div className="submit" onClick={closeModal}>
                  Submit
                </div>
              </form>
            </div>
          </Modal>

          <DoughnutGraph className="dough-nut" />
          <p className="scrn-txt">Screentime</p>
        </div>

        <div className="sentiment">
          <p className="sentiment-analysis">Social media Sentiment analysis</p>
          {/* <InstaTracker/> */}
          <div className="summary-box">
          <p className="analysis">Positive</p>
            <h3 className="summary-header">Summary of sentiment analysis</h3>
            <p className="summary-text">
              These tweets express overwhelmingly positive sentiments. The first
              tweet reflects excitement about the potential of AI capabilities,
              highlighting the anticipation for future advancements. The second
              tweet advocates for diversity in the tech industry, positively
              emphasizing the need for inclusivity and innovation. The third
              tweet promotes acceptance and empathy, fostering a positive
              atmosphere for embracing differences. The fourth tweet underscores
              the importance of education equality, supporting equal access as a
              positive goal. The fifth tweet prioritizes mental health,
              advocating self-care and mutual support in a positive light. The
              sixth tweet champions environmental responsibility, emphasizing
              sustainable practices as a positive endeavor. Finally, the seventh
              tweet encourages inner peace through mindfulness, portraying it as
              a positive tool for achieving balance and clarity in a noisy world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
