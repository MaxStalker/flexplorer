import { useEffect } from "react";
import { useMst } from "../state/root";

const Account = (props) => {
  const { activeAccount } = useMst();
  const { address } = props;
  useEffect(() => {
    activeAccount.setAddress(address);
    activeAccount.fetchAccount();
  }, [address]);
  return <div>
    <h1>{address}</h1>
  </div>;
};

export default Account;
