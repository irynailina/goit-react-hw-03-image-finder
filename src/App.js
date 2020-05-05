import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import ErrorNotification from "./components/ErrorNotif/ErrorNotification";
import * as imagesAPI from "./services/Api";
import SearchBar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: "",
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = (query) => {
    this.setState({
      isLoading: true,
    });
    imagesAPI
      .fetchImages(query)
      .then(({ data }) =>
        this.setState({
          images: data.hits,
        })
      )
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { images, isLoading, error, query } = this.state;
    return (
      <div>
        <SearchBar
          value={query}
          onChange={this.handleQueryChange}
          onSubmit={this.fetchImages}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && (
          <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        )}
        {images.length > 0 && <ImageGallery images={images} />}
        <Button />
      </div>
    );
  }
}

export default App;
