import React, {Component} from 'react';
import {connect} from 'react-redux';
import CategoryGrid from 'CategoryGrid';
import { startLoadCategories } from 'actions'

export class CategoriesScreen extends Component {
	componentDidMount() {
		console.log("FETCHING");
		this.props.dispatch(startLoadCategories());
	}
   render() {
    return (
      <div className='main-container'>
      <div className='row'>
      	<div className='small-10 small-centered columns'>
      	Pick Your Five Vibes
      	</div>
      </div>
      <div className="row">
      <div className='small-10 small-centered columns'>
      	<CategoryGrid />
      </div>
      </div>
      </div>
    )
  }
}

export default connect()(CategoriesScreen);
