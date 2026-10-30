# 線上狼人殺

主持人創建房間，玩家使用 5 位數代碼加入；支援自動／自訂職業配置、隨機發牌、個人身分顯示，以及狼人專屬聊天室。

## 狼人聊天室
- 遊戲開始並揭曉身分後，聊天室不會自動開啟。
- 主持人每次需要狼人討論時，手動按下「開啟狼人聊天室（30 秒）」。
- 開啟後自動倒數 30 秒，時間到自動關閉；主持人可在下一次需要討論時再次開啟。
- 只有狼人玩家可以讀取及傳送訊息，主持人可以查看訊息但不能代替狼人發言。
- 每則訊息最多 100 字。
- 目前網站尚未實作正式的白天／夜晚階段，因此「每晚」由主持人自行判斷並手動開啟，程式不會自動辨識夜晚。

## Firebase 設定
編輯 `config.js` 貼上 Firebase Web App 的 firebaseConfig，並把 `database.rules.json` 的內容發布到 Firebase Realtime Database 規則。注意：更新 GitHub 上的規則檔不會自動更新 Firebase Console 中實際生效的規則。

網站使用 Firebase Authentication 匿名登入及 Realtime Database。
