const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const mupterConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

console.log(tempDir);

const upload = multer({
  storage: mupterConfig,
});

module.exports = upload;
