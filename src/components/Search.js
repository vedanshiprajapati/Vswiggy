import { useState, useEffect } from "react";

const Search = () => {
  const [InputValue, setInputValue] = useState("");
  const [LocationSuggester, setLocationSuggester] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const arr = [1, 2, 3, 4, 5];
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (InputValue.length >= 3) {
        fetchData();
      } else {
        setLocationSuggester(null); // Clear suggestions if input length is less than 3
      }
    }, 200);

    return () => {
      clearTimeout(timerId); // Clear the timer if the component is unmounted or if inputValue changes
    };
  }, [InputValue]);

  function handleEvent(e) {
    setInputValue(e.target.value);
  }
  async function fetchData() {
    setIsLoading(true);

    const promise = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/misc/place-autocomplete?input=${InputValue}`
    );
    const data = await promise.json();
    setLocationSuggester(data);
    setIsLoading(false);
  }

  return (
    <div className="relative ml-5 my-auto">
      <input
        className="w-[400px] border border-[#777676] pl-[10px] py-3 rounded-xl focus-within:border-[#FC8019]  focus-within:border-2  focus:outline-none"
        type="text"
        placeholder="Search Location"
        value={InputValue}
        onChange={handleEvent}
      />
      {IsLoading && (
        <div className="relative">
          <div className="absolute w-[400px] bg-white border border-gray-300 rounded-md shadow-lg">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-3 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <p className="w-[200px] h-4 rounded-[3px] animate-pulse bg-slate-200"></p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {InputValue.length >= 3 && LocationSuggester && !IsLoading && (
        <div className="relative">
          <div className="absolute w-[400px] bg-white border border-gray-300 rounded-md shadow-lg">
            {LocationSuggester.data.map((item, index) => {
              {
                console.log(item.terms[0].value);
              }
              return (
                <div
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <p>{item.terms[0].value}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
