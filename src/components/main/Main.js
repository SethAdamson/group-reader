import React, { Component } from 'react';
import CategoryBox from './CategoryBox';
import Toggle from '../ToggleRPC';
import _ from 'lodash';

export default class Main extends Component {
  render() {
    let x = _.uniqBy(this.props.allByCategory, (e) => e.category_id).map(category => {
      return (
        <Toggle>
          {({on, toggle}) => (
          <div>
            <CategoryBox on={on} toggle={toggle} boxType='category' categoryTitle={category.category_name} categoryDesc={category.category_desc} key={category.category_id}/>
            {on && <CategoryBox boxType='groupsByCategory' />}
          </div> 
        )}
        </Toggle> 
      )
    })
    console.log(this.props.allByCategory, x)
    return (
      <div>
        {x}
      </div> 
    )
  }
}
