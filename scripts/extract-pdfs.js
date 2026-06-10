const fs = require("fs");
const path = require("path");
let pdf = require("pdf-parse");
if (typeof pdf !== "function" && pdf && typeof pdf.default === "function") {
  pdf = pdf.default;
}
console.log("pdf export type:", typeof pdf);
try {
  console.log("pdf keys:", Object.keys(pdf || {}));
} catch (e) {}
// Try common alternate entry points if we didn't get the callable function
if (typeof pdf !== "function") {
  try {
    const alt = require("pdf-parse/lib/pdf-parse.js");
    if (typeof alt === "function") pdf = alt;
  } catch (e) {}
}
if (typeof pdf !== "function") {
  try {
    const alt = require("pdf-parse/dist/pdf-parse.js");
    if (typeof alt === "function") pdf = alt;
  } catch (e) {}
}
console.log("pdf callable:", typeof pdf === "function");

const files = [
  "Vehicle Parking Management System.pdf",
  "Deep Learning Model for Generating Realistic Face Images from Sketches and Textual Input.pdf",
  "M-Indicator Report.pdf",
  "M-Indicator Redesign Report.pdf",
];

const workspace = process.cwd();
const outDir = path.join(workspace, "extracted");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function run() {
  for (const filename of files) {
    const filePath = path.join(workspace, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`Missing file: ${filePath}`);
      continue;
    }
    const dataBuffer = fs.readFileSync(filePath);
    try {
      if (typeof pdf === "function") {
        const data = await pdf(dataBuffer);
        const text = data.text || "";
        const outPath = path.join(outDir, filename.replace(/\.pdf$/i, ".txt"));
        fs.writeFileSync(outPath, text, "utf8");
        console.log(`Extracted ${filename} → ${outPath}`);
      } else {
        // Fallback to pdfjs-dist
        let pdfjs;
        try {
          pdfjs = require("pdfjs-dist/legacy/build/pdf.js");
        } catch (e) {
          try {
            // pdfjs-dist v5+ is an ES module; dynamically import it
            pdfjs = await import("pdfjs-dist");
            console.log("pdfjs keys:", Object.keys(pdfjs || {}));
          } catch (err) {
            throw new Error("pdfjs-dist not available: " + err.message);
          }
        }
        // normalize api
        const getDocument =
          pdfjs.getDocument ||
          (pdfjs.PDFJS && pdfjs.PDFJS.getDocument) ||
          pdfjs.getDocument;
        if (!getDocument) throw new Error("pdfjs getDocument not found");
        const uint8 = new Uint8Array(dataBuffer);
        const loadingTask = getDocument({ data: uint8 });
        const pdfDoc = await loadingTask.promise;
        let txt = "";
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map((s) => s.str || "").join(" ");
          txt += strings + "\n\n";
        }
        const outPath = path.join(outDir, filename.replace(/\.pdf$/i, ".txt"));
        fs.writeFileSync(outPath, txt, "utf8");
        console.log(`Extracted (pdfjs) ${filename} → ${outPath}`);
      }
    } catch (err) {
      console.error(`Error parsing ${filename}:`, err.message || err);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
