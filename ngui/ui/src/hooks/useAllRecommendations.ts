import { useMemo } from "react";
import {
  CrossRegionTraffic,
  ExecutorsReservation,
  ExecutorsUpgrade,
  GpuMemory,
  LocalStorageBottleneck,
  SpotInstancesUsage
} from "containers/RecommendationsOverviewContainer/recommendations/ml";
import { useOpticloudRecommendations } from "./useOpticloudRecommendations";

const ML_RECOMMENDATIONS = Object.fromEntries(
  [CrossRegionTraffic, ExecutorsReservation, ExecutorsUpgrade, GpuMemory, LocalStorageBottleneck, SpotInstancesUsage].map(
    (Rec) => [new Rec().type, Rec]
  )
);

export const useAllRecommendations = () => {
  const opticloudRecommendation = useOpticloudRecommendations();

  return useMemo(() => ({ ...ML_RECOMMENDATIONS, ...opticloudRecommendation }), [opticloudRecommendation]);
};
