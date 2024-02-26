async function handleClick() {
  console.log("fetch 開始");
  // リクエスト実行
  const resp = await axios.post("/home", { test: "リクエスト" });
  alert(resp.data.result);
}
