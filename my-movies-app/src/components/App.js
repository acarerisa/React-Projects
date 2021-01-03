import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from 'axios';

class App extends Component {

    state = {
        movies : [ ],
          query : ""
    }
    // async componentDidMount(){
    //   const baseURL = "http://localhost:3002/movies";
    //   const response =await fetch(baseURL);
    //   console.log(response);
    //   const data =await response.json();
    //   console.log(data);
    //   this.setState({movies:data})
    // }
    async componentDidMount(){
      const response = await axios.get("http://localhost:3002/movies");
      this.setState({movies:response.data});
    }

    // deleteMovie = (movie)=>{
    //   const newMovieList = this.state.movies.filter(
    //     m => m.id !== movie.id
    //   );
    //   //this.setState({movies:newMovieList})
    //   this.setState(state=>({movies:newMovieList}))
    // }

    // //Fetch Api ile delete
    // deleteMovie = async(movie)=>{
    //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
    //   await fetch(baseURL,{
    //     method:"DELETE"
    //   })
    //   const newMovieList = this.state.movies.filter(
    //     m => m.id !== movie.id
    //   );
    //   //this.setState({movies:newMovieList})
    //   this.setState(state=>({movies:newMovieList}))
    // }


    //Axios Api ile delete
    deleteMovie = async(movie)=>{
      axios.delete(`http://localhost:3002/movies/${movie.id}`);
      
      const newMovieList = this.state.movies.filter(
        m => m.id !== movie.id
      );
      //this.setState({movies:newMovieList})
      this.setState(state=>({movies:newMovieList}))
    }

    searchMovie=(event)=>{
      this.setState({query:event.target.value})
    }

    render() {
      let filteredMovies = this.state.movies.filter(
        (movie)=> {
          return movie.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
        }
      )
        return (
            <div className="container">
              
                <div className="row">
                  
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>
                <MovieList 
                movies = {filteredMovies}
                deleteSelectedMovie = {this.deleteMovie}
                />
            </div>
        )
    }
}

 


export default App;
