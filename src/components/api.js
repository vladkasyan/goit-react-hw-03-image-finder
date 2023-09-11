import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31107721-7ee60bad5b686af5fdf0a833c';

export default class PostsApiService {


  async fetchPost(searchQuery, page) {
    const OPTIONS = new URLSearchParams({
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    });

    try {
      const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
      return response.data;
    } catch (error) {
      console.error(error.toJSON());
    }
  }

 
}