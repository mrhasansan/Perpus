const ProductsModel = require("../model/products");
const sequelize = require("sequelize");
const UsersModel = require("../model/users");

module.exports = {
  getData: async (req, res) => {
    try {
      // pagination
      const pageAsNumber = Number.parseInt(req.query.page);
      const sizeAsNumber = Number.parseInt(req.query.size);
      let page = 0;
      if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber;
      }
      let size = 5;
      if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 5) {
        size = sizeAsNumber;
      }
      let datalist = await ProductsModel.findAndCountAll({
        limit: size, // batas max dalam tiap page
        offset: page * size, // yang akan ditampilkan pertama dalam page
      });

      return res.status(200).send({
        //pagination
        content: datalist.rows,
        totalPages: Math.ceil(datalist.count / size),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
  register: async (req, res) => {
    let { judul, lokasi, penerbit, pengarang, sinopsis, kategori, tahunterbit, jumlah } = req.body;
    try {
      let data = await ProductsModel.findAll({
        where: {
          [sequelize.Op.or]: [{ judul }],
        },
      });
      if (data.length > 0) {
        return res.status(200).send({
          success: false,
          message: " judul atau no Inventaris Buku sudah ada",
        });
      } else {
        try {
          let create = await ProductsModel.create({
            judul,
            lokasi,
            penerbit,
            pengarang,
            sinopsis,
            kategori,
            tahunterbit,
            jumlah,
          });
          return res.status(200).send(data);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  getList: async (req, res, next) => {
    const { filter, sort, page } = req.query;
    const paramQuerySQL = {};
    let limit;
    let offset;

    // filtering by category
    if (filter !== "" && typeof filter !== "undefined") {
      const query = filter.category.split(",").map((item) => ({
        [sequelize.Op.eq]: item,
      }));
      paramQuerySQL.where = {
        id_category: { [sequelize.Op.or]: query },
      };
    }
    // sorting
    if (sort !== "" && typeof sort !== "undefined") {
      let query;
      if (sort.charAt(0) !== "-") {
        query = [[sort, "ASC"]];
      } else {
        query = [[sort.replace("-", ""), "DESC"]];
      }

      paramQuerySQL.order = query;
    }

    // pagination
    if (page !== "" && typeof page !== "undefined") {
      if (page.size !== "" && typeof page.size !== "undefined") {
        limit = page.size;
        paramQuerySQL.limit = limit;
      }
      if (page.number !== "" && typeof page.number !== "undefined") {
        offset = page.number * limit - limit;
        paramQuerySQL.offset = offset;
      }
    } else {
      limit = 5; // limit 5 item
      offset = 0;
      paramQuerySQL.limit = limit;
      paramQuerySQL.offset = offset;
    }
    try {
      const data = await ProductsModel.findAll(paramQuerySQL);
      if (data) {
        res.status(200).json({ data });
        console.log("cek data", data);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
