import React from "react";
import styles from "./searchBar.module.css";

// class Searchbar extends Component {
  // state = {
  //   // query: "",
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     query: e.target.value,
  //   });
  // };

 const handleSubmit = (e, fetchImages) => {
    e.preventDefault();
    // this.props.onSubmit();
    fetchImages()
    // this.setState({
    //   query: "",
    // });
  };

const Searchbar = ({fetchImages, query, handleQueryChange }) => (
  <>
  <header className={styles.Searchbar}>
    <form onSubmit={(e) => handleSubmit(e, fetchImages)} className={styles.SearchForm}>
      <button type="button" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>
      <input
        className={styles.SearchFormInput}
        value={query}
        onChange={handleQueryChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
</>
);

export default Searchbar;

//   render() {
//     // const { query } = this.state;
//     return (
//       <>
//         <header className={styles.Searchbar}>
//           <form onSubmit={this.props.fetchImages} className={styles.SearchForm}>
//             <button type="button" className={styles.SearchFormButton}>
//               <span className={styles.SearchFormButtonLabel}>Search</span>
//             </button>
//             <input
//               className={styles.SearchFormInput}
//               value={this.props.query}
//               onChange={this.props.handleQueryChange}
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }

// export default Searchbar;
