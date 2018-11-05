import React from 'react'
import {render} from 'react-dom'
import Header from './header'
import Body from './body'
import Footer from './footer'


let App =()=>
        <div>
            <h1>App name</h1>
            <Header />
            <hr />
            <Body />
            <hr />
            <Footer />
            

        </div>




// var App = React.createClass ({
//     render: function () {
//         return (
//             <div>
//             <h1>App name</h1>
//             <Header />
//             <hr />
//             <Body />
//             <hr />
//             <Footer />
            

//         </div>
//         );    
//     }
    
// });

// render (
// <App />
// );

export default App