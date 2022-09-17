const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const TourRoutes = require("./tour_routes");
const QuoteRoutes = require("./quote_routes");
const EnquiryRoutes = require("./enquiry_routes");
const AdminRoutes = require("./admin_routes");
const {
  sendQuoteEmail,
  sendEnquiryEmail,
} = require("../services/sendgrid_service");
router.use("/auth", AuthRoutes);

router.use("/tours", TourRoutes);

router.use("/quotes", QuoteRoutes);

router.use("/enquiries", EnquiryRoutes);

router.use("/admin", AdminRoutes);

router.post("/payment", (req, res) => {
  try {
    const { email } = req.body;

    sendEnquiryEmail(
      email,
      ` <h1>Payment Done</h1>
      <p>Your Trip Amount has been successfully paid</p>
       <p>Thank You</p>`
    );
    res.json({ message: "Payment Done" });
  } catch (error) {
    console.log("Payment Done error", error.message);
    res.json({ error: error.message });
  }
});

router.get("/", (req, res) => res.send("Welcome from AWS Beanstalk Staging"));

module.exports = router;
