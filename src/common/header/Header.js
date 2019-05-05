import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer = function(props){
    return(
        <Typography component='div' style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            signupPassword: '',
            contact: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            firstnameRequired: 'dispNone',
            lastnameRequired: 'dispNone',
            emailRequired: 'dispNone',
            SignupPasswordRequired: 'dispNone',
            ContactRequired: 'dispNone'
        };
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
        this.setState({value: 0})
        this.setState({usernameRequired: 'dispNone'})
        this.setState({passwordRequired: 'dispNone'})
        this.setState({firstnameRequired: 'dispNone'})
        this.setState({lastnameRequired: 'dispNone'})
        this.setState({emailRequired: 'dispNone'})
        this.setState({SignupPasswordRequired: 'dispNone'})
        this.setState({contactRequired: 'dispNone'})
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }

    tabChangeHandler = (event, value) =>{
        this.setState({value});
    }

    loginClickHandler = () =>{
        this.state.username === "" ? this.setState({usernameRequired: 'dispBlock'})
        : this.setState({usernameRequired: 'dispNone'}); 

        this.state.password === "" ? this.setState({passwordRequired: 'dispBlock'})
        : this.setState({passwordRequired: 'dispNone'}); 
    }

    signupClickHandler = () =>{
        this.state.firstname === "" ? this.setState({firstnameRequired: 'dispBlock'})
        : this.setState({firstnameRequired: 'dispNone'});

        this.state.lastname === "" ? this.setState({lastnameRequired: 'dispBlock'})
        : this.setState({lastnameRequired: 'dispNone'});

        this.state.email === "" ? this.setState({emailRequired: 'dispBlock'})
        : this.setState({emailRequired: 'dispNone'});

        this.state.signupPassword === "" ? this.setState({SignupPasswordRequired: 'dispBlock'})
        : this.setState({SignupPasswordRequired: 'dispNone'});

        this.state.contact === "" ? this.setState({ContactRequired: 'dispBlock'})
        : this.setState({ContactRequired: 'dispNone'});
    }

    inputUsernameChangeHandler = (e) =>{
        this.setState({username: e.target.value});
    }

    inputPasswordChangeHandler = (e) =>{
        this.setState({password: e.target.value});
    }

    inputFirstnameChangeHandler = (e) =>{
        this.setState({firstname: e.target.value});
    }

    inputLastnameChangeHandler = (e) =>{
        this.setState({lastname: e.target.value});
    }

    inputEmailChangeHandler = (e) =>{
        this.setState({email: e.target.value});
    }

    inputSignupPasswordChangeHandler = (e) =>{
        this.setState({signupPassword: e.target.value});
    }

    inputContactChangeHandler = (e) =>{
        this.setState({contact: e.target.value});
    }
    
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}> Login </Button>
                    </div>
                </header>
                <Modal 
                    ariaHideApp={false} 
                    isOpen={this.state.modalIsOpen} 
                    contentLabel="Login" 
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}>
                    <Tabs className='tabs' value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='username'> Username </InputLabel>
                            <Input id='username' type='text' username={this.state.username}
                            onChange={this.inputUsernameChangeHandler} />
                            <FormHelperText className={this.state.usernameRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'> Password </InputLabel>
                            <Input id='password' type='password' 
                            onChange={this.inputPasswordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant='contained' color='primary' onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}

                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='firstname'> First Name </InputLabel>
                            <Input id='firstname' type='text' firstname={this.state.firstname}
                            onChange={this.inputFirstnameChangeHandler} />
                            <FormHelperText className={this.state.firstnameRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='lastname'> Last Name </InputLabel>
                            <Input id='lastname' type='text' lastname={this.state.lastname}
                            onChange={this.inputLastnameChangeHandler} />
                            <FormHelperText className={this.state.lastnameRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='email'> Email </InputLabel>
                            <Input id='email' type='text' email={this.state.lastname}
                            onChange={this.inputEmailChangeHandler} />
                            <FormHelperText className={this.state.emailRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='signupPassword'> Password </InputLabel>
                            <Input id='signupPassword' type='password'
                            onChange={this.inputSignupPasswordChangeHandler} />
                            <FormHelperText className={this.state.SignupPasswordRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='contact'> Contact </InputLabel>
                            <Input id='contact' type='text'
                            onChange={this.inputContactChangeHandler} />
                            <FormHelperText className={this.state.ContactRequired}>
                            <span className='red'>required</span></FormHelperText>
                        </FormControl><br/><br/>

                        <Button variant='contained' color='primary' onClick={this.signupClickHandler}>SIGNUP</Button>
                    </TabContainer>}

                </Modal>
            </div>
        )
    }
}

export default Header;