import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllByCategory } from '../../ducks/reducer';
import Main from './Main';

class MainContainer extends Component {
  componentDidMount() {
    this.props.getAllByCategory();
  }

  render() {
    const { allByCategory } = this.props;
    return (
      <div>
        <Main allByCategory={allByCategory} />
      </div>
    );
  }
}

MainContainer.propTypes = {
  allByCategory: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    allByCategory: state.allByCategory,
  };
}

export default connect(
  mapStateToProps,
  { getAllByCategory }
)(MainContainer);
