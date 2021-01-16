import palette from "./palette";
import typography from "./typography";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  ...palette,
  ...typography,
});
