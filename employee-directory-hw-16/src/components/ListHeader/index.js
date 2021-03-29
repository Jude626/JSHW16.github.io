import React from "react";
import Card from "../Card";

class ListHeader extends React.Component {
    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.employeeList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.employeeList !== prevProps.employeeList) {
            this.setState({
                sortedEmployees: this.props.employeeList
            })
        }
    }

    sortName = () => {
        let sortEmployees = [];
        if (this.state.alphabetical) {
            sortEmployees = this.props.employeeList.sort((a,b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if(nameA < nameB)
                return -1
                if (nameA > nameB)
                return 1
            return 0
            })
        } else {
            sortEmployees = this.props.employeeList.sort((a,b) => {
                var nameA
            })
        }
    }


}