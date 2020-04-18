import React, { useEffect } from "react";
import { List, Filter, AppBar, Loading } from "./../components";
import Container from "react-bootstrap/Container";
import { getRestaurants, getRestaurantsByType } from "./../helpers/ApiHelper";
import { useSelector, useDispatch } from "react-redux";
import { filterRestaurants } from "./../actions/restaurantActions";

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  //redux store states
  const {
    type,
    restaurants,
    filteredRestaurants,
    filterText,
    isLoading,
    error, // i havent used this, it can be used if desired
  } = useSelector((store) => store.rest);

  //header values
  const header = ["#", "Name", "Price", "Rating", "Photo"];

  //dropdown properties
  const dropDownProps = [
    { type: "Pizza", data: "pizza" },
    { type: "Burger", data: "burgers" },
    { type: "Sushi", data: "sushi" },
  ];

  const handleTypeChange = (selectedType) => {
    dispatch(getRestaurantsByType(selectedType));
  };

  const handleTextChange = (e) => {
    const text = e.currentTarget.value;
    dispatch(filterRestaurants(text, restaurants));
  };

  const handleClearItems = () => {
    dispatch(getRestaurants());
  };
  return (
    <Container>
      <AppBar title="Restaurant Finder App" />
      <Filter
        title={"Filter by Type"}
        clearButtonText={"Clear all filters"}
        inputPlaceHolder={"Search by the name"}
        dropDownProps={dropDownProps}
        handleTypeChange={handleTypeChange}
        selectedType={type}
        handleTextChange={handleTextChange}
        handleClearItems={handleClearItems}
        filterText={filterText}
      />
      <List header={header} restaurants={filteredRestaurants} />
      {isLoading && <Loading />}
    </Container>
  );
};

export default RestaurantContainer;
