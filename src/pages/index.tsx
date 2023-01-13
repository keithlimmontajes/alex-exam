import { api } from "../utils/api";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

import HeaderComponent from "../components/header";
import ContentComposition from "../compositions/content";

const Home: NextPage = () => {
  // const [courses, setCourses] = useState<any>([]);
  const [user, loading, error] = useAuthState(firebase.auth());
  // const { data, isLoading } = api.course.getAll.useQuery();

  // useEffect(() => {
  //   setCourses(data);
  // }, [isLoading]);

  // console.log();
  return (
    <>
      <p>HELLOO</p>
    </>
  );
};

export default Home;
