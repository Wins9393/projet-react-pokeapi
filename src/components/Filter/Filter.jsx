import { Input } from "antd";
import MainContext from "../../contexts";
import { useContext } from "react";

const { Search } = Input;

const Filter = ({ handleFilter }) => {
  const { match, onSearch } = useContext(MainContext);

  if (match) {
  }
  return (
    <>
      <form onSubmit={handleFilter}>
        <Search
          placeholder="input search text"
          style={{ width: 300, height: 40 }}
          onSearch={onSearch}
          enterButton
        />
      </form>
    </>
  );
};

export default Filter;
