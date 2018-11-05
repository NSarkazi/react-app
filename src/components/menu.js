import React, { Component } from 'react';
import {render} from 'react-dom';
import jquery from "jquery";
 


// const dUrl = "http://http://localhost:3012/list";

// $.ajax(
//    {
//      url: dUrl, 
//      success: function(result){
//          console.log(result);
//      }
//    }
// );





class Content extends React.Component {
   constructor() {
       super()
       this.state = {
           data: []
       }
   }
   componentDidMount() {

    
    jquery.ajax({
           url: "http://localhost:3012/List",
           type: "GET",
           dataType: 'json',
           ContentType: 'application/json',
           success: function (data) {
              console.log("data",data);
               this.setState({data: data});
           }.bind(this),
           error: function (jqXHR) {
               console.log(jqXHR);
           }
       })
   }
       
   render() {
       return (
         <div>
           
              {this.state.data.map((item, i) =>
              <Item key={i} value={item} />
              )}
          
         </div>
            
         
       )
   }
}




// class List extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [
//         {
//           name: "AAAAAA",
//           link: "http://www.ibm.com"
//         },
//         {
//           name: "BBBBB",
//           link: "http://www.iconfinder.com"
//         },
//       ]
//     }
//   }

//   render() {
//     return <ul>
//               {this.state.items.map(i =>
//               <Item value={i} />
//               )}
//           </ul>;
//   }
// }
  
class Item extends Component {
  render() {
    return <li>
      <a href={this.props.value.link}>{this.props.value.name}</a>
    </li>;
  }
}
  
export default Content