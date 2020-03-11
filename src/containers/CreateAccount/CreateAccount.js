import React, {Component} from 'react';

import BaseService from '../../app/services/BaseService';
import CreateAccountForm from './CreateAccountForm';
import LinkNav from '../../components/LinkNav/LinkNav';
import FormHeader from '../../components/FormHeader/FormHeader';

import './CreateAccount.scss';

class CreatAccount extends Component{
    state = {
        loginForm: {
            firstName: {
                name: "First Name",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name"
                },
                validation: {
                    required: true
                },
                multiElem: true,
                value: '',
                valid: false,
                touched: false,
                repeatElm: false
            },
            lastName: {
                name: "Last Name",
                elementConfig: {
                    type: "text",
                    placeholder: "Last Name"
                },
                validation: {
                    required: true
                },
                value: '',
                multiElem: true,
                valid: false,
                touched: false
            },
            Username: {
                name: "Username",
                elementConfig: {
                    type: "text",
                    placeholder: "Username"
                },
                validation: {
                    required: true
                },
                value: '',
                multiElem: false,
                valid: false,
                touched: false
            },
            reTypeUsername: {
                name: "Re-type Username",
                elementConfig: {
                    type: "text",
                    placeholder: "Re-type Username"
                },
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 10
                },
                value: '',
                multiElem: false,
                valid: false,
                touched: false,
                skip: true
            },
            Password: {
                name: "Password",
                elementConfig: {
                    type: "password",
                    placeholder: "Password"
                },
                validation: {
                    required: true,
                    minLength: 4
                },
                value: '',
                multiElem: false,
                valid: false,
                touched: false
            },
            reTypePassword: {
                name: "Re-type Password",
                elementConfig: {
                    type: "password",
                    placeholder: "Re-type Password"
                },
                validation: {
                    required: true,
                    minLength: 4
                },
                value: '',
                multiElem: false,
                valid: false,
                touched: false,
                skip: true
            },
        },
        formIsValid: false,
        loading: false,
        message: '',
        result: []
    };

    signInHandler = (e)=>{
        e.preventDefault();
        this.props.navigate('signIn', {from: 'createAcc'});
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if(!rules){
          return true;
        }

        if(rules.required){
          isValid = isValid && (value.trim() !== '');
        }

        return isValid;

    };

  handleInputChange = (event, element)=>{
        const updatedLoginForm = {...this.state.loginForm};
        const updatedLoginFormElement = { ...updatedLoginForm[element] };

        updatedLoginFormElement.value = event.target.value;
        updatedLoginFormElement.valid = !this.checkValidity(updatedLoginFormElement.value, updatedLoginFormElement.validation);
        updatedLoginFormElement.touched = true;

        updatedLoginForm[element] = updatedLoginFormElement;
        let formIsValid = true;
        for(let key in updatedLoginForm) {
          formIsValid = formIsValid && updatedLoginForm[key].valid;
        }
        this.setState((state, props) => ({loginForm: updatedLoginForm, formIsValid: formIsValid}));
  };

  reEnterValidation = (element, tempForm) => {
    if(element.indexOf('reType')>=0 ){
        let elemValue = tempForm[element],
            a = element.substring(6);
       if (!elemValue.value || tempForm[element].value!==tempForm[a].value){  
            elemValue.valid=true;
            elemValue.errorType = 'mismatch';
            this.isError = true;
        } else {
            elemValue.valid=false;
            elemValue.errorMsg = '';
      }
    }   
  };

  validateLoginForm = () => {
        this.isError = false;
        let tempForm = this.state.loginForm;
        for(let element in tempForm){
          let elemValue = tempForm[element];
          if(!elemValue.value){
            elemValue.valid=true;
            this.isError = true;
          }
          this.reEnterValidation(element, tempForm);
        }
        this.tempForm = tempForm;
  };

  getPostData = () => {
    let tempData = {};
        for(let element in this.state.loginForm){
          let data = this.state.loginForm[element];
          if(data.validation.required && !data.skip){
            tempData[element] = data.value;
          }
        }
    return tempData;
  };

  postLoginFormData = () => {
    let postData = this.getPostData();
    BaseService.makecall({url: '/users', data: postData})
        .then((response) => {
          this.props.navigate('signIn', {'accountCreated': true, from: 'createAcc', ...postData});
        })
        .catch((error) => {
          // error handling
        });
  };

  formSubmitHandler = () => {
        this.validateLoginForm();
        this.setState({loginForm: this.tempForm});
        
        if(!this.isError){
            this.postLoginFormData();
        }
  };
    
render(){ 
        const formElementArrary = [];
        for(let key in this.state.loginForm){
          let elem = this.state.loginForm[key]
              formElementArrary.push({
                id: key,
                config: elem
              })
          if(elem.repeatElm) {
            formElementArrary.push({
                id: 'Re_'+key,
                config: {...elem, name: 'Re-type '+elem.name}
              });
          }
        }

        return (
            <form className='create-account-wrap'>
               <FormHeader screenType='create-account' classes='create-account-wrap__header' /> 
               <CreateAccountForm fieldElement={formElementArrary} submitHandler={this.formSubmitHandler.bind(this)} handleInputChange={this.handleInputChange.bind(this)} />
                <LinkNav preLinkContent='create-acc-footer' 
                        linkContent='create-acc-flink' 
                        clickHandler={this.signInHandler.bind(this)} classes='create-account-wrap__link'
                />
            </form>
            )
        }
    };

export default CreatAccount;