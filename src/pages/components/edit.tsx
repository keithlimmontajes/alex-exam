/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";

const App: React.FC<any> = ({
  update,
  isModalOpen,
  setIsModalOpen,
  data,
}: any) => {
  const [fields, setFields] = useState({
    car: "",
    color: "",
    model: "",
    speed: "",
  });

  const handleOk = () => {
    update(fields, data?.id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeValues = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  console.log(data);
  useEffect(() => {
    setFields({
      ...data,
    });
  }, [data]);

  return (
    <>
      <Modal
        title="Edit Car"
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "red" } }}
      >
        <Input
          onChange={(e) => onChangeValues("car", e.target.value)}
          placeholder="Input here car.. "
          value={fields?.car}
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("color", e.target.value)}
          placeholder="Input here color.."
          value={fields?.color}
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("model", e.target.value)}
          placeholder="Input here model.."
          value={fields?.model}
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("speed", e.target.value)}
          placeholder="Input here speed.."
          value={fields?.speed}
          style={{ margin: 10 }}
        />
      </Modal>
    </>
  );
};

export default App;
