function updateTime() {
  //Miami
  let miamiElement = document.querySelector("#miami");
  let miamiDateElement = miamiElement.querySelector(".date");
  let miamiTimeElement = miamiElement.querySelector(".time");
  let miamiTime = moment().tz("America/New_York");
  miamiDateElement.innerHTML = miamiTime.format("MMMM Do YYYY");
  miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");
  //Budapest
  let budapestElement = document.querySelector("#budapest");
  let budapestDateElement = budapestElement.querySelector(".date");
  let budapestTimeElement = budapestElement.querySelector(".time");
  let budapestTime = moment().tz("Europe/Budapest");
  budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
  budapestTimeElement.innerHTML = budapestTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
