import AbortConditionsFields, {
  MAX_BUDGET_CHECKBOX_FIELD_NAME as ABORT_CONDITION_MAX_BUDGET_CHECKBOX_FIELD_NAME,
  MAX_BUDGET_VALUE_FIELD_NAME as ABORT_CONDITION_MAX_BUDGET_VALUE_FIELD_NAME,
  REACHED_GOALS_CHECKBOX_FIELD_NAME as ABORT_CONDITION_REACHED_GOALS_CHECKBOX_FIELD_NAME,
  MAX_DURATION_CHECKBOX_FIELD_NAME as ABORT_CONDITION_MAX_DURATION_CHECKBOX_FIELD_NAME,
  MAX_DURATION_VALUE_FIELD_NAME as ABORT_CONDITION_MAX_DURATION_VALUE_FIELD_NAME
} from "./AbortConditionsFields";
import CommandToExecuteField, { FIELD_NAME as COMMAND_TO_EXECUTE_FIELD_NAME } from "./CommandToExecuteField";
import DataSourceField, { FIELD_NAME as DATA_SOURCE_FIELD_NAME } from "./DataSourceField";
import FormButtons from "./FormButtons";
import HyperparametersField, {
  FIELD_NAME as HYPERPARAMETERS_FIELD_NAME,
  getHyperparameterFieldName
} from "./HyperparametersField";
import InstanceTypeField, { FIELD_NAME as INSTANCE_TYPE_FIELD_NAME } from "./InstanceTypeField";
import MaximumParallelRunsField from "./MaximumParallelRunsField";
import RegionField, { FIELD_NAME as REGION_FIELD_NAME } from "./RegionField";
import SpotInstanceFields, {
  USE_SPOT_INSTANCES_CHECKBOX_FIELD_NAME as SPOT_INSTANCES_USE_SPOT_INSTANCES_CHECKBOX_FIELD_NAME,
  MAX_ATTEMPTS_FIELD_NAME as SPOT_INSTANCES_MAX_ATTEMPTS_FIELD_NAME
} from "./SpotInstanceFields";
import TaskField, { FIELD_NAME as TASK_FIELD_NAME } from "./TaskField";

const FIELD_NAMES = Object.freeze({
  TASK_FIELD_NAME,
  DATA_SOURCE_FIELD_NAME,
  REGION_FIELD_NAME,
  INSTANCE_TYPE_FIELD_NAME,
  COMMAND_TO_EXECUTE_FIELD_NAME,
  ABORT_CONDITION_MAX_BUDGET_CHECKBOX_FIELD_NAME,
  ABORT_CONDITION_MAX_BUDGET_VALUE_FIELD_NAME,
  ABORT_CONDITION_REACHED_GOALS_CHECKBOX_FIELD_NAME,
  ABORT_CONDITION_MAX_DURATION_CHECKBOX_FIELD_NAME,
  ABORT_CONDITION_MAX_DURATION_VALUE_FIELD_NAME,
  SPOT_INSTANCES_USE_SPOT_INSTANCES_CHECKBOX_FIELD_NAME,
  SPOT_INSTANCES_MAX_ATTEMPTS_FIELD_NAME,
  getHyperparameterFieldName,
  HYPERPARAMETERS_FIELD_NAME
});

export {
  TaskField,
  DataSourceField,
  MaximumParallelRunsField,
  RegionField,
  InstanceTypeField,
  HyperparametersField,
  CommandToExecuteField,
  AbortConditionsFields,
  FormButtons,
  SpotInstanceFields,
  FIELD_NAMES
};
