import React, {Component} from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../assets/movieData';

class Details extends Component {

    constructor(){
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];

        this.setState(currentState);
        console.log(currentState);
    }

    render() {
        return(
        <div className='detials'>
            <Header />
            <div className='flex-containerDetails'>
                <div className='leftDetials'>
                </div>
                <div className='midleDetails'>
                </div>
                <div className='rightDetails'>
                </div>
            </div>
        </div>);
    }
}

export default Details;