import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createStream} from './../../actions/';
import {connect} from 'react-redux';

class StreamCreate extends Component {

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input,label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        );
    }

    //Alternative solution
    // renderInput(formProps) {
    //     return  ( 
    //         <input 
    //             onChange={formProps.input.onChange} 
    //             value={formProps.input.value}
    //         />
    //     );
    // }

    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.createStream(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }
    if(!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default  connect(null, {createStream})(formWrapped);
