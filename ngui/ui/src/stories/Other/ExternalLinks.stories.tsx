import Link from "@mui/material/Link";
import WrapperCard from "components/WrapperCard";
import TableUseMemoWrapper from "stories/Other/TableUseMemoWrapper";
import {
  PRODUCTION,
  CIPE,
  // CIPE documentation urls
  DOCS_CIPE_OPTICLOUD,
  DOCS_CIPE_AUTO_BILLING_AWS,
  DOCS_CIPE_DISCOVER_RESOURCES,
  DOCS_CIPE_CONNECT_AZURE_ACCOUNT,
  DOCS_CIPE_RESOURCE_CONSTRAINTS,
  GITHUB_CIPE_K8S_COST_METRICS_COLLECTOR,
  GITHUB_CIPE_EXTRACT_LINKED_REPORTS,
  DOCS_CIPE_CLUSTERS,
  DOCS_CIPE_CLEANUP_SCRIPTS
} from "urls";
import { isEmpty } from "utils/arrays";

export default {
  component: ExternalLinks
};

const linksDefinition = {
  Other: [
    {
      link: PRODUCTION,
      usages: [
        "To check if we are (user/users/etc) in the production environment (used to enable GA and Hotjar)",
        "Add link to a PDF file"
      ]
    },
    {
      link: CIPE,
      usages: ["On the authorization, registration and reset password pages (top-right corner)"]
    }
  ],
  "CIPE documentation urls": [
    {
      link: DOCS_CIPE_OPTICLOUD,
      usages: ['Page title -> "DOCUMENTATION" button', '"OptiCloud Privacy Policy" alert dialog']
    },
    {
      link: DOCS_CIPE_AUTO_BILLING_AWS,
      usages: ["Connect cloud account form description (AWS Root and AWS Linked)"]
    },
    {
      link: DOCS_CIPE_DISCOVER_RESOURCES,
      usages: ["Connect cloud account form description (AWS Linked - 'read-only policy for resource discovery' label)"]
    },
    {
      link: DOCS_CIPE_CONNECT_AZURE_ACCOUNT,
      usages: ["Connect cloud account form description (Azure)"]
    },
    {
      link: DOCS_CIPE_RESOURCE_CONSTRAINTS,
      usages: [
        'Pools page -> Constraints tab -> "Get more help" label',
        'Resource details page -> Constraints tab -> "Get more help" label'
      ]
    },
    {
      link: GITHUB_CIPE_K8S_COST_METRICS_COLLECTOR,
      usages: ["Cloud Accounts -> Add -> Kubernetes"]
    },
    {
      link: GITHUB_CIPE_EXTRACT_LINKED_REPORTS,
      usages: ["Cloud Accounts -> Add -> AWS Linked"]
    },
    {
      link: DOCS_CIPE_CLUSTERS,
      usages: ["Cluster types page"]
    },
    {
      link: DOCS_CIPE_CLEANUP_SCRIPTS,
      usages: ["Recommendations -> Cleanup scripts button -> Tooltip"]
    }
  ]
};

const getTableData = () =>
  Object.entries(linksDefinition)
    .map(([groupName, links]) => [
      {
        link: "",
        name: groupName,
        divider: true
      },
      ...links
    ])
    .flat();

export const basic = () => {
  const columns = [
    {
      header: "Link",
      accessorKey: "link",
      enableSorting: false,
      cell: ({ row: { original } }) =>
        original.divider ? (
          <strong>{original.name}</strong>
        ) : (
          <div style={{ paddingLeft: "16px" }}>
            <Link href={original.link} target="_blank" rel="noopener">
              {original.link}
            </Link>
          </div>
        )
    },
    {
      header: "Usage",
      accessorKey: "usages",
      enableSorting: false,
      cell: ({ row: { original } }) =>
        !isEmpty(original.usages) && (
          <ul>
            {original.usages.map((usage) => (
              <li>{usage}</li>
            ))}
          </ul>
        )
    }
  ];

  return (
    <WrapperCard>
      <TableUseMemoWrapper data={getTableData()} columns={columns} />
    </WrapperCard>
  );
};
