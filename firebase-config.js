// 互動式短劇《外遇》共用 Firebase 設定
//
// ⚠ 本工具使用「獨立」Firebase 專案（RTDB-only，asia-southeast1）。
//   不要複製 qqqqaaaa / opening-danmaku / raise-game 的值過來——
//   各工具專案獨立，額度與安全規則互不干擾。
// ⚠ 專案要用 Jesse 個人 Gmail 建立（公司 Workspace 帳號會卡「父項資源」）。
//
// 正式值建好專案後填入下方四欄；只要任一欄還是 PASTE_HERE，
// stage.html 會以 demo 模式運作（吃內建示範資料，不連網）。
const firebaseConfig = {
  apiKey: "AIzaSyATwe-zoMzBc45JtmvBj4kDeye8w3GUVOU",
  authDomain: "conte-affair.firebaseapp.com",
  databaseURL: "https://conte-affair-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "conte-affair",
};

// 場次隔離：所有資料都在 rooms/{ROOM}/ 底下。
// 彩排用 "conte-affair-rehearsal"，正式演出用 "conte-affair-live"（2026-09-01 定案，見 deploy-guide.md）。
// 切 ROOM 需要重新上傳本檔並強制重新整理（Cmd+Shift+R），演出前 30 分鐘不要再改。
const ROOM = "conte-affair-rehearsal";

// config 是否已填入正式值（任一欄佔位即視為未設定 → demo 模式）
function isFirebaseConfigured() {
  return ["apiKey", "authDomain", "databaseURL", "projectId"].every(function (key) {
    const value = firebaseConfig[key];
    return typeof value === "string" && value.length > 0 && value.indexOf("PASTE_HERE") === -1;
  });
}

// REST 寫入端點（觀眾投稿頁用：不載 SDK、不佔常駐連線）
function improvRestBase() {
  if (!isFirebaseConfigured()) return null;
  return firebaseConfig.databaseURL.replace(/\/+$/, "");
}
