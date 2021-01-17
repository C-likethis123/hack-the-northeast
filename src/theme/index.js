import palette from "./palette";
import typography from "./typography";
import props from "./props";
import overrides from "./overrides";

import { createMuiTheme } from "@material-ui/core/styles";

console.log(createMuiTheme());
export default createMuiTheme({
  ...overrides,
  ...palette,
  ...typography,
  ...props,
});
