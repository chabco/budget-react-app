import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state ={
        submitName: false
    }

    async componentDidMount(){
    const getUsersUrl = `${window.apiUrl}/get-dudes`
    const userInfo = await axios.get(getUsersUrl);
    console.log(userInfo);
    }   


    submitNameHandler = () => {
        this.setState({
            submitName:true
        })
    }


    render() {

        if(!this.props.name){
            const form =                
            
            <form onSubmit={this.submitNameHandler}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.props.name} onChange={this.props.name} className="form-control" id="name" />
                </div>

            </form>
            return(
                <div>{form}</div>
            )
        }

        return(
        

            <div className="col col-sm-12">
                <div className="total-budget">Total Budget: $2000</div>
                <div className="total-spent">Total-Spent: $2000</div>
            </div>
        )
    }
}

export default Home;