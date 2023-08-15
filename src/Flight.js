import React from "react";
import './Flight.css';
class Flight extends React.Component
{
  constructor()
  {
    super()
    this.state={
      fname:"",
      lname:"",
      age:"",
      gender:"",
      dest:"",
      kosher:false,
      isVeg:false,
      lactose:false
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(event)
  {
    const {name,value,checked,type}=event.target;
    type==="checkbox"?this.setState({
      [name]:checked
    }):this.setState({
      [name]:value
    })
  }

  handleSubmit(event)
  {
    let eat1=this.state.lactose?"Lactose":"";
    let eat2=this.state.isVeg?"isVeg":"";
    let eat3=this.state.kosher?"Kosher":"";
    alert("Welcome ,Passanger \nName: " + this.state.fname + " " + this.state.lname + "\n" + "Age: "+ this.state.age+"\n" + "Gender: "+this.state.gender+"\n" + "Your Destination: "+this.state.dest+"\n" + "Dietary Restrictions: "+eat1+"  "+eat2+" "+eat3+"\n" + "Thankyou for Booking Flight with us !");
    event.preventDefault();
  }


  render()
  {
    let lac=this.state.lactose?"Yes":"No";
    let veg=this.state.isVeg?"Yes":"No";
    let kos=this.state.kosher?"Yes":"No";
    document.title = `Flights `;
    return(
    <body>
    <div className="container">
      <form onSubmit={this.handleSubmit} className="forms">
        <div>
        FirstName: <input
        type="text"
        name="fname"
        value={this.state.fname}
        placeholder="First Name"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        
        LastName: <input
        type="text"
        name="lname"
        value={this.state.lname}
        placeholder="Last Name"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        Age: <input
        type="text"
        name="age"
        value={this.state.age}
        placeholder="Age"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        <div>
        Gender: <input
        type="radio"
        name="gender"
        value="male"
        checked={this.state.gender==="male"}
        onChange={this.handleChange}
        />Male
        <input
        type="radio"
        name="gender"
        value="female"
        checked={this.state.gender==="female"}
        onChange={this.handleChange}
        />Female
        </div>
        <br/>
        <br/>
        Destination: <select value={this.state.dest} name="dest" onChange={this.handleChange}>
          <option value=" ">--Please Choose--</option>
          <option value="delhi">Delhi</option>
          <option value="lucknow">Lucknow</option>
          <option value="chennai">Chennai</option>
          <option value="banglore">Banglore</option>
          <option value="jammu">Jammu</option>
        </select>
        <br/>
        <br/>
        Dietary: <input
        type="checkbox"
        name="lactose"
        checked={this.state.lactose}
        onChange={this.handleChange}
        />Lactose
        <input
        type="checkbox"
        name="isVeg"
        checked={this.state.isVeg}
        onChange={this.handleChange}
        />isVeg
        <input
        type="checkbox"
        name="kosher"
        checked={this.state.kosher}
        onChange={this.handleChange}
        />Kosher
        <br/>
        <br/>
        <div className="box">
        <div className="centre-submit">
        <button>Submit</button>
        </div>
        </div>
        </div>
      </form>
      <br/>
      <div className="info">
        <h2>DETAILS</h2>
      <h3>Name: {this.state.fname} {this.state.lname}</h3>
      <h3>Age: {this.state.age}</h3>
      <h3>Gender: {this.state.gender}</h3>
      <h3>Destination: {this.state.dest}</h3>
      <h3>Lactose: {lac}</h3>
      <h3>isVeg: {veg}</h3>
      <h3>Kosher: {kos}</h3>
      </div>
    </div>
    </body>
    )
  }
};

export default Flight;