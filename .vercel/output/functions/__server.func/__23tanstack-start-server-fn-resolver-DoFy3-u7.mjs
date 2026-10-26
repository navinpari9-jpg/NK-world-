//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DoFy3-u7.js
var manifest = { "f1d750150ce89bc0d593aa22c01b98d68b80c07d2cace39b64fe99ebd5b1b07f": {
	functionName: "getYouTubeStats_createServerFn_handler",
	importer: () => import("./_ssr/youtube.functions-D0vKUDnK.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
