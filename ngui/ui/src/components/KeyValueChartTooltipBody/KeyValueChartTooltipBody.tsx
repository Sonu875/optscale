import Typography from "@mui/material/Typography";
import { withStyles } from "tss-react/mui";
import FormattedMoney from "components/FormattedMoney";
import IconLabelGrid from "components/IconLabelGrid";
import KeyValueLabel from "components/KeyValueLabel/KeyValueLabel";
import { FORMATTED_MONEY_TYPES } from "utils/constants";
const TooltipTypography = withStyles(Typography, {
  root: {
    fontSize: "0.9rem"
  }
});

const KeyValueChartTooltipBody = ({ title, boldTitle = false, text, icon, value }) => {
  const renderLabel = () => (
    <KeyValueLabel value={<FormattedMoney value={value} type={FORMATTED_MONEY_TYPES.COMMON} />} keyText={text} />
  );

  return (
    <>
      {title ? <TooltipTypography fontWeight={boldTitle ?? "bold"}>{title}</TooltipTypography> : null}
      {icon ? <IconLabelGrid label={renderLabel()} startIcon={icon} /> : renderLabel()}
    </>
  );
};

export default KeyValueChartTooltipBody;
