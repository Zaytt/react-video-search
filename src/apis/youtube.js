import axios from 'axios';

const KEY = "AIzaSyB5z_d_IwhAKJF30BsUYqlVAvL4N6yWTao";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});