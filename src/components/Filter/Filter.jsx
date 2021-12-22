import { Input } from "antd";
import MainContext from "../../contexts";
import { useContext } from "react";

const { Search } = Input;

const Filter = ({ handleFilter }) => {
  const { match, onSearch } = useContext(MainContext);

  if (match) {
    console.log(match.params.slug);
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
      {/* <p>{inputSearched}</p> */}
    </>
  );
};

export default Filter;
