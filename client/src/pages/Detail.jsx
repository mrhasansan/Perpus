import React, { useState, useEffect } from "react";
import { Button, Col, Container, Label, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../helper";

function Detail() {
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
      <Row className="mx-3">
        <Col md={12} className="bg-light border ">
          Judul Buku
          <Table size="sm">
            <thead>
              <tr>
                <th>Pengarang</th>
                <th>Penerbit</th>
                <th>tahun Terbit</th>
                <th>Kategori</th>
                <th>Lokasi</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Ini</th>
                <td>kakak</td>
                <td>Ini</td>
                <td>ini</td>
                <td>aps</td>
                <td>jumlah</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs="12" md="4" style={{ background: "#192D71", color: "#FFFFFF" }}>
          <p className="h-1">gambar</p>
          <img src="https://inc.mizanstore.com/aassets/img/com_cart/produk/bt-570-aroma_karsa-.jpg" alt="" />
        </Col>
        <Col className="bg-light border text-start" xs="12" md="8" style={{ background: "#ECECEC" }}>
          <Label>Sinopsis</Label>
          <Container className="bg-success border text-start">
            Dari sebuah lontar kuno, Raras Prayagung mengetahui bahwa Puspa Karsa yang dikenalnya sebagai dongeng, ternyata tanaman sungguhan yang tersembunyi di tempat rahasia. Obsesi Raras memburu Puspa Karsa, bunga sakti yang konon mampu
            mengendalikan kehendak dan cuma bisa diidentifikasi melalui aroma, mempertemukannya dengan Jati Wesi. Jati memiliki penciuman luar biasa. Di TPA Bantar Gebang, tempatnya tumbuh besar, ia dijuluki si Hidung Tikus. Dari berbagai
            pekerjaan yang dilakoninya untuk bertahan hidup, satu yang paling Jati banggakan, yakni meracik parfum. Kemampuan Jati memikat Raras. Bukan hanya mempekerjakan Jati di perusahaannya, Raras ikut mengundang Jati masuk ke dalam
            kehidupan pribadinya. Bertemulah Jati dengan Tanaya Suma, anak tunggal Raras, yang memiliki kemampuan serupa dengannya. Semakin jauh Jati terlibat dengan keluarga Prayagung dan Puspa Karsa, semakin banyak misteri yang ia
            temukan, tentang dirinya dan masa lalu yang tak pernah ia tahu.
          </Container>
          <Button>
            <Link to="/user" style={{ color: "#FFFFFF" }}>
              Pinjam buku
            </Link>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Detail;
