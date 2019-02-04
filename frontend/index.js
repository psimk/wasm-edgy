const importWasm = async () => {
	try {
		const wasm = import('../pkg');
		return wasm;
	} catch (err) {
		console.error(err);
	}
};

(async () => {
	const wasm = await importWasm();
	console.log(wasm.hello_world());
})();
