import "rxjs/add/operator/do";
import {Middleware} from "@ngrx/store";

class DevTools {
  currentState: any;
  stateLogging: Middleware = state => state.do((val: any) => console.log("State changed", val));
  stateTracking: Middleware = state => state.do((val: any) => this.currentState = val);
}

export let dev = new DevTools();