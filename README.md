# 📄 File Counter CLI

**Project URL:** [https://roadmap.sh/projects/file-counter](https://roadmap.sh/projects/nodejs-file-counter)

A lightweight command-line tool built with **Node.js** that analyzes text files and reports the total number of lines, words, and characters.

This project was developed as an implementation of the File Counter CLI project from roadmap.sh, focusing on file system operations, command-line arguments, and text processing.

---

## 🚀 Features

- Count the number of lines in a text file
- Count the number of words
- Count the number of characters
- Read files from a command-line argument
- Friendly error messages for missing or unreadable files
- Proper CLI exit codes on failure

---

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES Modules)
- Node.js File System (`fs/promises`)
- Node.js Path (`path`)

---

## 📂 Project Structure

```text
file-counter/
├── file-counter.js     # CLI entry point
├── notes.txt           # Sample text file
└── README.md
```

---

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/tommycontreras11/file-counter.git
cd file-counter
```

---

## 🚀 Usage

Analyze the sample file:

```bash
node file-counter.js notes.txt
```

Analyze another text file:

```bash
node file-counter.js path/to/file.txt
```

---

## 📋 Example Output

For the following file:

```text
Node makes CLI tools useful.
Files are common input.
```

Running:

```bash
node file-counter.js notes.txt
```

Produces:

```text
File: notes.txt
Lines: 2
Words: 9
Characters: 52
```

---

## ❌ Error Handling

If no file path is provided:

```bash
node file-counter.js
```

Output:

```text
error: please provide a file path
```

If the specified file cannot be read:

```bash
node file-counter.js missing.txt
```

Output:

```text
error: could not read file: missing.txt
```

Errors are written to **stderr**, and the CLI exits with a non-zero exit code.

---

## ⚙️ How It Works

The CLI:

1. Reads the file path from the command-line arguments.
2. Resolves the path to an absolute path.
3. Loads the file contents using `fs.promises.readFile()`.
4. Counts:
   - Lines by splitting on newline characters (`\n`)
   - Words by splitting on whitespace (`/\s+/`)
   - Characters using the string length
5. Prints the results to the terminal.

---

## 💡 Future Improvements

- Display byte size
- Support recursive directory processing
- Count paragraphs
- Ignore punctuation when counting words
- Output results as JSON
- Process multiple files in a single command
- Display the most common words
- Add automated tests

---

## 🧑‍💻 Author

Tommy Contreras

---

## 📄 License

MIT
