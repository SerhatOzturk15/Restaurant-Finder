import React, { useEffect, useState } from "react";
import { List, Filter, ListItem, AppBar } from "./../components";
import Container from "react-bootstrap/Container";
import { PROXYURL, BASEURL, token } from "./../Util";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurants, setType, filterRestaurants } from "./../actions/restaurantActions";

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `${BASEURL}term=restaurants&location=Berlin&limit=10`;
    var obj = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    fetch(PROXYURL + url, obj)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setRestaurants(result.businesses));
      });
  }, []);

  const type = useSelector((store) => store.type);
  const restaurants = useSelector((store) => store.restaurants);
  const filteredRestaurants = useSelector((store) => store.filteredRestaurants);
  const filterText = useSelector((store) => store.filterText);
  
  //const [type, setType] = useState();
  const header = ["#", "Name", "Price", "Phone", "Rating"];
  const dropDownProps = [
    { type: "Pizza", data: "pizza" },
    { type: "Burger", data: "burgers" },
    { type: "Sushi", data: "sushi" },
  ];

  const handleTypeChange = (selectedType) => {
    const url = `${BASEURL}term=restaurants&location=Berlin&limit=10&categories=${selectedType}`;
    var obj = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    fetch(PROXYURL + url, obj)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setType(selectedType, result.businesses));
      });
  };

  const handleTextChange = (e) => {
    const text = e.currentTarget.value;
    dispatch(filterRestaurants(text, restaurants))
  }

  const handleClearItems = () => {
    const url = `${BASEURL}term=restaurants&location=Berlin&limit=10`;
    var obj = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    fetch(PROXYURL + url, obj)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setRestaurants(result.businesses));
      });
  }
  return (
    <>
      <AppBar title="Restaurant Finder App" />
      <Filter
        title={"Filter by Type"}
        clearButtonText = {'Clear all filters'}
        inputPlaceHolder={"Search Places by their name"}
        dropDownProps={dropDownProps}
        handleTypeChange={handleTypeChange}
        selectedType = {type}
        handleTextChange = {handleTextChange}
        handleClearItems = {handleClearItems}
        filterText = {filterText}
      />
      <List header={header} limit={10} restaurants={filteredRestaurants} />
    </>
  );
};

export default RestaurantContainer;
