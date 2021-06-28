import axios from 'axios';
import config from '../config';

export async function OAuthTwitch() {
    const twitchAPI = 'https://id.twitch.tv/oauth2/token?client_id=' + config.clientID + '&client_secret=' + config.clientSecret + '&grant_type=' + config.grantType
    axios.post(twitchAPI)
         .then(response => {
           console.log(response.data.access_token)
           config.OAuth = response.data.access_token;
         })
         .catch(error => {
           console.log("error", error);
         });
}

export async function getChannel() {
    const twitchApi = 'https://api.twitch.tv/helix/users?login=' + config.channelName;
    console.log('test', config.OAuth);
    axios.get(twitchApi, {
        headers: {
            'client-id': config.clientID,
            Authorization: 'Bearer ' + config.OAuth
          }
    })
         .then(response => {
           console.log(response)
         })
         .catch(error => {
           console.log("error", error);
         });
}