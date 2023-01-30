const { check, validationResult } = require("express-validator");

module.exports = {
  checkUser: async (req, res, next) => {
    try {
      // validation process
      console.log(req.path);

      await check("username").notEmpty().isAlphanumeric().run(req);

      await check("email").notEmpty().isEmail().run(req);
      await check("password")
        .notEmpty()
        .isStrongPassword({
          minLength: 5,
          minSymbols: 1,
          minNumbers: 1,
        })
        .run(req);
      await check("phone").notEmpty().run();
      await check("gender").notEmpty().run();
      await check("address").notEmpty().run();
      const validation = validationResult(req);
      console.log("cek validation", validation);
      if (validation.isEmpty()) {
        // lanjut ke midleware lain
        next();
      } else {
        return res.status(400).send({
          succes: false,
          message: "Validation invalid",
          error: validation.error,
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
