import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Card, CardImg, Row, CardImgOverlay, CardText, CardTitle, Input, Col, Label, InputGroup, FormGroup, Button, Container } from "reactstrap";
import Axios from "axios";
import { API_URL } from "../helper";
import { getProductsActions } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

function Product(props) {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const [listData, setListData] = useState([]);
  const loadListData = async () => {
    const response = await Axios.get(API_URL + `/products`);
    setListData(response.data);
  };

  useEffect(() => {
    loadListData();
  }, []);

  return (
    <>
      <Card inverse className="mx-3">
        <CardImg
          alt="Card image cap"
          src="https://img.freepik.com/premium-photo/wooden-table_36051-46.jpg?size=626&ext=jpg"
          style={{
            height: 150,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle className="fs-1 text-start fw-bold">Sn Library</CardTitle>
          <CardText className="fs-2 ">Katalog Online Terintegrasi</CardText>
        </CardImgOverlay>
      </Card>
      <Row className="mx-3 text-start my-3 d-flex">
        <Col md={3}>
          <Label>Label</Label>
          <InputGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Judul/Kata kunci</option>
              <option>Pengarang</option>
              <option>Penerbit</option>
              <option>No.Klasifikasi</option>
              <option>Semua Field</option>
            </Input>
          </InputGroup>
        </Col>

        <Col md={3}>
          <Label>Obyek Pencarian</Label>
          <InputGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Buku</option>
              <option>Jurnal</option>
              <option>Artikel</option>
              <option>Majalah</option>
            </Input>
          </InputGroup>
        </Col>
        <Col md={3}>
          <Label>Lokasi</Label>
          <InputGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Rak A</option>
              <option>Rak B</option>
              <option>Rak C</option>
              <option>Rak D</option>
              <option>Semua Rak</option>
            </Input>
          </InputGroup>
        </Col>
        <Col md={3}>
          <Label>Kata Kunci</Label>
          <InputGroup>
            <Input type="text" placeholder="Ketikan kata kunci pencarian" />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mx-4 ">
        <Col className="bg-light border  justify-content-start" md={3}>
          <Label className="d-flex justify-content-start"> Tahun</Label>
          <Container>
            <InputGroup>
              <Input placeholder="mulai" type="number" />
              <Button>s.d</Button>
              <Input placeholder="ahir" type="number" />
            </InputGroup>
          </Container>
          <Label className="d-flex justify-content-start">Kategori</Label>

          <FormGroup check>
            <Input type="checkbox" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)} /> <Label check>Umum</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)} /> <Label check> Science and technology</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)} /> <Label check> Social</Label>
          </FormGroup>
          <p>Selected: {JSON.stringify(cSelected)}</p>
          <Button className="w-100 my-4">Filter</Button>
        </Col>
        <Col className="bg-light border" md={9}>
          Hasil pencarian
          <Table size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Lokasi</th>
                <th>Status</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((item, idx) => {
                return (
                  <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.judul}</td>
                    <td>{item.lokasi}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link>Detail</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Product;
