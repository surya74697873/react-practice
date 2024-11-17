import { useState } from "react";
import PropTypes from "prop-types";
import "./Quotes.css";

const categoryList = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "couage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graducation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

const Quotes = ({ url, apiKey }) => {
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState(categoryList[0]);

  async function apiCall() {
    const res = await fetch(`${url}?category=${category}`, {
      headers: {
        "X-Api-key": apiKey,
      },
    });
    if (res.ok) {
      const data = await res.json();
      setQuote(data);
      console.log(data);
    }
  }

  return (
    <div className="Quotes">
      <div className="lists">
        {categoryList.map((data, index) => (
          <p key={index + 1}>{data}</p>
        ))}
      </div>
      <div className="display">
        {quote ? (
          <div className="Quote">
            <p>{quote[0].quote}</p>
            <h2>- {quote[0].author}</h2>
          </div>
        ) : (
          <p>Hi Click Button and Get Quotes</p>
        )}
        <select
          name="Category"
          id="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryList.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
        <button onClick={apiCall}>Click</button>
      </div>
    </div>
  );
};

Quotes.propTypes = {
  url: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default Quotes;
