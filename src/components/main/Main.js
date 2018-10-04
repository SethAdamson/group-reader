import React, { Component } from 'react';
import _ from 'lodash';
import CategoryBox from './CategoryBox';
import Toggle from '../ToggleRPC';

export default class Main extends Component {
  render() {
    const x = _.uniqBy(this.props.allByCategory, e => e.category_id).map(category => (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <CategoryBox
              on={on}
              toggle={toggle}
              boxType="category"
              categoryTitle={category.category_name}
              categoryDesc={category.category_desc}
              key={category.category_id}
            />
            {on && <CategoryBox boxType="groupsByCategory" />}
          </div>
        )}
      </Toggle>
    ));
    return <div>{x}</div>;
  }
}
