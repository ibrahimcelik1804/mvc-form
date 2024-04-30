import React from "react";

const PopupView = ({ setShowPopup, userName, data }) => {
  console.log(data);
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> kullanıcısının gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>X</button>
        </div>
        {data?.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
