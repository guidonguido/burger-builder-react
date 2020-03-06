import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => 
{   
    return class extends React.Component
    {   state ={
            error:false
        }
        
        componentWillMount () {
            this.responseInterceptor = axios.interceptors.response.use(req => req,error =>
                {   this.setState({error:error});
                });
            
            this.requestInterceptor = axios.interceptors.request.use(request=>
                {   this.setState({error:null});
                    return request;

                });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () =>
        {
            this.setState({error:null});
        }
        
        render () {
            return(
                <Auxiliary>
                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                    {this.state.error? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Auxiliary>)
    }
}
};
        
     
export default withErrorHandler;