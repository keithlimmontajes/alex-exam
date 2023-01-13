/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";

const AddModal: React.FC<any> = (props: any) => {
  const { add, isModalOpen, setIsModalOpen } = props;

  const [fields, setFields] = useState<any>({
    car: "",
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

  useEffect(() => {
    setFields({ car: "" });
  }, []);

  return (
    <>
      <Modal
        title="Add Task"
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "red" } }}
        afterClose={() => {
          setFields({
            car: "",
          });
        }}
      >
        <Input
          onChange={(e) => onChangeValues("car", e.target.value)}
          placeholder="Input Task here.."
          style={{ margin: 10 }}
        />
      </Modal>
    </>
  );
};

export default AddModal;
