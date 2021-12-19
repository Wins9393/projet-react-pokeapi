import { Input } from "antd";
import MainContext from "../../contexts";
import { useContext } from "react";

const { Search } = Input;

// const onSearch = (value) => console.log(value);

const Filter = ({ handleFilter, inputSearched }) => {
  const { match } = useContext(MainContext);
  if (match) {
    console.log(match.params.slug);
  }
  return (
    <>
      <form onSubmit={handleFilter}>
        <Search
          placeholder="input search text"
          style={{ width: 300, height: 40 }}
          // onSearch={onSearch}
          enterButton
        />
      </form>
      <p>{inputSearched}</p>
    </>
  );
};

export default Filter;
