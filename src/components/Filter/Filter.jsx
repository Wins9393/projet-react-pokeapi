import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const Filter = ({ handleFilter, inputSearched }) => (
  <>
    <form onSubmit={handleFilter}>
      <Search
        placeholder="input search text"
        style={{ width: 300, height: 40 }}
        onSearch={onSearch}
        enterButton
      />
    </form>
    <p>{inputSearched}</p>
  </>
);

export default Filter;
