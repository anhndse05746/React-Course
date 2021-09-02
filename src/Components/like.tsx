import React from "react";

export interface LikeProps {
  like: boolean;
  onClick: () => void;
}

const Like: React.FC<LikeProps> = ({ like, onClick }) => {
  let text = "fa fa-heart";
  const getIcon = (like: boolean) => (like === true ? text : (text += "-o"));
  return (
    <i
      onClick={onClick}
      className={getIcon(like)}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
