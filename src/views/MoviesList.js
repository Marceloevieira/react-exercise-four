import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
import { Image } from "../components/Image";
import { PlaylistAddons } from "../components/PlaylistAddons";
import { useMovies } from "../hooks/useMovies";
import { usePlaylistStore } from "../hooks/usePlaylistStore";


export const MovieList = () => {

    const movies = useMovies();
    const { handleAddToPlaylist}  = usePlaylistStore();


    const renderedMovies = movies.map(movie => {
        return (

            <Card.Body key={movie.id} width='300px' heigth='450px' playlist={`.${movie.id}`} >
                <Card.Image src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                <Card.Title>{movie.title}</Card.Title>
                <PlaylistAddons>
                    <Button onClick={() => handleAddToPlaylist(movie) } >Adicionar na Playlist</Button>
                </PlaylistAddons>
            </Card.Body>

        )
    });

    return (
        <>
            <h2>MovieList</h2>
            <Grid>
                {renderedMovies}
            </Grid>
        </>
    )
};