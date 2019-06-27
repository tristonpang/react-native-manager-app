import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }

    renderItem(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        console.log(this.props);
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(employee) => employee.uid.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
        /* employees is a new array, where each element is 
        an object {name: 'example', shift: 'Monday', uid: 'example_uid'}*/
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
