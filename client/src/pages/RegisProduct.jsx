import React from "react";
import { useState } from "react";
import { FormGroup, Label, Input, Button, Container, Col, Row, InputGroup, InputGroupText } from "reactstrap";
import { API_URL } from "../helper";
import Axios from "axios";

function RegisProduct() {
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [tahunterbit, setTahunTerbit] = useState("");
  const [kategory, setKategory] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [foto, setFoto] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  const onBtnRegis = () => {
    Axios.post(API_URL + `/products/register`, {
      judul,
      penerbit,
      pengarang,
      tahunterbit,
      kategory,
      lokasi,
      jumlah,
      foto,
      sinopsis,
    })
      .then((res) => {
        console.log(res.data);
        alert("Registrasi produk berhasul");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Label>Judul</Label>
          <Input placeholder="input judul buku " type="text" md={4} onChange={(e) => setJudul(e.target.value)} />
        </Col>
        <Col md={6}>
          <Label>Penerbit</Label>
          <Input placeholder="input penerbit" type="text" md={4} onChange={(e) => setPenerbit(e.target.value)} />
        </Col>
        <Col md={6}>
          <Label>Pengarang</Label>
          <Input placeholder="input pengarang " type="text" md={4} onChange={(e) => setPengarang(e.target.value)} />
        </Col>
        <Col md={6}>
          <Label>Tahun Terbit</Label>
          <Input placeholder="input tahun terbit " type="text" md={4} onChange={(e) => setTahunTerbit(e.target.value)} />
        </Col>
        <Col md={6}>
          <Label>Kategori</Label>
          <Input id="exampleSelect" name="select" type="select" md={4} onChange={(e) => setKategory(e.target.value)}>
            <option>Umum</option>
            <option>Science </option>
            <option>Techlonolgy</option>
            <option>Social</option>
          </Input>
        </Col>
        <Col md={6}>
          <Label>Lokasi</Label>
          <Input id="exampleSelect" name="select" type="select" md={4} onChange={(e) => setLokasi(e.target.value)}>
            <option>Rak A</option>
            <option>Rak B</option>
            <option>Rak C</option>
            <option>Rak D</option>
            <option>Semua Rak</option>
          </Input>
        </Col>
        <Col md={6}>
          <Label>Jumlah</Label>
          <Input placeholder="input jumlah buku" type="number" md={4} onChange={(e) => setJumlah(e.target.value)} />
        </Col>
        <Col md={6}>
          <Label for="exampleFile">Foto Sampul </Label>
          <Input id="exampleFile" name="file" type="file" onChange={(e) => setFoto(e.target.value)} />
        </Col>
        <FormGroup md={6}>
          <Label for="exampleText">Sinopsis</Label>
          <Input type="textarea" name="text" id="exampleText" onChange={(e) => setSinopsis(e.target.value)} />
        </FormGroup>
      </Row>
      <Button className="w-100" style={{ background: "#192D71" }} onClick={onBtnRegis}>
        Register Product
      </Button>
    </Container>
  );
}

export default RegisProduct;
