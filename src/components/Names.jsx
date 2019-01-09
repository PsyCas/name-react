import React from 'react';
import "../styles/Names.css";

class EditNames extends React.Component{
    
    constructor(props){

        super(props);
        this.state={
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            isSave: false,
            isCancel: false
        };

    }

    clicked = (event) => {

        if(event.target.id === "save-btn"){
            this.setState({
                isSave : !this.state.isSave
            });
        }

        else if (event.target.id === "cancel-btn"){
            this.setState({
                isCancel: !this.state.isCancel
            });
        }
    }

    changeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        });
    }

    changeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }
    render(){
        
        if (!this.state.isSave && !this.state.isCancel){
        return(
            <div>
                <label> First Name:
                    <input type = "text" id="first-name-input"  placeholder="Enter first name" onChange={this.changeFirstName} value={this.state.firstName}/>
                </label>
                
                <label> Last Name:
                        <input type = "text" id= "last-name-input" placeholder= "Enter last name" onChange={this.changeLastName} value={this.state.lastName}/>
                </label>

                <button onClick={this.clicked} id="save-btn">Save</button>
                <button onClick={this.clicked} id="cancel-btn">Cancel</button>
            </div>
        );
        }

        else{
            if (this.state.isSave){
                return(
                    <DisplayNames firstName= {this.state.firstName} lastName = {this.state.lastName}/>
                );
            }
            else{
                return(
                    <DisplayNames firstName= {this.props.firstName} lastName = {this.props.lastName}/>
                );
            }
        }
    }

}


class DisplayNames extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            displayName: true
        };

        this.editName = this.editName.bind(this);
    }

    editName(){

        this.setState({
            displayName: !this.state.displayName
        });
    }

    render(){

        if (this.state.displayName){
            return(
            
            <div className = "names-main-container">
                <div id = "first-name">{this.state.firstName}</div>
                <div id = "last-name">{this.state.lastName}</div>
                <button id = "edit-btn" onClick={this.editName}>Edit</button>
            </div>
            );
        }

        else{

            return(
                <EditNames firstName= {this.props.firstName} lastName = {this.props.lastName}/>
            );
        }
    }
}

export default DisplayNames;