import { types, flow } from "mobx-state-tree";
import { query } from "flow-cadut";
import { Key } from "./key";

export const Account = types
  .model("Account", {
    address: types.string,
    contracts: types.array(types.string),
    keys: types.array(Key),
  })
  .actions((self) => ({
    setAddress(address) {
      self.address = address;
    },
    fetchAccount: flow(function* fetchAccount() {
      const [account, err] = yield query({
        args: [self.address],
        code: `
          pub struct Result {
            pub let fullAccount: PublicAccount
            pub let contracts: {String:[UInt8]}
            
            init(_ account: PublicAccount, _ contracts: {String:[UInt8]}){
              self.fullAccount = account
              self.contracts = contracts
            }
          }
          
          pub fun main(address: Address): Result {
            let account = getAccount(address)
            
            let contracts: {String:[UInt8]} = {}
            
            for name in account.contracts.names{
              contracts[name] = account.contracts.get(name: name)!.code
            }
            
            // for key in account.keys
            
            return Result(account, contracts)
          }
    `,
      });
      if (err) {
        console.error(err);
      } else {
        console.log({ account });
        console.log({keys: account.fullAccount.keys})

      }
    }),
  }))
  .views((self) => ({
    get resolvedAddress() {
      console.log(`Requested address: ${self.address}`);
      return self.address;
    },
  }));
