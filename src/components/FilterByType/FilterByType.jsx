import { Select } from "antd";

const FilterByType = ({ handleFilterByType }) => {
  const { Option } = Select;

  return (
    <Select style={{ width: 300, height: 40 }} onChange={handleFilterByType}>
      <Option value="steel">
        <span role="img" aria-label="Steel">
          <img width="56" src="/assets/acier.png" alt="steel" />
        </span>
      </Option>
      <Option value="fighting">
        <span role="img" aria-label="Fighting">
          <img width="56" src="/assets/combat.png" alt="fighting" />
        </span>
      </Option>
      <Option value="dragon">
        <span role="img" aria-label="Dragon">
          <img width="56" src="/assets/dragon.png" alt="dragon" />
        </span>
      </Option>
      <Option value="fairy">
        <span role="img" aria-label="Fairy">
          <img width="56" src="/assets/fee.png" alt="fairy" />
        </span>
      </Option>
      {/* Type inexistant sur la 1G */}

      {/* <Option value="dark">
        <span role="img" aria-label="Dark">
          <img
            width="56"
            src="/assets/tenebres.png"
            alt="dark"
          />
        </span>
      </Option> */}
      <Option value="ice">
        <span role="img" aria-label="Ice">
          <img width="56" src="/assets/glace.png" alt="ice" />
        </span>
      </Option>
      <Option value="psychic">
        <span role="img" aria-label="Psychic">
          <img width="56" src="/assets/psy.png" alt="psychic" />
        </span>
      </Option>
      <Option value="electric">
        <span role="img" aria-label="Electrik">
          <img width="56" src="/assets/electrik.png" alt="electrik" />
        </span>
      </Option>
      <Option value="ghost">
        <span role="img" aria-label="Ghost">
          <img width="56" src="/assets/spectre.png" alt="ghost" />
        </span>
      </Option>
      <Option value="bug">
        <span role="img" aria-label="Bug">
          <img width="56" src="/assets/insecte.png" alt="bug" />
        </span>
      </Option>
      <Option value="rock">
        <span role="img" aria-label="Rock">
          <img width="56" src="/assets/roche.png" alt="rock" />
        </span>
      </Option>
      <Option value="ground">
        <span role="img" aria-label="Ground">
          <img width="56" src="/assets/sol.png" alt="ground" />
        </span>
      </Option>
      <Option value="poison">
        <span role="img" aria-label="Poison">
          <img width="56" src="/assets/poison.png" alt="poison" />
        </span>
      </Option>
      <Option value="flying">
        <span role="img" aria-label="Fly">
          <img width="56" src="/assets/vol.png" alt="fly" />
        </span>
      </Option>
      <Option value="water">
        <span role="img" aria-label="Water">
          <img width="56" src="/assets/eau.png" alt="water" />
        </span>
      </Option>
      <Option value="fire">
        <span role="img" aria-label="Fire">
          <img width="56" src="/assets/feu.png" alt="fire" />
        </span>
      </Option>
      <Option value="grass">
        <span role="img" aria-label="Grass">
          <img width="56" src="/assets/plante.png" alt="grass" />
        </span>
      </Option>
      <Option value="normal">
        <span role="img" aria-label="Normal">
          <img width="56" src="/assets/normal.png" alt="normal" />
        </span>
      </Option>
    </Select>
  );
};

export default FilterByType;
