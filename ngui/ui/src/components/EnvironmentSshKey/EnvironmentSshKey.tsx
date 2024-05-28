import { useState } from "react";
import { CircularProgress, FormControl } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import ButtonGroup from "components/ButtonGroup";
import CreateSshKeyNameField from "components/CreateSshKeyNameField";
import CreateSshKeyValueField from "components/CreateSshKeyValueField";
import InlineSeverityAlert from "components/InlineSeverityAlert";
import Selector, { Item, ItemContent } from "components/Selector";
import { isEmpty } from "utils/arrays";

const MY_KEYS = "myKeys";
const ADD_KEY = "addKey";

export const SELECTED_KEY_FIELD_ID = "selectedKeyId";

type EnvironmentSshKeyProps = {
  sshKeys: {
    id: string;
    name: string;
    fingerprint: string;
  }[];
  isGetSshKeysReady: boolean;
  defaultKeyId: string;
};

const EnvironmentSshKey = ({ sshKeys = [], isGetSshKeysReady, defaultKeyId }: EnvironmentSshKeyProps) => {
  const intl = useIntl();
  const methods = useFormContext();
  const userHaveSshKeys = !isEmpty(sshKeys);
  const [activeTab, setActiveTab] = useState(userHaveSshKeys ? MY_KEYS : ADD_KEY);

  const defaultKeyText = `[${intl.formatMessage({ id: "default" }).toLowerCase()}]`;

  const {
    control,
    formState: { errors }
  } = methods;

  const activeTabIndex = activeTab === MY_KEYS ? 0 : 1;

  const buttons = [
    {
      id: MY_KEYS,
      messageId: MY_KEYS,
      action: () => setActiveTab(MY_KEYS),
      dataTestId: `tab_${MY_KEYS}`,
      disabled: !userHaveSshKeys,
      tooltip: !userHaveSshKeys && "youHaveNotCreateAnySshKeys"
    },
    {
      id: ADD_KEY,
      messageId: ADD_KEY,
      action: () => setActiveTab(ADD_KEY),
      dataTestId: `tab_${ADD_KEY}`
    }
  ];

  return !isGetSshKeysReady ? (
    <CircularProgress />
  ) : (
    <>
      <FormControl>
        <ButtonGroup buttons={buttons} activeButtonIndex={activeTabIndex} />
      </FormControl>
      {activeTab === MY_KEYS && (
        <Controller
          name={SELECTED_KEY_FIELD_ID}
          control={control}
          rules={{
            required: {
              value: true,
              message: intl.formatMessage({ id: "thisFieldIsRequired" })
            }
          }}
          defaultValue={defaultKeyId}
          render={({ field }) => (
            <Selector
              id="environment-ssh-key-selector"
              required
              labelMessageId="sshKeyForBooking"
              fullWidth
              error={!!errors[SELECTED_KEY_FIELD_ID]}
              helperText={errors?.[SELECTED_KEY_FIELD_ID]?.message}
              {...field}
            >
              {sshKeys.map(({ id, name, fingerprint }) => (
                <Item key={id} value={id}>
                  <ItemContent>{`${name} (${fingerprint}) ${defaultKeyId === id ? defaultKeyText : ""}`}</ItemContent>
                </Item>
              ))}
            </Selector>
          )}
        />
      )}
      {activeTab === ADD_KEY && (
        <>
          <InlineSeverityAlert messageDataTestId="ssh-hint" messageId="sshHint" />
          <CreateSshKeyNameField />
          <CreateSshKeyValueField />
        </>
      )}
    </>
  );
};

export default EnvironmentSshKey;
