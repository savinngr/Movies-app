import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InuptLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
        <Typography component='div' style={{padding: 0}}>
            {props.children}
        </Typography>
    );
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0
        };
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false })
    }

    tabChangeHandler = (event, value) =>{
        this.setState({value});
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
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER" />
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='username'> Username </InputLabel>
                            <Input id='username' type='text' />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='password'> Password </InputLabel>
                            <Input id='password' type='password' />
                        </FormControl>
                    </TabContainer>
                </Modal>
            </div>
        )
    }
}

export default Header;