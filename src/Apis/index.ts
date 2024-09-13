import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const fetchSpotifyToken = async () => {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', '2d3845c960e04d32af4d1d92255a4010'); // Your client ID
      params.append('client_secret', '4391eb1e32794453a865f329d30dca8d'); // Your client secret

      const accessToken = await AsyncStorage.getItem('access_token');
      console.log('token above condition',accessToken);

      if(accessToken) {
        return accessToken
      }
      

      if(!accessToken){  
          const response = await axios.post(
              'https://accounts.spotify.com/api/token',
              params.toString(), // Ensure it's properly stringified
              {
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded', // Required for form data
                    },
                }
            );
            
            const { access_token } = response.data;
            console.log('Access token:', access_token);
            
            await AsyncStorage.setItem('access_token', access_token); // Save the token in AsyncStorage (for React Native)
            return access_token;
        }
    } catch (error) {
      console.error('Error fetching access token:', error.response?.data || error);
    }
  };



export async function getCategories() {
  try {
    const accessToken = await AsyncStorage.getItem('access_token');
    console.log( 'on getCategories', accessToken);
    
    console.log('Retrieved access token:', accessToken); 
    if (!accessToken) {
      console.log('No access token found');
      return;
    }

    const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
    
    console.log('reponse ==> ', JSON.stringify(response, null, 2))
    return response
  } catch (error) {
    console.log('error ==> ', error );
  }
}
