import { Badge, Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

export const columns = (remove: any, setData: any, setIsEdit: any) => [
  {
    title: "CAR",
    dataIndex: "car",
    key: "1",
  },
  {
    title: "MODEL",
    dataIndex: "model",
    key: "2",
  },
  {
    title: "COLOR",
    dataIndex: "color",
    key: "3",
    render: (a: any) => {
      return (
        <>
          <Badge color={a} /> &nbsp;
          {a}
        </>
      );
    },
  },
  {
    title: "SPEED",
    dataIndex: "speed",
    key: "4",
  },
  {
    title: "",
    dataIndex: "id",
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
