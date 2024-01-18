import { useDispatch, useSelector } from "react-redux"
import { BagSliceAction } from "../store/BagSlice";

const HomeItem=({item})=>{
  const Bag=useSelector(state=>state.bag);
  const dispatch=useDispatch();
  const handleAdd=()=>{
    dispatch(BagSliceAction.addToBag(item.id));
  }
  const handleRemove=()=>{
    dispatch(BagSliceAction.removeFromBag(item.id));
  }
  const elementFound=Bag.indexOf(item.id)>=0;
  return(
    <>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemove}>Remove</button>:<button type="button" className="btn btn-success  btn-add-bag " onClick={handleAdd}>Add to bag</button>}
      
        
    </div>
    </>
    )
}
export default HomeItem;