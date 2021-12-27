import { useContext } from "react/cjs/react.development";
import MainContext from "../../contexts";
import { Image } from "antd";
import "./PreviewPokemonSider.css";

const PreviewPokemonSider = () => {
  const { pokePreview } = useContext(MainContext);
  return (
    <div className="previewContainer">
      <div className="containerImage">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokePreview}.png`}
          alt={pokePreview}
          preview={false}
          sizes={100}
        />
      </div>
    </div>
  );
};

export default PreviewPokemonSider;
