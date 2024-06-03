import Button from "components/Button";
import IconError from "components/IconError";

export default {
  component: IconError
};

export const basic = () => <IconError messageId="cipe" />;

export const withButton = () => (
  <IconError messageId="cipe">
    <Button color="primary" messageId="cipe" size="large" />
  </IconError>
);
