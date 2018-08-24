import React from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Loading from "./Loading";
import Error from "./Error";
export const GET_MOVIE_DETAILS = gql`
query getMovieDetails($mviName: String){
    movie(mviName: $mviName){
        id
        year
        director
    }
}
` ;
export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: "The Dark Knight"
        }
    }
    render() {
        return (
            <div className = "movie-details">
                <Query query={GET_MOVIE_DETAILS} variables={this.state.movieName}>
                    {({loading, error, data}) => {
                        if(loading) {
                            return <Loading/>
                        }
                        if(error){
                            return <Error/>
                        }
                        return (
                            <div className="movie-details">
                                <p>ID: {data.movie.id}</p>
                                <p>Year: {data.movie.year}</p>
                                <p>Director: {data.movie.director}</p>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}