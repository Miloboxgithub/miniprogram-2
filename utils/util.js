
const ft =function(value){
  let date = new Date(value);
  let y = date.getFullYear(),
  m = date.getMonth() + 1,
  d = date.getDate(),
  h = date.getHours(),
  i = date.getMinutes(),
  s = date.getSeconds();
  if (m < 10) {
    m = '0' + m;
  }
  if (d < 10) {
    d = '0' + d;
  }
  if (h < 10) {
    h = '0' + h;
  }
  if (i < 10) {
    i = '0' + i;
  }
  if (s < 10) {
    s = '0' + s;
  }
  let t = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
  return i + ':' + s;
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


module.exports = {
  formatTime,
  ft
}
