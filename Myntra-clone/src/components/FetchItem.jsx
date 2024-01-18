import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchStatusActions } from "../store/FetchSlice";
import { ItemAction } from "../store/ItemSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if(fetchStatus.fetchDone) 
    return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchStatusActions.markFetchingStart());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) =>{ 
        console.log(items);
        dispatch(ItemAction.addInitial(items[0]));
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(FetchStatusActions.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
    </>
  );
};
export default FetchItem;
