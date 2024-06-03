import { type ReactNode } from "react";
import Grid from "@mui/material/Grid";
import ModeWrapper from "components/ModeWrapper";
import { OPTICLOUD_MODE } from "utils/constants";
import { getSquareNodesStyle } from "utils/layouts";

type DashboardGridLayoutProps = {
  topResourcesExpensesCard: ReactNode;
  policiesCard: ReactNode;
  organizationExpenses: ReactNode;
  recommendationsCard: ReactNode;
  poolsRequiringAttentionCard: ReactNode;
};

const DashboardGridLayout = ({
  topResourcesExpensesCard,
  policiesCard,
  organizationExpenses,
  recommendationsCard,
  poolsRequiringAttentionCard
}: DashboardGridLayoutProps) => {
  const squareNodes = [
    { key: "organizationExpenses", node: organizationExpenses },
    {
      key: "topResourcesExpensesCard",
      node: topResourcesExpensesCard,
      mode: OPTICLOUD_MODE.FINOPS
    },
    { key: "recommendationsCard", node: recommendationsCard },
    {
      key: "policiesCard",
      node: policiesCard,
      mode: OPTICLOUD_MODE.FINOPS
    },
    {
      key: "poolsRequiringAttentionCard",
      node: poolsRequiringAttentionCard,
      mode: OPTICLOUD_MODE.FINOPS
    }
  ].filter(({ node }) => Boolean(node));

  return (
    <Grid container>
      {squareNodes.map(({ key, node, mode }, i) => (
        <ModeWrapper mode={mode} key={key}>
          <Grid item xs={12} lg={6} sx={getSquareNodesStyle(squareNodes.length, i)}>
            {node}
          </Grid>
        </ModeWrapper>
      ))}
    </Grid>
  );
};

export default DashboardGridLayout;
