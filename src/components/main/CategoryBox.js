import React, {Component} from 'react';

export default class CategoryBox extends Component {
    render() {
        let {categoryTitle, categoryDesc, toggle, on} = this.props;
        if(this.props.boxType === 'category') {
            return (
                <div className='basic-category-box' onClick={toggle}>
                    <h3>{categoryTitle}</h3>
                    <p className='category-desc' style={on ? {display: 'inherit'} : {display: 'none'}}>{categoryDesc}</p>
                </div> 
            )
        }
        else if(this.props.boxType === 'groupsByCategory') {
            return (
                <div className='basic-category-box'>

                </div> 
            )
        }
    }
}