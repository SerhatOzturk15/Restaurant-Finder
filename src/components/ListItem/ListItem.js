import React from "react";
import './ListItem.scss'

const ListItem = ({ restaurant, order }) => {
  return (
    <tr>
      <td><div>{order}</div></td>
      <td>{restaurant.name}</td>
      <td>{restaurant.price}</td>
      <td>{restaurant.rating}</td>
      <td>
        <img
          className = 'restaurant-image'
          src={restaurant.image_url}
        />
      </td>
    </tr>
  );
};

export default ListItem;
