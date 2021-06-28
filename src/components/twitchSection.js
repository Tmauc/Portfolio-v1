import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import config from '../config.json';

class TwitchSection extends React.Component {
    constructor() {
        super();
        this.state = { user: [], channel: [], stream: [], clips: [], videos: [] };
    }

    componentDidMount() {
        this.fetchTwitch();
    }

    async fetchTwitch() {
        const OAuthRequest = await axios.post('https://id.twitch.tv/oauth2/token?client_id=' + config.clientID + '&client_secret=' + config.clientSecret + '&grant_type=' + config.grantType)
            .then(response => {
                config.OAuth = response.data.access_token
                return (response.data.access_token)
            })
            .catch(error => {
                console.log("error", error);
            });

        await axios.get('https://api.twitch.tv/helix/users', {
            params: {
                'login': config.channelName,
            },
            headers: {
                'client-id': config.clientID,
                Authorization: 'Bearer ' + OAuthRequest
            }
        })
            .then(response => {
                this.setState({ user: response.data.data[0] })
            })
            .catch(error => {
                console.log("error", error);
            });

        await axios.get('https://api.twitch.tv/helix/streams', {
            params: {
                'user_login': config.channelName,
            },
            headers: {
                'client-id': config.clientID,
                Authorization: 'Bearer ' + OAuthRequest
            }
        })
            .then(response => {
                this.setState({ stream: response.data.data[0] })
            })
            .catch(error => {
                console.log("error", error);
            });

        await axios.get('https://api.twitch.tv/helix/clips', {
            params: {
                'broadcaster_id': config.channelID,
            },
            headers: {
                'client-id': config.clientID,
                Authorization: 'Bearer ' + OAuthRequest
            }
        })
            .then(response => {
                this.setState({ clips: response.data.data })
            })
            .catch(error => {
                console.log("error", error);
            });

        await axios.get('https://api.twitch.tv/helix/videos', {
            params: {
                'user_id': config.channelID,
            },
            headers: {
                'client-id': config.clientID,
                Authorization: 'Bearer ' + OAuthRequest
            }
        })
            .then(response => {
                console.log(response)
                this.setState({ videos: response.data.data })
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    click(pid, bid) {
        var para = document.getElementById(pid);
        var btn = document.getElementById(bid);
        para.style.display === 'block' ? para.style.display = 'none' : para.style.display = 'block';
        btn.innerHTML === '+' ? btn.innerHTML = '-' : btn.innerHTML = '+';
    }

    render() {
        if (this.state.user.length <= 0) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (

                <div className="container twitchDiv">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <h2 className="title">TWITCH</h2>
                            <hr className="line"></hr>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <img src={this.state.user.profile_image_url} className="img-fluid twitchPP" alt="twitch profil images" />
                            {
                                this.state.user.broadcaster_type === 'partner' ? <i className="fa fa-check-circle iconPartner"></i> : <i className=""></i>
                            }
                        </div>
                        <div className="col-lg-6 col-xs-12 center">
                            <div className="text-wrapper">
                                <h2 className="title">{this.state.user.display_name}</h2>
                                <hr className="line"></hr>
                                <p className="about-text">{this.state.user.description}</p>
                            </div>
                        </div>
                        <hr className="longLine"></hr>
                        <div className="col-md-12 col-xs-12">
                            <div className="clipTitle">
                                <h2 className="title paddingTitle">Clips</h2>
                                <Button id="btnClips" variant="light" onClick={() => this.click("clipSection", "btnClips")}>+</Button>
                            </div>
                            <hr className="line"></hr>
                            <div className="clipsSection" id="clipSection">
                                {this.state.clips.map((clip, idx) => (
                                    // eslint-disable-next-line jsx-a11y/iframe-has-title
                                    <iframe className="clipIFrame" key={idx} src={clip.embed_url + '&parent=' + config.localParent + '&parent=' + config.parent} width="480" height="270" allowFullScreen={true} />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="clipTitle">
                                <h2 className="title paddingTitle">Videos</h2>
                                <Button id="btnVideos" variant="light" onClick={() => this.click("videosSection", "btnVideos")}>+</Button>
                            </div>
                            <hr className="line"></hr>
                            <div className="clipsSection" id="videosSection">
                                {this.state.videos.map((video, idx) => (
                                    // eslint-disable-next-line jsx-a11y/iframe-has-title
                                    <iframe className="clipIFrame" key={idx} src={video.url + '&parent=' + config.localParent + '&parent=' + config.parent} width="480" height="270" allowFullScreen={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default TwitchSection;