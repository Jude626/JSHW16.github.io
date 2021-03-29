import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
      employees: [],
    };

    componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
      .then(res => {
        this.setState({ employees: res.data.results });
      });
    }

    render() {
      return (
        <div className="App">
          <SiteHead />
          {this.state.employees.length > 0 &&
          <Navbar employees={this.state.employees}/>
          }
        </div>
      );
    }
}