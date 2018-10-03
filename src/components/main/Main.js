import React, { Component } from 'react';
import CategoryBox from './CategoryBox';

export default class Main extends Component {
  render() {
    return (
      <div>
        <CategoryBox boxType='category'/>
        <CategoryBox boxType='category'/>
        <CategoryBox boxType='category'/>
        <CategoryBox boxType='category'/>
        <CategoryBox boxType='category'/>
        <CategoryBox boxType='category'/>
      </div> 
    )
  }
}
