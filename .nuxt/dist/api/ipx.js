import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"G:/My personal Project/My Work/serious_projects/web/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
