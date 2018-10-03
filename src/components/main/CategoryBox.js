import React, {Component} from 'react';

export default class CategoryBox extends Component {
    render() {
        // let mappedGroups = this.props.groups.map(group => {

        // })
        if(this.props.boxType === 'category') {
            return (
                <div className='basic-category-box'>
                    <h3>Category Title</h3>
                    <p>This is the category description. This is the category description.</p>
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