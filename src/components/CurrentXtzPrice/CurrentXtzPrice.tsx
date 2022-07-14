import { useFetch } from "../../hooks/useFetch";
import { AiOutlineReload } from "react-icons/ai";
import "./CurrentXtzPrice.scss";

interface ICurrentXtzPrice {
  data: any;
  price: number | undefined;
}

export const CurrentXtzPrice: React.FC<ICurrentXtzPrice> = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://api.teztools.io/v1/xtz-price"
  );
  const priceXtz = data?.price.toFixed(2);

  if (loading) return <p className="currentXtzPrice">Price Loading...</p>;
  if (error) console.log(error);

  return (
    <div className="currentXtzPrice">
      <p className="currentXtzPrice__text">1ꜩ = ${priceXtz}</p>
      <AiOutlineReload
        className="currentXtzPrice__icon"
        onClick={refetch}
        size={16}
      />
    </div>
  );
};
