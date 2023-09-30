const router = require("express").Router();
const phones = require("../data/phones.json")


// Get all phones
router.get("/phones", (req, res, next) => {
  const phonesList = phones.map((eachPhone) =>{
    return {
      name: eachPhone.name,
      id: eachPhone.id
    }
  })
  res.json(phonesList)
});


// Get a specific phone
router.get("/:phoneId", (req, res, next) => {
  const phoneDetails = phones.find((eachPhone) => {
    return eachPhone.id === Number(req.params.phoneId)
  })
  res.json(phoneDetails)
})

module.exports = router;
