import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MenuItem from "components/MenuItem";

export default {
  component: MenuItem
};

export const basic = () => (
  <MenuItem messageId="cipe">
    <ExitToAppOutlinedIcon />
  </MenuItem>
);

export const withOnclick = () => (
  <MenuItem messageId="cipe" onClick={() => console.log("IconMenuItem clicked")}>
    <ExitToAppOutlinedIcon />
  </MenuItem>
);
