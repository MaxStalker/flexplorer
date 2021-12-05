import { types } from "mobx-state-tree";

export const Key = types.model("AccountKey", {
  keyId: types.number,
  weight: types.number,
  curve: types.string,
  hash: types.string,
  sequenceNumber: types.number,
});
