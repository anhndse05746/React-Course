import React from "react";

export interface ListGroupProps {
  items: any[];
  textProperty?: string;
  valueProperty?: string;
  selectedItem: any;
  onItemSelect: (item: any) => void;
}

const ListGroup: React.FC<ListGroupProps> = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty = "name",
  valueProperty = "_id",
}) => {
  const getItemClass = (item: any) => {
    return item === selectedItem ? "list-group-item active" : "list-group-item";
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={getItemClass(item) + " clickable"}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
