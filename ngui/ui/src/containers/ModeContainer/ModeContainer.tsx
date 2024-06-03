import Mode from "components/Mode";
import OrganizationOptionsService from "services/OrganizationOptionsService";
import { OPTICLOUD_MODE_OPTION } from "utils/constants";

const ModeContainer = () => {
  const { useGetOptiCloudMode, useUpdateOption } = OrganizationOptionsService();

  const {
    isGetOrganizationOptionLoading,
    option: { value }
  } = useGetOptiCloudMode(OPTICLOUD_MODE_OPTION);
  const { isUpdateOrganizationOptionLoading, updateOption } = useUpdateOption();

  const onApply = (option) => {
    updateOption(OPTICLOUD_MODE_OPTION, { value: option });
  };

  return (
    <Mode
      isLoadingProps={{ isGetOrganizationOptionLoading, isUpdateOrganizationOptionLoading }}
      option={value}
      onApply={onApply}
    />
  );
};

export default ModeContainer;
