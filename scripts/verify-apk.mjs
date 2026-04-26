import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apkPath = path.join(__dirname, "..", "public", "assets", "识箭.apk");
const minBytes = 1_000_000; // 真 APK 远大于 1MB；LFS 指针约 130B

if (!fs.existsSync(apkPath)) {
  process.exit(0);
}

const { size } = fs.statSync(apkPath);
if (size < minBytes) {
  const head = fs.readFileSync(apkPath, { encoding: "utf8", end: 80 });
  const isPointer =
    head.includes("https://git-lfs.github.com/spec/v1") ||
    head.startsWith("version https://git-lfs.github.com/");

  console.error(
    [
      "构建失败: public/assets/识箭.apk 只有 " +
        size +
        " 字节，不像真实安装包。",
      isPointer
        ? "当前像是 Git LFS 指针。本地请执行: git lfs install && git lfs pull；Vercel 请在项目 Settings → Git 中打开 Git LFS 并重新部署；或在 Install Command 中先执行 git lfs pull。"
        : "请确认该文件是完整的 APK 后再构建。",
    ].join("\n")
  );
  process.exit(1);
}
