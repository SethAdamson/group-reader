import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CategoryBox extends Component {
    render() {
        let {categoryTitle, categoryDesc, toggle, on, listOfGroups} = this.props;

        let mappedGroups = listOfGroups.map(group => {
            return (
               <div key={group.group_id}>
                   <h6>{group.group_name}</h6>
                    <FontAwesomeIcon icon={group.private ? 'lock' : 'lock-open'} className='lock-icon'/>
                    
               </div>  
            )
        })

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
                <div className='list-of-groups-by-category'>
                    {mappedGroups}
                </div> 
            )
        }
    }
}