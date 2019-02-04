const importWasm = async () => {
  try {
    const wasm = import("../pkg/wasm_edgy");
    return wasm;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const wasm = await importWasm();
  if (!wasm) return;
  console.log(wasm.hello_world(), "eyy");
})();
