/**
 * 
 * <header>
 *      <nav>
 *          <ul>
 *              <li>HOME</li>
 *              <li>ABOUT</li>
 *              <li>CONTACT</li>
 *          </ul>
 *      </nav>
 *      <div>Logo...</div>    
 * </header>
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement(
    'header' ,
     {className:'header'}, 
     [
        React.createElement('nav', {className:"navigation-bar"}, 
            React.createElement('ul', {id:'list'}, [
                React.createElement('li', { className:'nav-items'}, 'HOME'),
                React.createElement('li', { className:'nav-items'}, 'ABOUT'),
                React.createElement('li', { className:'nav-items'}, 'CONTACT')
            ])
         ),
        React.createElement('div', {id:'logo'}, "Logo")
     ]
)

// react Element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);