import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {loggedOut} from '../Redux/Reducer/authSlice';
import {store} from '../Redux/Store/store';

const axiosInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
});

const apiInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

apiInstance.interceptors.request.use(
  config => {
    const token = store.getState()?.auth?.token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const fetchSpotifyToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '252604bd30f54ebe947169ecf123b04a');
    params.append('client_secret', '715eb2b01c8e482cb0721afc08814cec');
    const accessToken = await AsyncStorage.getItem('access_token');
    console.log('token above condition', accessToken);

    const response = await axiosInstance.post('/token', params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const {access_token} = response.data;
    console.log('Access token:', access_token);

    await AsyncStorage.setItem('access_token', access_token);
    console.log(accessToken);

    return access_token;
    // }
  } catch (error: any) {
    console.error(
      'Error fetching access token:',
      error.response?.data || error,
    );
  }
};

apiInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(loggedOut());
    }
    return Promise.reject(error);
  },
);

export async function getCategories() {
  try {
    const response = await apiInstance.get('/browse/categories');

    // console.log('reponse ==> ', JSON.stringify(response, null, 2))
    return response;
  } catch (error) {
    console.log('error ==> ', error);
  }
}

export const getGenres = async () => {
  try {
    const Genres = await axios.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
    );
    // console.log('Genres ========>', Genres);
    return Genres;
  } catch (error) {
    console.log('error', error);
  }
};

export const getAlbums = async () => {
  try {
    const albums = await apiInstance.get('/browse/new-releases');
    // console.log('artist ========>', JSON.stringify(albums.data.albums, null, 2));
    return albums;
  } catch (error) {
    console.log('error', error);
  }
};

export const getTracks = async () => {
  try {
    // console.log('accesstoken =====', accesstoken);
    const tracks = await apiInstance.get(
      '/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
    );
    // console.log('track ========>', JSON.stringify(tracks, null, 2));
    return tracks;
  } catch (error) {
    console.log('error', error);
  }
};

export const getRecommendation = async () => {
  try {
    const recommendations = await apiInstance.get(
      '/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
    );
    return recommendations;
  } catch (error) {
    console.log('error', error);
  }
};

export const getAlbumSongs = async (id: string) => {
  try {
    const albumSongs = await apiInstance.get(`/albums/${id}`);
    return albumSongs;
  } catch (error) {
    console.log('error', error);
  }
};

export const getSongs = async (id: string) => {
  try {
    const albumSongs = await apiInstance.get(`/tracks/${id}`);

    return albumSongs;
  } catch (error) {
    console.log('error', error);
  }
};
