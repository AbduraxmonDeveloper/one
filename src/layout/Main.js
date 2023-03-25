import React from "react";
import Kinolar from "../components/Kinolar";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component{
    state={
        films: [],
        loading: true
    }

    componentDidMount(){
        this.setState({loading: false})
        fetch(`http://www.omdbapi.com/?apikey=8c03acc4&s=panda`)
        .then(response=>response.json())
        .then(data=>this.setState({films: data.Search, loading: true}))
    }

    // componentDidUpdate(){
    //     console.log(this.state.films);
    // }

    media=(txt, typ)=>{
        this.setState({loading: false})
        fetch(`http://www.omdbapi.com/?apikey=8c03acc4&s=${txt}${typ==='all' ? '' : `&type=${typ}`}`)
        .then(response=>response.json())
        .then(data=>this.setState({films: data.Search, loading: true}))
    }
    
    render(){
        return(
            <div className="content  container">
                <Search qidiruv={this.media} />
                {this.state.loading ? <Kinolar films={this.state.films} /> : <Loader />}
                
            </div>
        )
    }
}