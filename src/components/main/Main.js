import React, { Component } from 'react';
import CategoryBox from './CategoryBox';
import Toggle from '../ToggleRPC';
import _ from 'lodash';

export default class Main extends Component {
  render() {
    let y = _.groupBy(this.props.allByCategory, (e) => e.category_id)
    console.log(y)
    let x = _.uniqBy(this.props.allByCategory, (e) => e.category_id).map(category => {
      return (
        <Toggle key={category.category_id}>
          {({on, toggle}) => (
          <div>
            <CategoryBox on={on} toggle={toggle} boxType='category' categoryTitle={category.category_name} categoryDesc={category.category_desc} listOfGroups={y[category.category_id]}/>
            {on && <CategoryBox boxType='groupsByCategory' listOfGroups={y[category.category_id]}/>}
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
