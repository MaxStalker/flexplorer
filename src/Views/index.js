import { View, RouterStore } from "mobx-state-tree-router";
import Account from "./Account";
import Home from "./Home";

export const views = {
  home: View.create({
    name: "home",
    path: "/",
    component: <Home />,
  }),
  account: View.create({
    name: "account",
    path: "/account/:address",
    component: <Account />,
    hooks: {
      beforeEnter(self, params) {
        self.router.setProps({
          address: params.address,
        });
      },
    },
  }),
};

export const router = RouterStore.create({
  views,
});

export default views;
