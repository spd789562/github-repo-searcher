# Github Repository Searcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start project

```
yarn start
```

## 專案架構

### `src/api`
集中 Github API
### `src/store`
React Context API Redux
### `src/utils`
輔助函數
### `src/components`
各式元件

## 技術細節
### 使用 `use-context-selector` 替代 React Context API
避免多個 reducer 造成的渲染問題
### 使用 Context 建立 Redux
避免使用 props 傳遞所造成的渲染
### 使用 `throttle-debounce` 
使用 debounce 避免搜尋太過頻繁
### 使用 `react-window`
建立 virtual list 增加捲動效能

### 使用 `IntersectionObserver`
替代 onScroll，更方便的監聽是否到達指定位置

## 流程說明

### Github API 流程
使用 Context API 建立 Redux 系統，並透過 `src/store/middleware/api-emit.js` 將 github API 收到的 response 處理後，再送往 `src/store/middleware/api.js` 存入 Redux Store。

### UI 流程
搜尋元件(`src/components/search`)搜尋後，變更 `loading-status` 並送出查詢(`API_GET_REPO`)，根據收到的結果變更 `loading-status`，若收到回應時的查詢字與當前存至 store 中的 query 不相符合，代表為前次的搜尋，不做任何事。

於 Repo 列表最後一個加上 `IntersectionObserver`，並於元件進入畫面時送出下一頁查詢(`API_GET_REPO_NEXT`)，並獲取 store 中的 query 及 page 後送出查詢(`API_GET_REPO`)。

若查詢 API 錯誤中包涵 `API rate limit exceeded` 則代表達到 API 呼叫上限，將會獲取當前 Rate Limit(`API_GET_LIMIT`)，並取得下次可搜尋時間，若觸發呼叫上限並取得下次可搜尋時間，重試元件(`src/components/result-list/loading-status/retry-buton`)將會開始倒數，並於倒數結束時送出重試查詢(`API_GET_REPO_RETRY`)，並獲取 store 中的 query 及 page 後送出查詢(`API_GET_REPO`)。