import React, { useState } from "react";
import styles from "./ListItem.module.css";
const ListItem = ({ post }) => {
  const formatDate = (timestamp) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(timestamp * 1000).toLocaleDateString("en-US", options);
  };

  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`card m-3 ${styles.postcards}`}>
      <img
        src={post.thumbnail.small}
        className="card-img-top"
        alt={post.title}
      />
      <div className="card-body">
        {post.id === 4 && (
          <button className="learn-more-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        )}
        <h5 className="card-title" onClick={handleLearnMoreClick}>
          {post.title}
        </h5>
        <p className="card-text">{post.content}</p>
        <div className="d-flex align-items-center">
          <div className="role">
            <p className="mb-0">{post.author.name}</p>
            <p className="mb-0"> -</p>
            <p className="text-muted mb-0 authorrole">{post.author.role}</p>
            <div>
              <p className="text-muted mb-0 date">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="close-button">
              Close
            </button>
            <h5>Learn More Modal</h5>
            <p>This is additional information about the post.</p>
            {/* Include other details as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
