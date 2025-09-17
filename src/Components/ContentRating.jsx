
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes : 0,
      dislikes : 0,
      
      whenlikeiscliked : () => {
        this.setState({ likes: this.state.likes + 1 });
      },

      whendislikeiscliked : () => {
        this.setState({ dislikes: this.state.dislikes + 1 });
      }

    };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating! DSDP A</h1>
     <p>This is a sample text content to demonstrate content rating.</p>
      <div className="content-rating">
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Iure sit dicta, facere itaque eum temporibus quibusdam expedita 
          pariatur mollitia? Maxime error eveniet ab? Minus architecto in 
          blanditiis quam! Magnam, odit.</p>

          <div className="rating-buttons">
            <button className='like-button' onClick={this.state.whenlikeiscliked}>Like ({this.state.likes})</button>
            <button className='dislike-button' onClick={this.state.whendislikeiscliked} >DisLike({this.state.dislikes})</button>
          </div>


      </div>  

     </>
    );
  }
}

export default ContentRating;
