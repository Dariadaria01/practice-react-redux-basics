import React from 'react';
import { useDispatch } from 'react-redux';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  return (
    <li>
      {name}
      <button onClick={handleRemove}>usuń</button>
    </li>
  );
};

export default UserItem;