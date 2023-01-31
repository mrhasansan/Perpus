const UsersModel = require("../model/users");
const sequelize = require("sequelize");
const { hashPasword, createToken } = require("../config/encript");
const bcrypt = require("bcrypt");
const { dbSequelize } = require("../config/db");
const { where } = require("sequelize");
const { transport } = require("../config/nodemailer");

module.exports = {
  getData: async (req, res) => {
    try {
      let data = await UsersModel.findAll();
      return res.status(200).send(data);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
  login: async (req, res) => {
    let { username, password } = req.body;
    try {
      let data = await UsersModel.findAll({
        where: {
          username,
        },
      });
      console.log("cek", data);
      if (data.length > 0) {
        let chekPass = bcrypt.compareSync(password, data[0].dataValues.password);
        if (chekPass) {
          let token = createToken({ ...data[0].dataValues });
          return res.status(200).send({ ...data[0].dataValues, token });
        } else {
          return res.status(200).send({
            success: false,
            message: "Password Incorrect",
          });
        }
      } else {
        return res.status(200).send({
          succest: false,
          message: "Account does not exist",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  register: async (req, res) => {
    let { username, email, phone, gender, address, password, idnumber } = req.body;
    const newPass = hashPasword(password);
    console.log(newPass);
    try {
      let data = await UsersModel.findAll({
        where: {
          [sequelize.Op.or]: [{ username, email }],
        },
      });
      if (data.length > 0) {
        return res.status(200).send({
          success: false,
          message: "username or email is already exist",
        });
      } else {
        try {
          let data = await UsersModel.findAll();
          let create = await UsersModel.create({
            username,
            email,
            phone,
            gender,
            address,
            password: newPass,
          });
          let token = createToken({ id: data.length + 1, username, email });

          // Mengirimkan email
          transport.sendMail(
            {
              from: "Library Admin",
              to: email,
              subject: "Verification email account",
              html: `<div>
              <h3> Click link below for verification your email</h3>
              <a href="http://localhost:3000/verification?t=${token}"> Verifie Now</a>
            </div>`,
            },
            (err, info) => {
              if (err) {
                return res.status(400).send(err);
              }
              return res.status(200).send({
                success: true,
                message: "Register account succest, chek your email",
                info,
                data: create,
              });
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  keepLogin: async (req, res) => {
    console.log(req.decript);
    try {
      let data = await UsersModel.findAll({
        where: {
          id: req.decript.id,
        },
      });

      console.log(data);

      let token = createToken({ ...data[0].dataValues });
      return res.status(200).send({ ...data[0].dataValues, token });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  profileImg: async (req, res) => {
    console.log(req.files);

    try {
      let data = await UsersModel.findAll({
        where: {
          id: 4,
        },
      });
      res.status(200).json({ msg: "Profile update berhasil" });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  verifiedAccount: async (req, res) => {
    try {
      console.log("verif dec", req.decript);

      let update = await UsersModel.update(
        {
          status: "verified",
        },
        {
          where: {
            id: req.decript.id,
          },
        }
      );
      console.log("cek verif", update);
      return res.status(200).send({
        success: true,
        message: "Your account verified",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
