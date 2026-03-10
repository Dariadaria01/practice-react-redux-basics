import React from 'react';

const Task05 = () => {

  const dispatch = useDispatch();

  return (
    <section>
      <h1>Task 5</h1>

      <button onClick={() => dispatch(removeAllUsers())}>
        remove all users
      </button>
    </section>
  );
}

export default Task05;

