import React from "react";
import ListHeader from '../ListHeader';

class Navbar extends React.Component {
    state = {
        searchTerm: "",
        filteredEmployees: []
    };

    componentDidMount() {
        if (this.state.filteredEmployees.length < 1) {
            this.setState({
                filteredEmployees: this.props.employees
            })
        }
    }
}

handleInputChange = event => {
    this.setState({
        searchTerm: event.target.value
    });
    let userSearch = event.target.value;
    const filteredList = this.props.employees.filter((item) => {
        let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
        return values.indexOf(userSearch) !== -1
    });
    this.setState({
        filteredEmployees: filteredList
    });
}

render() {
    return (
        <div>
            {}
            <form className="form">
                <input
                    value={this.state.searchTerm}
                    name="searchTerm"
                    onChange={event => this.handleInputChange(event)}
                    type="text"
                    placeholder="Search Employee"
                />
            </form>
        </div>
    )
}