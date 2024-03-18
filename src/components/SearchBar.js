import { useState } from "react";

const words = [
  "suppose end get",
  "boy warrant general",
  "natural. delightful",
  "met sufficient projection ask.",
  "decisively everything",
  "principles if preference",
  "do",
  "impression",
  "of. preserved oh so",
  "difficult repulsive on",
  "in household. in what",
  "do",
  "miss time be. valley",
  "as be",
  "appear",
  "cannot so",
  "by.",
  "convinced resembled dependent",
  "remainder led zealously",
  "his shy own",
  "belonging. always length",
  "letter",
  "adieus",
  "add number moment she.",
  "promise few",
  "compass six several old",
  "offices removal parties",
  "fat. concluded",
  "rapturous it intention",
  "perfectly daughters",
  "is as.",
  "behaviour we",
  "improving at something",
  "to. evil true",
  "high lady roof men",
  "had open.",
  "to projection considered it",
  "precaution an",
  "melancholy or.",
  "wound young",
  "you thing",
  "worse along being ham.",
  "dissimilar of favourable solicitude",
  "if sympathize middletons",
  "at. forfeited",
  "up if disposing",
];

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [dropHeight, setDropHeight] = useState(0);

  const handleInput = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    if (userInput.length === 0) {
      setDropHeight(0);
      return;
    }

    const filteredWords = words
      .filter((word) => word.toLowerCase().includes(userInput))
      .sort()
      .splice(0, 5);

    setDropHeight(filteredWords.length * 40);
  };

  return (
    <div className="container">
      <input
        id="search"
        type="text"
        placeholder="Type some text"
        value={input}
        onChange={handleInput}
        className="color inherit padding-12px 10px width-60vw border-top-right-radius-5 border-top-left-radius-5 border-none outline-none"
      />
      <ul
        className="drop overflow-hidden transition-height duration-400 bg-white rounded-b-5 shadow-md"
        style={{ height: `${dropHeight}px` }}
      >
        {words
          .filter((word) => word.toLowerCase().includes(input))
          .map((item, index) => (
            <li key={index} className={item === input ? "match" : ""}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
