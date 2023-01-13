/* eslint-disable */
import React from "react";
import { Badge } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const columns = (remove: any, setData: any, setIsEdit: any) => [
  {
    title: "",
    dataIndex: "",
    key: "2",
    width: 50,
    render: (_a, _b, c) => {
      return c + 1;
    },
  },
  {
    title: "TASK's",
    dataIndex: "car",
    key: "1",
    sorter: (a, b) => a.car.length - b.car.length,
  },
  {
    title: "",
    dataIndex: "id",
    width: 100,
    render: (a: any, object: any) => {
      return (
        <>
          <a className="mx-2" onClick={() => remove(a)}>
            <DeleteFilled style={{ fontSize: 20, color: "gray" }} />
          </a>
          <a
            onClick={() => {
              setIsEdit(true);
              setData(object);
            }}
          >
            <EditFilled style={{ fontSize: 20, color: "gray" }} />
          </a>
        </>
      );
    },
  },
];

export default columns;
