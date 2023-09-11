import { Container } from "./App.module";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostsApiService from './api'
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const postApiService = new PostsApiService();

export class App extends Component {
  
  state = {
    searchQuery: ``,
    galleryItems: [],
    galleryPage: 1,

    loading: false,
    isButtonShow: false,
    error: false,
  }

  componentDidUpdate(_, prevState) {
    const {searchQuery, galleryPage} = this.state

    if (prevState.searchQuery !== searchQuery || prevState.galleryPage !== galleryPage) {
        this.fetchGalleryItems(searchQuery, galleryPage);
    } 
  }

  fetchGalleryItems = (searchQuery, galleryPage) => {
    this.setState({ loading: true, error: false });


    postApiService.fetchPost(searchQuery, galleryPage).then(data => {
      
      if (!data.totalHits) {
        this.setState({ loading: false, error: true });
        return toast.warn(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      const newData = data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      this.setState(prevState => ({
        galleryItems: [...prevState.galleryItems, ...newData],
        isButtonShow:  (galleryPage <= Math.ceil(data.totalHits / 12)),
        error: false,
      }))
      
     
      
    }).finally(
      this.setState({
        loading: false,
        isButtonShow: true,
        error: false,
      })
    )
  };

  formSubmit = searchQuery => {
    this.setState({ 
      searchQuery,
      galleryItems: [],
      galleryPage: 1,
      
      loading: false,
      isButtonShow: false,
      error: true,
     });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      galleryPage: prevState.galleryPage + 1,
    }));
  };

  render() {
    const { galleryItems, loading, isButtonShow, error } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.formSubmit} />

        {error && <h2>Please, enter search word!</h2>}
        {galleryItems.length > 0 && <ImageGallery galleryItems={galleryItems} />}
        {loading && <Loader />}
        {isButtonShow && <Button onClick={this.onLoadMore} />}
        <ToastContainer autoClose={3000} theme="dark" />
      </Container>
    );
  }
}