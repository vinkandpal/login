import React, {useRef} from 'react';
import TextField from '../../components/UI/Input/TextField';
import PasswordField from '../../components/UI/Input/PasswordField';
import Button from '../../components/UI/Button/Button';
import ValidationMsgs from './Validation-messages'
import classes from './CreateAccount.scss';

const CreatAccount = ( props ) => {
    
    const SubmitBtnHandler = (e)=>{
        e.preventDefault();
        props.submitHandler();
    };

    const formRef = useRef();

    const getFiledsProps = (props, element) => {
        let className = element.classNames;
        let fieldRefClsName = "fieldId-" + element.id;

        if (element.className) {
            className += " " + element.className;
        }

        let inputProps = {
            value: "",
            large: true,
            placeholder: element.placeHolder,
            inputclass: className + "  " + fieldRefClsName,
            name: element.config.name,
            "data-id": element.id,
            id: element.id,
            key: element.id,
            onChange: props.handleInputChange
        };

        
        inputProps.label = element.config.name;
        if (element.config.valid) {
            inputProps.error = true;
            inputProps.errorMessage = ValidationMsgs[element.id][element.config.errorType || 'invalid'];
        }
        if (element.config.value) {
            inputProps.valid = true;
        }

        return inputProps;
    };

    let displayField = () => {
        let inlineStyle = props.inlineStyle;
        let containerClass = "row create-account-wrap__form";

        let fieldViewList = props.fieldElement.map((element, index) => {
            const inputProps = getFiledsProps(props, element);
            const columClass = element.config.multiElem ? 'col-xs-6' : 'col-xs-12';
            let viewElement = null;

            switch (element.config.elementConfig.type) {
                case "text":
                    viewElement = <TextField {...inputProps} />;
                    break;

                case "password":
                    viewElement = <PasswordField showPassword={true} {...inputProps} />;
                    break;

                case "option":
                case "options":
                    break;

                case "radio":
                    
            }

            return (
                <React.Fragment key={element.id}>
                    <div className={props.fieldElement.gridColumn} className={columClass}>
                        {viewElement}
                    </div>
                </React.Fragment>
            );
        });

        return (
            <>
            <div className={containerClass} style={inlineStyle} ref={formRef}>
                {fieldViewList}
            </div>
            <div className="row create-account-wrap__submit-btn">
                <div className="col-xs-12">
                    <Button
                        classes="btn btn-primary btn-lg btn-block"
                        size="md"
                        variant="primary"
                        fullWidth={true}
                        label='Submit'
                        autoid="login-page-button-submit-button"
                        onClick={SubmitBtnHandler}
                        data-loading-text="Verifying..."
                        aria-label="Submit button" 
                        id="verify_user_btn" 
                      >
                    </Button>
                </div>
            </div>
            </>
        );
    };

    return <React.Fragment key={props.id}>

    {displayField()}
 
    </React.Fragment>;


};

export default CreatAccount;