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
        let values =
    })
}