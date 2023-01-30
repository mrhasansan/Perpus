import React from "react";
import { Container, Row, Col, Card, CardBody, CardText, Input, Button, Label, List } from "reactstrap";

function Landing() {
  return (
    <>
      <div>
        <img src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/b_bodleianwindow.jpg?itok=EI6TU2MH" alt="" className="px-3" />
        <Row md="12" className="mx-3">
          <Col
            className="bg-light border h1
        "
          >
            Welcome to Sn Library
          </Col>
        </Row>
        <Row md="4" sm="2" xs="1" className="mx-3">
          <Col className="bg-light border">
            <img alt="Sample" src="https://lib.ugm.ac.id/wp-content/uploads/sites/1681/2019/12/mrbs1.jpg" />
          </Col>
          <Col className="bg-light border">
            <img alt="Sample" src="https://lib.ugm.ac.id/wp-content/uploads/sites/1681/2018/07/akses_ejurnalv34.jpg" />
          </Col>
          <Col className="bg-light border">
            <img alt="Sample" src="https://lib.ugm.ac.id/wp-content/uploads/sites/1681/2018/07/katalog_ugmv34.jpg" />
          </Col>
          <Col className="bg-light border">
            <img alt="Sample" src="https://lib.ugm.ac.id/wp-content/uploads/sites/1681/2019/12/mrbs1.jpg" />
          </Col>
        </Row>
        <Row className="bg-light border mx-3" md="3" sm="1">
          <Col className="bg-light border">
            <h1> Tata Tertib</h1>
            <ol className="ms-4 text-start py-2">
              <li>Pengunjung wajib mengisi buku tamu.</li>
              <li>Tas, map, buku cetak, jaket, makanan, minuman tidak boleh dibawa masuk kecuali barang-barang yang berharga.</li>
              <li>Pengunjung tidak boleh merokok di ruang perpustakaan.</li>
              <li>Pengunjung tidak boleh membawa minuman dan makanan di dalam perpustakaan.</li>
            </ol>
          </Col>
          <Col>
            <h1>Koleksi</h1>
            <ul className="ms-4 text-start py-2">
              <li>Buku Text</li>
              <li>Buku Referensi</li>
              <li>Jurnal</li>
              <li>Majalah</li>
              <li>Koran</li>
            </ul>
          </Col>
          <Col className="bg-light border">
            <h1>Fasilitas</h1>
            <ul className="ms-4 text-start py-2">
              <li>Ruang baca</li>
              <li>Ruang Repository</li>
              <li>Wifi area</li>
              <li>Locker</li>
            </ul>
          </Col>
        </Row>
        <Row className="bg-light border mx-3" md="4" sm="2" xs="1">
          <Col className="bg-light border">
            <Card>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardText>Foto bersama dengan menteri</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="bg-light border">Pengumuman</Row>
      </div>
    </>
  );
}

export default Landing;
