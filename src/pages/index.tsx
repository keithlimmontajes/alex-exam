// eslint-disable-file
import { type NextPage } from "next";
import { useEffect, useState } from "react";

import { Table, Col, Button, Input } from "antd";
import columns from "./components/columns";

import firebase from "../../firebase/clientApp";
import AddModal from "./components/add";
import EditModal from "./components/edit";

const db = firebase.firestore();

const Home: NextPage = () => {
  const [cars, setCars] = useState<any>([]);
  const [filtered, setFiltered] = useState([]);
  const [data, setData] = useState<any>({});
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState<any>(false);
  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  useEffect(() => {
    const getAll = firebase
      .firestore()
      .collection("votes")
      .onSnapshot((snaps) => {
        const temp: Array<any> = [];

        snaps.forEach((snap) => {
          const item = snap.data();
          temp.push({ ...item, id: snap.id });
        });

        setCars(temp);
      });

    return () => {
      if (getAll) getAll();
    };
  }, []);

  const add = async (data: any) =>
    await firebase.firestore().collection("votes").doc().set(data);

  const update = async (data: any, id: string) =>
    await db.collection("votes").doc(id).set(data);

  const remove = async (id: string) =>
    await db.collection("votes").doc(id).delete();

  useEffect(() => {
    if (search.length) {
      const filtered = cars.filter(
        (item) =>
          item?.car.includes(search) ||
          item?.model.includes(search) ||
          item?.color.includes(search) ||
          item?.speed.includes(search)
      );

      setFiltered(filtered);
    }
  }, [search]);

  return (
    <div className="p-10">
      <Col span={12} offset={6}>
        <div className="my-5">
          <Button
            onClick={() => setIsModalOpen(true)}
            style={{ background: "blue", color: "white" }}
          >
            ADD
          </Button>

          <Input.Search
            style={{ maxWidth: 300, marginLeft: "60%" }}
            placeholder="Search here.."
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
            }}
          />
        </div>

        <Table
          dataSource={search.length ? filtered : cars}
          className="table-ant-design"
          columns={columns(remove, setData, setIsEdit)}
          style={{ border: "6px groove #dbd9d9" }}
        />

        <AddModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          add={add}
        />

        <EditModal
          data={data}
          update={update}
          isModalOpen={isEdit}
          setIsModalOpen={setIsEdit}
        />
      </Col>
    </div>
  );
};

export default Home;
