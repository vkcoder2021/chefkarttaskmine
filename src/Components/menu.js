import React, { Component } from 'react'


import '../App.css';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// const navigate=useNavigate();
const viewingre=()=>{
    console.log('hii');
    // navigate('/view');
};
const getPopularDishList = async () => {
let res =await fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/",{
    method:"GET",
});
let list = await res.json();
console.log(list);

// console.log(list.items);
return list;
};
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dishes:[],
             popularDishes:[],
        }
    }

    componentDidMount() {
        getPopularDishList().then((list) => {
            this.setState({
                
                dishes:list.dishes,
                popularDishes:list.popularDishes,
            
            })
        }
        );
       
    }

    
  render() {
      
    return (
      <div>
            <div className="Top">
            <div className="dates-container default">
              <div className="timing">
              <div className="date">
              <div className="date-icon"></div>
              <div className="date-content">21 May 2021</div>
            </div>
          <div className="time">
            <div className="time-icon"></div>
            <div className="time-content">10:30 Pm - 12:30pm</div>
          </div>
        </div>
      </div>

      <div className="options-container ">
        <ul className="options-lists">
          <li className="choice-list">Italian</li>
          <li className="choice-list">Indian</li>
          <li className="choice-list">Indian</li>
          <li className="choice-list">Indian</li>
        </ul>
      </div>
    </div>
    
          <div className="Popular default">
              {this.state.popularDishes.map((item) => (
                  <div key ="{item.id}">
                   <div className="Popular-heading">Popular Dishes</div>
                  <ul>
                     <li className="Popular-item">
                    
                       <img src={item.image} alt="" />
                    
                     </li>
                    <li className="Popular-item">{item.name}</li>
                  </ul>
                  </div>
              )
              )
              }
          </div>

          <div className='dish'>
              <div className="dishmenu">
                  <h1 className="alignleft">Recommended</h1>
                  <h3 className="alignright">Menu</h3>
              </div>
         
           
              <div className='dishmain'>
              {this.state.dishes.map((foodList) => (
                  <div className="foodlist" key ="{foodList.id}">
                  <h2>{foodList.name}</h2>
                  <h4>{foodList.rating}</h4>
                  <h4>{foodList.equipments}</h4>
                  {/* <div>  */}
                    <button onClick={viewingre}>ViewIngredients</button>
                    {/* <Routes>
                        <Route path="/view" element={<ViewIngredients/>}/>
                    </Routes>
                    </div>
                   */}
                
                  <img src="freeze.jpg" alt="" />
                  <img src="" alt="" />

                  <p>{foodList.description}</p>
                  <img src={foodList.image} alt=""/>
                  <h3>Add</h3>
                  </div>
              )
              )
              }
              </div>    
              <div>
                  3Food items selected
              </div>

          </div>
      </div>
    )
  }
}
