import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const store = useSelector((store) => store.item);
  const bagItems = store.filter((item) => {
    return bag.indexOf(item.id) >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          {bagItems.map((item) =>  (
            <BagItem key={item.id} item={item} />
          ))}

          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
