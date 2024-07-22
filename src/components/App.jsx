import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar";
import { Component } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import Modal from './Modal';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '44045744-87391f93bf3caee56476bbdd7';
const INITIAL_PER_PAGE = 12;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: '',
      error: null,
      loading: false,
      per_page: INITIAL_PER_PAGE,
      showModal: false,
      selectedImage: null,
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  async getPhotos(query) {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
      );
      this.setState({ images: response.data.hits, query, loading: false });
    } catch (error) {
      console.log('Error  searching images', error);
      this.setState({ error: 'Error  searching images' });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleModal = imageUrl => {
    this.setState({
      showModal: true,
      selectedImage: imageUrl,
    });
  };

  handleModalClose() {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  }
  render() {
    const { images, loading, error, showModal, selectedImage } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.getPhotos} />
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ImageGallery
            images={images}
            handleClick={this.handleModal}
          ></ImageGallery>
        )}
        {showModal && (
          <Modal imageUrl= {selectedImage} onClose={this.handleModalClose} />
        )}
        <Button></Button>
      </div>
    );
  }
};
export default App;