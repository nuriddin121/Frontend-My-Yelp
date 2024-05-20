import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Form from "./Form";
import { useEffect, useState } from "react";
import Table from "./Schedule";
import "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import './yelp.css';

const Basic = ({ accountList, getAccountList }) => {
  const [itemList, setItemList] = useState([]);
  const [userId, setUserId] = useState("");
  const currentEmail = getAuth().currentUser

  const userName = accountList.filter((acc) => acc.email === currentEmail.email )[0]?.userName

  const itemCollectionRef = collection(db, "restaurants");

  const getItemList = async () => {
    try {
      const data = await getDocs(itemCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        itemId: doc.itemId,
      }));

      setItemList(filteredData);
      setUserId(getAuth()?.currentUser?.uid);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAccountList();
    getItemList();
  }, [accountList]);

  const logoutHandler = () => {
    signOut(getAuth())
  };

  return (
    <Box className="mainPages">
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ background: "#FCFFE0", color: "black", borderRadius: "5px", width: "100%" }}
        >
          <Stack width={100} ml={65} >
            <img src="./yelp-logo.png" alt="logo" />
          </Stack>
          <Stack direction={"row"} spacing={2} >
            <Typography variant="h4" pt={1.5}>
              {userName && userName}
            </Typography>
            <Button>
              <Avatar sx={{ background: "#000" }}></Avatar>
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"end"} mt={5} color={"black"}>
          <Button onClick={logoutHandler} variant="contained">
            Logout
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={10} mt={5}>
          <Stack
            sx={{
              background: "#638889",
              borderRadius: "10px",
              width: "400px",
              height: "355px",
            }}
          >
            <Form
              itemCollectionRef={itemCollectionRef}
              getItemList={getItemList}
            />
          </Stack>
          <Stack
            sx={{
              background: "#638889",
              borderRadius: "20px",
              padding: "15px 20px 30px",
            }}
          >
            <Table itemList={itemList} userId={userId} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Basic;
