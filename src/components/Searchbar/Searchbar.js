import React from "react";
import styles from "./searchBar.module.css";


 const handleSubmit = (e, fetchImages) => {
    e.preventDefault();
    fetchImages();
    
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
