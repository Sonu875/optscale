import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import WrapperCard from "components/WrapperCard";

export default {
  component: WrapperCard,
  argTypes: {
    link: { name: "Link", control: "text", defaultValue: "/test" },
    href: { name: "Href", control: "text", defaultValue: "https://hystax.com/" }
  }
};

export const basic = () => <WrapperCard title="OptiCloud" buttonText="Go to OptiCloud" />;

export const withText = () => (
  <WrapperCard title="OptiCloud" button={{ show: true, messageId: "goToDashboard" }}>
    Some text
  </WrapperCard>
);

export const withInternalLink = (args) => (
  <WrapperCard
    title="OptiCloud"
    button={{
      show: true,
      messageId: "goToDashboard",
      link: args.link
    }}
  >
    Some text
  </WrapperCard>
);

export const withExternalLink = (args) => (
  <WrapperCard
    title="OptiCloud"
    button={{
      show: true,
      messageId: "buy",
      href: args.href
    }}
  >
    Some text
  </WrapperCard>
);

export const withTitleButton = () => (
  <WrapperCard
    title="OptiCloud"
    titleButton={{
      type: "button",
      tooltip: {
        title: "Button tooltip"
      },
      buttonProps: {
        messageId: "add"
      }
    }}
  >
    Some text
  </WrapperCard>
);

export const withTitleIconButton = () => (
  <WrapperCard
    title="OptiCloud"
    titleButton={{
      type: "icon",
      tooltip: {
        title: "Button tooltip"
      },
      buttonProps: {
        icon: <ListAltOutlinedIcon />
      }
    }}
  >
    Some text
  </WrapperCard>
);
