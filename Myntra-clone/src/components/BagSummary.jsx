import { useSelector } from "react-redux";

const BagSummary=()=>{
  const bag = useSelector((store) => store.bag);
  const store = useSelector((store) => store.item);
  const bagItems = store.filter((item) => {
    return bag.indexOf(item.id) >= 0;
  });
  const CONVENIENT_FEE=99;
  
    let totalItem=bagItems.length;
    let totalMRP=0;
    let totalDiscount=0;
    let finalPayment=0;
  
  bagItems.forEach(item=>{
    totalMRP+=item.original_price;
    totalDiscount+=item.original_price-item.current_price;
  })
  finalPayment=totalMRP-totalDiscount+CONVENIENT_FEE;
  return (
  <>
    <div className="bag-summary">
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {totalItem} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENT_FEE}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  </>
  )
}
export default BagSummary;