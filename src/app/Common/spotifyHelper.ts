import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";

export function setUserProfileData(user: SpotifyApi.CurrentUsersProfileResponse): IUser{

  return {
    id: user.id,
    name: user.birthdate,
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
