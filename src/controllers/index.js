const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

const slashRoute = asyncHandler((req, res) => {
  res.status(200).json(new ApiResponse(200, "OK"));
});

module.exports = { slashRoute };
