import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

// export default class Bookmark extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLiked: false,
//     };
//     this.onLike = this.onLike.bind(this);
//   }

//   onLike() {
//     this.setState(({ isLiked }) => ({
//       isLiked: !isLiked,
//     }));
//   }

//   render() {
//     const { isLiked } = this.state;
//     let classNames = 'bi bi-bookmark-heart';
//     if (isLiked) classNames += '-fill';
//     return (
//       <a href="/">
//         <i onClick={(e) => {
//           e.preventDefault()
//           this.onLike()}
//         }
//           className={classNames}></i>
//       </a>
//     );
//   }
// }

const Bookmark = ({ status, onBookmark }) => {
  let classNames = 'bi bi-bookmark-heart';
  if (status) classNames += '-fill';
  return (
    <a href="/">
      <i
        className={classNames}
        onClick={(e) => {
          e.preventDefault();
          onBookmark();
        }}
      ></i>
    </a>
  );
};

export default Bookmark;
