import { useState, useEffect, useCallback } from "react";
import { Button, Divider, Input, Space, message } from "antd";
import { SaveOutlined, UserOutlined } from "@ant-design/icons";
import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";
import { Module } from "sample-app-shared/dist/esm/components/Module";
import { CommonModule1 } from "adriana-sample-app-common-module-1/dist/esm/components/CommonModule1";
import { CommonModule2Modal } from "adriana-sample-app-common-module-2/dist/esm/components/CommonModule2Modal";

// -----------------------------------------------------------------

export const Module1 = () => {
  const [openModal, setOpenModal] = useState(false);

  const { name, updateAppContext } = useSampleAppContext();

  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    updateAppContext({ name: value });

    message.success("Saved value!");
    // eslint-disable-next-line
  }, [value]);

  useEffect(() => {
    setValue(name);
  }, [name]);

  return (
    <Module name={"Module 1 - Sub Module 1"}>
      <div>
        <CommonModule2Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
        />

        <div>Add Content to Product 2 - Module 3</div>

        <br />

        <Space>
          <Button onClick={() => setOpenModal(true)}>
            <UserOutlined />
          </Button>

          <Input
            style={{ width: 240 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={() => saveValue()}>
            <SaveOutlined />
          </Button>
        </Space>

        <Divider />

        <CommonModule1 />
      </div>
    </Module>
  );
};
