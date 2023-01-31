import { Avatar } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Button, Container, Input, Row } from "reactstrap";
import Axios from "axios";
import { API_URL } from "../helper";

function Profil() {
  const [selectImg, setSelectImg] = useState(null);
  const onBtnSave = async () => {
    try {
      let token = localStorage.getItem("library");
      const formData = new FormData(); // constructur js untuk pengambilan file data
      formData.append("images", selectImg);
      let res = await Axios.patch(API_URL + `/users/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="my-4">
        <Avatar name="Profile" size="2xl" className="my-3" />
        <Input type="file" onChange={(e) => setSelectImg(e.target.files[0])} />
        <Button type="button" onClick={onBtnSave}>
          Save
        </Button>
      </Container>
    </div>
  );
}

export default Profil;
