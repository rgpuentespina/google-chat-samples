function webhook() {
  const url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages"
  const options = {
    "method": "post",
    "headers": {"Content-Type": "application/json; charset=UTF-8"},
    "payload": JSON.stringify({"text": "Hello from Apps Script!"})
  };
  const response = UrlFetchApp.fetch(url, options);
  console.log(response);
}
