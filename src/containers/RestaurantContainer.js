import React, { useEffect } from "react";
import { List, Filter, AppBar, Loading } from "./../components";
import Container from "react-bootstrap/Container";
import { getRestaurants, getRestaurantsByType } from "./../helpers/ApiHelper";
import { useSelector, useDispatch } from "react-redux";
import {
  setRestaurants,
  setType,
  filterRestaurants,
  setLoading
} from "./../actions/restaurantActions";

const RestaurantContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true))
    getRestaurants()
      .then((result) => {
        dispatch(setRestaurants(result));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  //redux store states
  const type = useSelector((store) => store.type);
  const restaurants = useSelector((store) => store.restaurants);
  const filteredRestaurants = useSelector((store) => store.filteredRestaurants);
  const filterText = useSelector((store) => store.filterText);
  const isLoading = useSelector((store) => store.isLoading);

  const header = ["#", "Name", "Price", "Phone", "Rating"];
  const dropDownProps = [
    { type: "Pizza", data: "pizza" },
    { type: "Burger", data: "burgers" },
    { type: "Sushi", data: "sushi" },
  ];

  const handleTypeChange = (selectedType) => {
    dispatch(setLoading(true))
    getRestaurantsByType(selectedType).then((result) => {
      dispatch(setType(selectedType, result));
    });
  };

  const handleTextChange = (e) => {
    const text = e.currentTarget.value;
    dispatch(filterRestaurants(text, restaurants));
  };

  const handleClearItems = () => {
    dispatch(setLoading(true))
    getRestaurants().then((result) => {
      dispatch(setRestaurants(result));
    });
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
      <List header={header} limit={10} restaurants={filteredRestaurants} />
      {isLoading &&
        <Loading/>
      }
    </Container>
  );
};

export default RestaurantContainer;
