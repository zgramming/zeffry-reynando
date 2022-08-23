import type { NextPage } from "next";
import { Button } from "react-bootstrap";
import CustomNavbar from "../components/reusable/custom_navbar";
const Home: NextPage = () => {
  return (
    <>
      <CustomNavbar />
      <Button variant={"success"}>Testing</Button>
    </>
  );
};

export default Home;
