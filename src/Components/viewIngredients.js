import React, { Component } from 'react'
const getIngredientList = async () => {
    let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1",{
        method:"GET",
    });
    let list = await res.json();
    console.log(list);
    
    // console.log(list.items);
    return list;
    };
export default class ViewIngredients extends Component {
    constructor(props) {
        super(props);
        this.state ={
            
            name:"",
            id:"",
            timeToPrepare:" ",  
        
            vegetables:[] ,  
            spices:[] , 
            appliances: [],

        };
    }

    componentDidMount() {
        getIngredientList().then((list) => {
        
            this.setState({
                
                name:list.name,
                id:list.id,
                timeToPrepare:list.timeToPrepare,
                vegetables: list.ingredients.vegetables,
                spices: list.ingredients.spices,
                appliances: list.ingredients.appliances,
            
            })
        }
        );
    }
  render() {
    return (
      <div>
         <div>
             Second
         </div>
         <div>
             <h1>{this.state.name}</h1>
             <h2>{this.state.id}</h2>
             <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire</p>
             <h3>{this.state.timeToPrepare}</h3>
             <img src="" alt=""/>
             <br />
             
         
         </div>
         <div>
             <h1>Ingredients</h1>
             <p>For 2 people </p>
             <br/>
         </div>
         <div className="vegetables">
             <h2>Vegetbables(05)</h2>
             {this.state.vegetables.map((vegList) => (
                  <div className="vegList" key ="{name}">
                  <h4>{vegList.name}</h4>
                   <h4>{vegList.quantity}</h4>
                  </div>
              )
              )
              }
         </div>
         <div className="spices">
         <h2>Spices(10)</h2>
         {this.state.spices.map((list) => (
                  <div className="spices" key ="{name}">
                  <h4>{list.name}</h4>
                   <h4>{list.quantity}</h4>
                  </div>
              )
              )
              }
         </div>
         <div>
             <h1>Appliances</h1>
             {this.state.appliances.map((appliance) => (
                  <div className="appliance" key ="{name}">
                  <h4>{appliance.name}</h4>
                   <h4>{appliance.image}</h4>
                  </div>
              )
              )
              }
         </div>
       </div>
    )
  }
}

