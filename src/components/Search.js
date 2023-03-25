import React from "react";

export default class Search extends React.Component{
    state={
        search: 'panda',
        type: ''
    }

    handleKey=(e)=>{
        if(e.key==='Enter'){
            this.props.qidiruv(this.state.search, this.state.type)
        }
    }

    handleClick=()=>{
        this.props.qidiruv(this.state.search, this.state.type)
    }

    radioChange=(e)=>{
        console.log(e.target.dataset.type);
        this.setState({type: e.target.dataset.type})
        setTimeout(()=>{
            this.props.qidiruv(this.state.search, this.state.type)
        }, 1000)
       
    }


    render () {
        return (
            <div className="row">
                <div className="input-field col s12">
                <input id="search" 
                    type="search" 
                    className="validate" 
                    onChange={(e)=>{this.setState({search: e.target.value})}}
                    onKeyDown={this.handleKey} 
                    placeholder="Search by title"
                />
                <button className="btn" onClick={this.handleClick}>Search</button>
                </div>
                <div className="category">
            
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.radioChange} />
                        <span>All</span>
                    </label>

                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.radioChange} />
                        <span>Movie</span>
                    </label>

                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.radioChange} />
                        <span>Series</span>
                    </label>

            
                </div>
            </div>
        )
    }
}