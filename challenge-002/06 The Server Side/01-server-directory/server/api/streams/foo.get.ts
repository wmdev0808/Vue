// Sending Streams (Experimental)
import fs from "node:fs";
import { sendStream } from "h3";

export default defineEventHandler((event) => {
  return sendStream(event, fs.createReadStream("/path/to/file"));
});
