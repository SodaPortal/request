import { useStore, Store } from "vuex";
import { computed } from "vue";

export class StoreManager {
  public store: Store<any>;

  public constructor() {
    this.store = useStore();
  }

  public getState(name: string): any {
    return computed(() => this.store.state[name]);
  }
}
