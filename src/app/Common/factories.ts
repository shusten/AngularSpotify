import { IArtist } from "../interfaces/IArtist";
import { IMusic } from "../interfaces/IMusics";

export function newArtist(): IArtist {
  return {
    id: '',
    name: '',
    imageUrl: '',
  }
}

export function newMusic(): IMusic {
  return {
    id: '',
    title: '',
    album: {
      id: '',
      imageUrl: '',
      name: ''
    },
    artists: [],
    time: '',
  }
}
