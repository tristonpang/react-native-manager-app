import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label='Name'
                        placeholder='John Doe'
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='Phone'
                        placeholder='1234-5678'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label='Monday' value='monday' />
                        <Picker.Item label='Tuesday' value='tuesday' />
                        <Picker.Item label='Wednesday' value='wednesday' />
                        <Picker.Item label='Thursday' value='thursday' />
                        <Picker.Item label='Friday' value='friday' />
                        <Picker.Item label='Saturday' value='saturday' />
                        <Picker.Item label='Sunday' value='sunday' />
                    </Picker>
                </CardSection>
            </View>
        );
        
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);