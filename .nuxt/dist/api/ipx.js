import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"G:/MyProject/My Work/protfolio/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
