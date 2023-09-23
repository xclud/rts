import * as wasm from "./rts_bg.wasm";
import { __wbg_set_wasm } from "./rts_bg.js";
__wbg_set_wasm(wasm);
export * from "./rts_bg.js";

wasm.__wbindgen_start();
