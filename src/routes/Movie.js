import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIES = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      small_cover_image
    }
  }
`;

export default function Movie() {
    const {id} = useParams();
    const {data, loading} = useQuery(GET_MOVIES, {
        variables: {
            movieId:id
        }
    })
    if(loading) {
        return <h1>Fetchinf movie</h1>
    }
    return <div>{data.movie.title}</div>;
}
