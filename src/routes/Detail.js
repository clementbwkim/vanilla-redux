import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
  return <>
          <h1>{toDo?.text}</h1>
          <h5>created at {toDo?.id}</h5>
        </>
}

function mapStateToProps(state, ownProps) {
    const { 
    match: {
      params: {id}
    } 
  } = ownProps;
  
    return {toDos: state.find((todo) => todo.id === parseInt(id))};
}
export default connect(mapStateToProps)(Detail);