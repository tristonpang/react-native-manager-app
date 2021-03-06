import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';


class EmployeeEdit extends Component {
    state = { isModalVisible: false };

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
        //iterate over every key value pair and create an action for each pair
        //to update state
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.isModalVisible}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>

        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeSave, 
    employeeDelete 
})(EmployeeEdit);
