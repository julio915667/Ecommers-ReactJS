import React, { Component } from 'react';
import {Route,Routes,Outlet, Link} from 'react-router-dom';
export class ButtonError extends Component {
  render() {
    return (
      <div className="pageError">
        <p>PAGE NOT FOUND</p>
      <Link to="/" className='textDecorationError'><button class="cssbuttons-io-button"> Inicio
      <div class="icon">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
    </button></Link>
    </div>
    )
  }
}



class Error404 extends Component {
    render() {
        return (
            <div className='pageError'>
                <h2 className="colorWhite">ERROR404 PAGE NOT FOUND! </h2>
                  <Link to="/">
                   <ButtonError/>
                   </Link>
            </div>
        );
    }
}

export default Error404;