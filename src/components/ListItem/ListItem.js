import React from "react";
import "./ListItem.scss";

const ListItem = ({ restaurant, order }) => {
  return (
    <>
      {restaurant && (
        <tr data-test="listItemComponent">
          <td>
            <div>{order}</div>
          </td>
          <td data-test="restaurantName">{restaurant.name}</td>
          <td>{restaurant.price}</td>
          <td data-test="restaurantRating">{restaurant.rating}</td>
          <td>
            <img
              alt="restaurants"
              className="restaurant-image"
              src={restaurant.image_url}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default ListItem;
