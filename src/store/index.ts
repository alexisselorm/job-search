import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

import state from "@/store/state";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import { GlobalState } from "./types";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
