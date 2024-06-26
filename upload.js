import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream("file.json"),
    purpose: "fine-tune",
  });

  console.log(file);
}

main();
