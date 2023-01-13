import React, { useState } from "react";
import { Modal, Input } from "antd";

const AddModal: React.FC = (props: any) => {
  const { add, isModalOpen, setIsModalOpen } = props;

  const [fields, setFields] = useState<any>({
    car: "",
    color: "",
    model: "",
    speed: "",
  });

  const handleOk = () => {
    add(fields);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeValues = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  return (
    <>
      <Modal
        title="Add Car"
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "red" } }}
        afterClose={() => {
          setFields({
            car: "",
            color: "",
            model: "",
            speed: "",
          });
        }}
      >
        <Input
          onChange={(e) => onChangeValues("car", e.target.value)}
          placeholder="Input here car.."
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("color", e.target.value)}
          placeholder="Input here color.."
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("model", e.target.value)}
          placeholder="Input here model.."
          style={{ margin: 10 }}
        />

        <Input
          onChange={(e) => onChangeValues("speed", e.target.value)}
          placeholder="Input here speed.."
          style={{ margin: 10 }}
        />
      </Modal>
    </>
  );
};

export default AddModal;
