import React, { Component } from 'react';
import propTypes from 'prop-types';
class Register extends Component {
    constructor(props)
    {
       super(props) 
       this.state = {
        data: {
          username: '',
          email: '',
          password: '',
        },
        loading: false,
        success_message:false,
        errors: {}
      };
    }

   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
      e.preventDefault();
      this.setState({
        success_message:true
      });
      //this.props.submit(this.state.data);
   };

   render() {
     const {data} = this.state;
     const mystyle={
        padding: "40px",
background: "lightblue",
"border-radius": "10px",
"box-sizing": "border-box"
    };
     return(

      <div className="row">
          {this.state.success_message && <div className="col-sm-12">
            <div class="alert alert-success text-center" role="alert">
             Register successfully.
            </div>
          </div>
   }
          <div className="col-sm-3"></div>
          <div className="col-sm-6" style={mystyle}>
      <form onSubmit = {this.onSubmit} >

          <label htmlFor="username"><b>Username</b></label>
          <input type="username" className="form-control" placeholder="Enter Username" id="username" name="username" value={data.username} onChange = {this.onChange} required/>

          <br/>
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>

          <br/>

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" className="form-control" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
          <br/><br/>
          
          <button type="submit" className="btn btn-info">Register</button>
      </form>
      </div>
      <div className="col-sm-3"></div>

      



      
     

    </div>

     );
    }
}

Register.propTypes = {
    submit: propTypes.func.isRequired
  };

export default Register;