import { IArtist } from "../interfaces/IArtist";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";

export function setUserProfileData(user: SpotifyApi.CurrentUsersProfileResponse): IUser{

  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  }
}

export function setSpotifyPlaylistData(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url
  }
}

export function setSpotifyArtistData(spotifyArtist: SpotifyApi.ArtistObjectFull): IArtist {
  return {
    id: spotifyArtist.id,
    imageUrl: spotifyArtist.images.sort((a,b) => a.width - b.width).pop().url,
    name: spotifyArtist.name
  }
}
