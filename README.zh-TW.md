# 3D 2048

[English](README.md) | **繁體中文**

在 4×4×4 立方體裡玩的 3D 版 2048。用滑鼠或手指轉動立方體，再沿著立方體的某一邊拖曳，所有方塊會一起往那個方向滑，數字相同的方塊會合併。

可以直接在瀏覽器上玩，也有打包好的 Android App。

## 特色

- **4×4×4 立方體**，方塊依數字呈不同顏色的半透明狀，後面方塊的數字也看得到。
- **沿邊拖曳判定**：遊戲會判斷你的拖曳方向最接近立方體的哪一組邊。拖曳方向和那組邊的夾角超過 22° 就不算合法移動。
- **即時拖曳提示**：對應的那組邊會變色，綠色代表合法，紅色代表不合法。畫面上還有虛線箭頭，標出遊戲判定的方向。
- **UNDO**：每局可用 3 次。**RESET** 會開新局，UNDO 次數也會恢復。
- **CONGRATULATIONS!**：從上次 RESET 開始算，每當融合出比之前都大的數字就會跳出來。
- 最高分會儲存在你的裝置上。

## 操作方式

| 動作 | 滑鼠（電腦） | 觸控（手機） |
|---|---|---|
| 滑動合併 | 在立方體上按住，沿著邊拖曳 | 單指按在立方體上，沿著邊拖曳 |
| 旋轉立方體 | 在空白處拖曳，或在任何位置按右鍵拖曳 | 單指在空白處拖曳，或雙指拖曳 |
| 縮放 | 滑鼠滾輪 | 雙指捏合 |
| 復原 | UNDO 按鈕或 Ctrl+Z | UNDO 按鈕 |
| 只想旋轉 | — | 打開 **ROTATE** 按鈕，單指拖曳一律旋轉 |

小提示：立方體的三組邊最好都清楚看得到。如果某組邊幾乎正對著你，就沒辦法沿它滑動，先把立方體轉一下再試。

## 在瀏覽器上玩

下載或 clone 這個 repository，用 Chrome、Edge、Firefox 或 Safari 打開 `index.html`。第一次開啟需要網路，因為 three.js 是從 CDN 載入的。

## 安裝到 Android 手機

1. 到這個 repository 的 **[Releases](../../releases)** 頁面，把最新版的 `3D-2048.apk` 下載到手機。
2. 點開下載好的檔案進行安裝。

> [!IMPORTANT]
> **安裝前請先看這些提醒：**
> - **要允許安裝不明來源的應用程式。** 不是從 Google Play 下載的 App，Android 預設會擋下來。跳出提示時按 **設定**，替你的瀏覽器或檔案管理員打開 **允許這個來源**，再返回按 **安裝**。
> - **Google Play 安全防護可能會跳出警告**，說無法辨識這個 App。按 **更多詳細資料 → 仍要安裝** 即可。會有警告是因為這個 App 沒有上架 Google Play。
> - **需要 Android 6.0 以上。**
> - **這是 debug（測試）版。** 它用開發用的金鑰簽署。如果之後要安裝用不同金鑰簽署的版本，要先解除安裝舊版。解除安裝會一併刪除最高分紀錄。
> - **請只從這個 repository 的 Releases 頁面下載 APK。** 其他來源的 APK 可能被改過。
> - **iPhone / iPad**：iOS 無法安裝 APK 檔，請改用 Safari 玩瀏覽器版。

App 完全不需要網路也能玩。

## 自行打包

需要先安裝：

- [Node.js](https://nodejs.org/) 20 以上
- [Android Studio](https://developer.android.com/studio)，並跑完初次設定精靈，讓它裝好 Android SDK
- **JDK 21。** Gradle 8.11 無法在較新的 Java 上執行，例如新版 Android Studio 內建的 Java 25。如果打包時出現 `Unsupported class file major version` 錯誤，請安裝 JDK 21（例如 [Eclipse Temurin](https://adoptium.net/)），並在 `~/.gradle/gradle.properties` 加入這一行：
  ```properties
  org.gradle.java.home=C:\\Program Files\\Eclipse Adoptium\\jdk-21.x.x-hotspot
  ```

然後執行：

```bash
npm install
npm run apk
```

APK 會產生在 `android/app/build/outputs/apk/debug/app-debug.apk`。

其他指令：

| 指令 | 用途 |
|---|---|
| `npm run build:web` | 從 `index.html` 產生 `www/`，並把 three.js 附在本機 |
| `npm run sync` | 產生 `www/` 並複製到 Android 專案 |
| `npm run open` | 用 Android Studio 打開 Android 專案 |
| `npm run apk` | 產生 `www/`、同步到 Android 專案，再打包 debug APK |

## 專案結構

```
index.html              整個遊戲（瀏覽器版，three.js 從 CDN 載入）
scripts/build-www.mjs   產生 App 用的 www/（附帶 three.js，可離線）
capacitor.config.json   App 名稱與 ID
android/                Android 原生專案（Capacitor）
```

只需要改 `index.html`。`www/` 是由它自動產生的，不會上傳到 GitHub。

可以調整的參數（格數、合法角度、UNDO 次數等）都放在 `index.html` 程式的最上方。

## 授權

Copyright (c) 2026 YI-CHEN, YOU

本專案採用 [MIT 授權](LICENSE)釋出。另附[中文參考譯本](LICENSE.zh-TW.md)，但一切以英文原文為準。

本專案使用 three.js 與 Capacitor，兩者皆採用 MIT 授權，詳見 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

「2048」指的是數字滑塊合併這一類益智遊戲。本專案是獨立製作的 3D 遊戲，與其他任何 2048 遊戲的作者沒有關聯，也未獲得其背書。
