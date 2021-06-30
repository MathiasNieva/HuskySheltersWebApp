import React, { Component } from 'react';
import {Table, Button} from 'reactstrap'

class App extends Component {

	/*
	state = { 
		isLoading: false,
		pets: [
			{
				"petId": "pet_001",
				"type": "Dog",
				"age": "3",
				"healthStatus": "Healthy",
				"location": "London",
				"pictures": '["https://picsum.photos/200?image=2","https://picsum.photos/200?image=2","https://picsum.photos/200?image=2"]'
			},
			{
				"petId": "pet_002",
				"type": "Dog",
				"age": "3",
				"healthStatus": "Healthy",
				"location": "London",
				"pictures": '["https://picsum.photos/200?image=2","https://picsum.photos/200?image=2","https://picsum.photos/200?image=2"]'
			},
			{
				"petId": "pet_003",
				"type": "Dog",
				"age": "3",
				"healthStatus": "Healthy",
				"location": "London",
				"pictures": '["https://picsum.photos/200?image=2","https://picsum.photos/200?image=2","https://picsum.photos/200?image=2"]'
			},
			{
				"petId": "pet_004",
				"type": "Dog",
				"age": "3",
				"healthStatus": "Healthy",
				"location": "London",
				"pictures": '["https://picsum.photos/200?image=2","https://picsum.photos/200?image=2","https://picsum.photos/200?image=2"]'
			}
		]
	}
*/

	state = {
		pets: [],
		isLoading: false,
	}


	async componentDidMount(){
		const response = await fetch('https://r0ydhxrk9d.execute-api.us-east-1.amazonaws.com/prod');
		const body = await response.json();
		console.log(body)
		this.setState({pets:body, isLoading:false})
	}

	render() {

		const isLoading = this.state.isLoading;
		const allPets = this.state.pets

		if (isLoading)
			return(<div>Loading...</div>);


		
		let pets = 
		allPets.map( pet => 
			<tr key={pet.petId}>
				<td>{pet.age}</td>
				<td>{pet.healthStatus}</td>
				<td>{pet.location}</td>
				{pet.pictures.map(item => <td><img src={item} alt="a"></img></td>)}
			</tr>
		)


		return (
			<div className="container border-secondary rounded center">

				<div className="row">
					<div className="col-12 text-center">
						<br></br>
						<h1>HUSKY SHELTERS</h1>
						<h3></h3>
						<br></br>
					</div>
				</div>

				<div className="row">
					<div className=".col-xs-12 center text-center">
						<Table responsive striped bordered>
							<thead>
								<tr>
									<th>Age</th>
									<th>Health Status</th>
									<th>Location</th>
								</tr>
							</thead>

							<tbody>
								{this.state.pets.length === 0 ? <td colSpan="9">All caught up</td> : pets}
							</tbody>
						</Table>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
