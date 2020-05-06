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
    page: 1,
  };

  // componentDidMount() {
  //   this.getImages();
  // }

  

  getImages = (e) => {
    this.setState({
      isLoading: true,
    });
    imagesAPI
      .fetchImages(this.state.query, 1)
      .then(({ data }) =>
        this.setState({
          images:[...data.hits],
          // page: prevState.page + 1
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
    e.persist()
    this.setState({
      query: e.target.value,
    });
  };

  loadMoreBtn =  () => {
    // console.log('hello');
    console.log(this.state.page);
    console.log(this.state.query);
    imagesAPI.fetchImages(this.state.query, this.state.page + 1)
    .then(({ data }) =>
    this.setState((prevState) => ({
      page: prevState.page + 1,
      images: [...prevState.images, ...data.hits]
    }))

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

  render() {
    const { images, isLoading, error, query } = this.state;
    return (
      <div>
        <SearchBar
          query={query}
          handleQueryChange={this.handleQueryChange}
          fetchImages={this.getImages}
        />
        {/* {error && <ErrorNotification text={error.message} />} */}
        {/* {isLoading && (
          <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        )} */}
         <ImageGallery images={images} />
        <Button loadMoreBtn={this.loadMoreBtn} />
      </div>
    );
  }
}

export default App;
