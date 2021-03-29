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
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmployees
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div>Profile Picture</div>
                    <div><p onClick={this.sortName} className="name">Name</p></div>
                    <div>Gender</div>
                    <div>Age</div>
                    <div>Phone</div>
                    <div>Email</div>
                </div>

                { this.state.sortedEmployees.length > 0 &&
                  this.state.sortedEmployees.map((item, index) => (
                    <Card
                        image={item.picture.large}
                        first={item.name.first}
                        last={item.name.last}
                        title={item.name.title}
                        gender={item.gender}
                        age={item.dob.age}
                        phone={item.cell}
                        email={item.email}
                />

                  ))}
            </div>
        )
    }

}