import path from "path";
import fs from "fs/promises";

const arg = process.argv[2];

if (!arg) {
  process.stderr.write(`please provide a file path\n`);
  process.exit(1);
}

const filePath = path.resolve(arg);
const fileName = path.basename(filePath);

try {
  const content = await fs.readFile(filePath, {
    encoding: "utf8",
  });

  //\n => This is to count the lines break
  const lines = content.split("\n").length;
  
  // /\s+/ => This is to count any whitespace
  const words = content.trim().split(/\s+/).length;
 
  const characters = content.length;

  console.log("File:", fileName);
  console.log("Lines:", lines);
  console.log("Words:", words);
  console.log("Characters:", characters);
} catch {
  process.stderr.write(`could not read file: ${fileName}\n`);

  process.exitCode = 1;
}
