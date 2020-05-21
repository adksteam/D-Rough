import React,{ Component } from 'react';

class Login extends Component{
    state = {
        username:'',
        password:''
    }
    loginform = (e) => {
        e.preventDefault();
        //this.props.router.push('/customers');
    }
    onChange = (e)=> this.setState({[e.target.name]:[e.target.value]});
    render(){
        
        return(
            <form  onSubmit={this.loginform.bind(this)}>
                <label>UserName: </label><br/>
                <input  type="text" name="username" onChange={this.onChange} values={this.state.username}/><br/><br/>
                <label>Password: </label><br/>
                <input  type="password" onChange={this.onChange} name="password" values={this.state.password}/><br/><br/>
                <button type="submit">Submit</button><br/>
            </form>
        );
    }
}
export default Login;