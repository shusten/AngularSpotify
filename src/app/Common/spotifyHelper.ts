import { IUser } from "../interfaces/IUser";

export function setUserProfileData(user: SpotifyApi.CurrentUsersProfileResponse): IUser{

  return {
    id: user.id,
    name: user.birthdate,
    imageUrl: user.images.pop().url
  }

}
