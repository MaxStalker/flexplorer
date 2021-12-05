import {useEffect} from "react";
import { useMst } from "./state/root";

const View = () => {
  const { activeAccount } = useMst();
  console.log({ activeAccount });

  useEffect(()=>{
    activeAccount.fetchAccount()
  },[activeAccount])

  return <div>{activeAccount.address}</div>;
};

export default View;
