import React, { useState, useRef, useEffect, useMemo } from "react";
import AutoCompleteItem from "./AutoCompleteItem";

const AutoComplete = ({ data }) => {
  const [isVisible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [cursor, setCursor] = useState(-1);
  // const [cursor, setCursor] = useState(-1);

  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.addEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
      return () => {};
    }
    let listItems = Array.from(searchResultRef.current.children);
    listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
  }, [cursor]);

  const scrollIntoView = (position) => {
    searchResultRef.current.parentNode.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const suggestions = useMemo(() => {
    if (!search) return data;

    setCursor(-1);
    scrollIntoView(0);

    return data.filter(
      (item) =>
        item.country.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) 
    );
  }, [data, search]);

  const handleClickOutside = (event) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(event.target)
    ) {
      hideSuggestion();
    }
  };

  const showSuggestion = () => setVisible(true);
  const hideSuggestion = () => setVisible(false);

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      isVisible
        ? setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c))
        : showSuggestion();
    }
    if (e.key === "ArrowUp") {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }
    if (e.key === "Escape") {
      hideSuggestion();
    }
    if (e.key === "Enter" && cursor > 0) {
      setSearch(suggestions[cursor].iata_code);
      hideSuggestion();
    }
  };

  return (
    <div ref={searchContainer}>
      <input
        className="input--style-1"
        name="from"
        id="search"
        type="text"
        placeholder="City"
        value={search}
        autoComplete="off"
        onClick={showSuggestion}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => keyboardNavigation(e)}
        required="required"
      />
      <div
        className={`search-result 
      ${isVisible ? "visible" : "invisible"}`}
      >
        <ul className="list-group results" ref={searchResultRef}>
          {suggestions.map((item, idx) => (
            <AutoCompleteItem
              key={item.iata_code}
              onSelectItem={() => {
                hideSuggestion();
                setSearch(item.iata_code);
              }}
              isHighlighted={cursor === idx ? true : false}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
