import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface RouteParam {
  id: string;
}

interface MovieFormProps extends RouteComponentProps<RouteParam> {}

const MovieForm: React.FC<MovieFormProps> = ({ match, history }) => {
  const onSave = () => {
    history.push("/movies");
  };
  return (
    <div>
      <div>Movie Form {match.params.id}</div>
      <button className="btn btn-primary btn-sm" onClick={onSave}>
        Save
      </button>
    </div>
  );
};
export default MovieForm;
