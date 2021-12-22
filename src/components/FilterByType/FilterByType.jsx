import { Select } from "antd";
import { useContext } from "react";
import MainContext from "../../contexts";

const FilterByType = ({ handleFilterByType }) => {
  const { Option } = Select;

  return (
    <Select
      // defaultValue="fire"
      style={{ width: 120 }}
      onChange={handleFilterByType}
    >
      <Option value="steel">Steel</Option>
      <Option value="fighting">Fighting</Option>
      <Option value="dragon">Dragon</Option>
    </Select>

    // <Select
    //   mode="multiple"
    //   style={{ width: "100%" }}
    //   placeholder="Select a Pokémon type"
    //   // defaultValue={["china"]}
    //   onChange={handleFilterByType}
    //   optionLabelProp="label"
    // >
    //   <Option value="steel" label="Steel">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Steel">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Acier.png"
    //           alt="steel"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="fighting" label="Fighting">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Fighting">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Combat.png"
    //           alt="fighting"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="dragon" label="Dragon">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Dragon">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Dragon.png"
    //           alt="dragon"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="water" label="Water">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Water">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Eau.png"
    //           alt="water"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="electrik" label="Electrik">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Electrik">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Electrik.png"
    //           alt="electrik"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="fire" label="Fire">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Fire">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Feu.png"
    //           alt="fire"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="fairy" label="Fairy">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Fairy">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/gen6_types/18.png"
    //           alt="fairy"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="ice" label="Ice">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Ice">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Glace.png"
    //           alt="ice"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="bug" label="Bug">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Bug">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Insecte.png"
    //           alt="bug"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="normal" label="Normal">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Normal">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Normal.png"
    //           alt="normal"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="grass" label="Grass">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Grass">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Plante.png"
    //           alt="grass"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="poison" label="Poison">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Poison">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Poison.png"
    //           alt="poison"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="psychic" label="Psychic">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Psychic">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Psy.png"
    //           alt="psychic"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="rock" label="Rock">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Rock">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Roche.png"
    //           alt="rock"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="ground" label="Ground">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Ground">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Sol.png"
    //           alt="ground"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="ghost" label="Ghost">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Ghost">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Spectre.png"
    //           alt="ghost"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="dark" label="Dark">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Dark">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Tenebres.png"
    //           alt="dark"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    //   <Option value="fly" label="Fly">
    //     <div className="demo-option-label-item">
    //       <span role="img" aria-label="Fly">
    //         <img
    //           src="http://www.pokebip.com/pokemon/pokedex/images/Vol.png"
    //           alt="fly"
    //         />
    //       </span>
    //     </div>
    //   </Option>
    // </Select>
  );
};

export default FilterByType;
