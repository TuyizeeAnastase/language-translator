import joi from "joi";

export const inpuValidation = async (req, res, next) => {
  const roomSchema = joi.object({
    text: joi.string().required().messages({
      "any.required": "Please provide some text",
    }),
    lan: joi.number().required().messages({
      "any.required": "Please provide Language",
    }),
  });
  const value = await roomSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
