import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import NavBar from './components/NavBar';


class App extends Component {
		state = {
			name: ""
		}

		changeName = (name) => {
			this.setState({
				name
			})
		}


	render() { 
		return ( <Router>
			<div className="container">
				<div className="row">
					<Route path ="/" render={NavBar} />


					<Route exact path="/" render={()=>
					<Home changeName={this.changeName} name={this.name} />}/>
					
					<Route exact path="/setup" render={Setup} />
				</div>
			</div>
		</Router> );
	}
}
 
export default App;