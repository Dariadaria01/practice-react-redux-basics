import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserList extends React.Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) return;

    this.props.addUser(this.state.name);

    this.setState({
      name: '',
    });
  };

  render() {
    console.log(this.props.users);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input value={this.state.name} onChange={this.handleChange} />
            <input type='submit' value='dodaj' />
          </div>
        </form>

        <ul>
          {this.props.users.map((user) => (
            <UserItem key={user.id} id={user.id} name={user.name} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (name) =>
      dispatch({
        type: 'ADD_USER',
        payload: name,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);