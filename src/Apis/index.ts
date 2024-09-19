import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const fetchSpotifyToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '3e54cdfff4614487a4d334f528f9698a');
    params.append('client_secret', '36025b877230438691105c08c16a90dc');
    const accessToken = await AsyncStorage.getItem('access_token');
    console.log('token above condition', accessToken);


    // const axiosInstance = axios.create({
    //   baseURL: 'https://accounts.spotify.com/api/token',
    //   // other configurations
    // })
    
    // axiosInstance.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (error.response && error.response.status === 401) {
    //       console.log('call the refresh token api here')
    //       // Handle 401 error, e.g., redirect to login or refresh token
    //     }
    //     return Promise.reject(error)
    //   },
    // )
    

    if (accessToken) {
      return accessToken;
    }

    if (!accessToken) {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        params.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      const {access_token} = response.data;
      console.log('Access token:', access_token);

      await AsyncStorage.setItem('access_token', access_token);
      console.log(accessToken);
      
      return access_token;
    }
  } catch (error) {
    console.error(
      'Error fetching access token:',
      error.response?.data || error,
    );
  }
};

export async function getCategories() {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    console.log('on getCategories', accessToken);

    console.log('Retrieved access token:', accessToken);
    if (!accessToken) {
      console.log('No access token found');
      return;
    }

    const response = await axios.get(
      'https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      },
    );

    // console.log('reponse ==> ', JSON.stringify(response, null, 2))
    return response;
  } catch (error) {
    console.log('error ==> ', error);
  }
}

export const getGenres = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    const Genres = await axios.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    // console.log('Genres ========>', Genres);
    return Genres;
  } catch (error) {
    console.log('error', error);
  }
};

export const getAlbums = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    const albums = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    // console.log('artist ========>', JSON.stringify(albums.data.albums, null, 2));
    return albums;
  } catch (error) {
    console.log('error', error);
  }
};



export const getTracks = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    // console.log('accesstoken =====', accesstoken);
    const tracks = await axios.get(
      'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    // console.log('track ========>', JSON.stringify(tracks, null, 2));
    return tracks;
  } catch (error) {
    console.log('error', error);
  }
};


export const getRecommendation = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token')
    const recommendations = await axios.get(
      'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
      {
        headers : {Authorization : 'Bearer ' + accessToken},
      },
    )
    return recommendations
  } catch  (error) {
    console.log('error' , error);
    
  }
}

export const getAlbumSongs = async (id : string) =>  {
  try{
    const accessToken = await AsyncStorage.getItem('access_token')
    const albumSongs = await axios.get(
      `https://api.spotify.com/v1/albums/${id}`, {
        headers : {Authorization : 'Bearer ' + accessToken},

      }
    )
    return albumSongs
  } catch (error) {
    console.log('error' , error);
    
  }

}



export const getSongs = async (id : string) =>  {
  try{
    const accessToken = await AsyncStorage.getItem('access_token')
    const albumSongs = await axios.get(
      `https://api.spotify.com/v1/tracks/${id}`, {
        headers : {Authorization : 'Bearer ' + accessToken},

      }
    )
    
    return albumSongs
  } catch (error) {
    console.log('error' , error);
    
  }

}

export const getFeaturedPlaylist = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
      let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://api.spotify.com/v1/browse/featured-playlists',
          headers: {
              Authorization: 'Bearer ' + accesstoken
          }
      };
      const response = await axios.request(config);
      return response.data;
  } catch (error) {
      throw error;
  }
};



