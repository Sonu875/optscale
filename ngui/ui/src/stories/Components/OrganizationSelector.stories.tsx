import Box from "@mui/material/Box";
import OrganizationSelector from "components/OrganizationSelector";

export default {
  component: OrganizationSelector
};

const organizations = [
  {
    deleted_at: 0,
    id: "e1a34742-1531-4b68-b52a-d1d438e52b68",
    email: "autogenerated@client.Partner",
    created_at: null,
    name: "Partner",
    parent_id: null,
    pool_id: "a2e75d53-4a90-4f28-9a97-dead860b3d58"
  }
];

export const basic = () => (
  <Box bgcolor="#184286" width="fit-content" p={1}>
    <OrganizationSelector
      organizations={organizations}
      organizationId={organizations[0].id}
      onChange={() => console.log("Changed")}
    />
  </Box>
);
