import { translate } from "@vitalets/google-translate-api";

export class Translate {
  async translaterController(req, res) {
    try {
      const { text, lan } = req.body;
      const translated = await translate(text, { to: lan });
      return res.status(201).json({
        translated: translated.text,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while translating",
        error: err.message,
      });
    }
  }
}

const translating = new Translate();
export default translating;
