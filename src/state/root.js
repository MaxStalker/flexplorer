import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";
import { Account } from "./account";
import { RouterStore } from "mobx-state-tree-router";
import { router } from "../Views";

export const Root = types.model("Root", {
  activeAccount: Account,
  router: RouterStore,
});

const RootContext = createContext(null);
export const Provider = RootContext.Provider;

export function useMst() {
  const store = useContext(RootContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

export const store = Root.create({
  activeAccount: Account.create({
    address: "find:bjarte",
  }),
  router,
});
