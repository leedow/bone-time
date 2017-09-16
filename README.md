# Bone-time

## Install

```
npm install bone-time --save
```
or
```javascript
<script type="text/javascript" src="./bonetime.min.js"></script>
```

## Examples

```javascript
document.write(new bonetime().format('yyyy-MM-dd HH:mm:ss'))
document.write(new bonetime().format('yyyy年MM月dd日 HH时mm分ss秒'))
document.write(new bonetime('2011-11-11 11:11:11').format('yyyy年MM月dd日 HH时mm分ss秒'))
document.write(new bonetime('2011/11/11 11:11:11').format('yyyy年MM月dd日 HH时mm分ss秒'))
document.write(new bonetime(new Date()).format('yyyy年MM月dd日 HH时mm分ss秒'))

var today = new bonetime()
// day of this week
document.write(today.transfer('Mon').format('yyyy年MM月dd日'))
document.write(today.transfer('Tues').format('yyyy年MM月dd日'))
document.write(today.transfer('Wed').format('yyyy年MM月dd日'))
document.write(today.transfer('Thur').format('yyyy年MM月dd日'))
document.write(today.transfer('Fri').format('yyyy年MM月dd日'))
document.write(today.transfer('Sat').format('yyyy年MM月dd日'))
document.write(today.transfer('Sum').format('yyyy年MM月dd日'))
//10 days later
document.write(today.transfer('+10days').format('yyyy年MM月dd日'))
document.write(today.transfer('-10days').format('yyyy年MM月dd日'))
// 1999year
document.write(today.transfer('1999year').format('yyyy年MM月dd日'))
// 1 year before
document.write(today.transfer('-1year').format('yyyy年MM月dd日'))
// 1 year later
document.write(today.transfer('+1year').format('yyyy年MM月dd日'))
// January
document.write(today.transfer('0month').format('yyyy年MM月dd日'))
// 10 month before
document.write(today.transfer('-10month').format('yyyy年MM月dd日 HH:mm'))
// 10 month later
document.write(today.transfer('+10month').format('yyyy年MM月dd日 HH:mm'))
// 10:00 AM today
document.write(today.transfer('10hours').transfer('0minutes').format('yyyy年MM月dd日 HH:mm'))
// 10 hours before
document.write(today.transfer('-10hours').format('yyyy年MM月dd日 HH:mm'))
// 10 hours later
document.write(today.transfer('+10hours').format('yyyy年MM月dd日 HH:mm'))
// 0 minutes
document.write(today.transfer('0minutes').format('yyyy年MM月dd日 HH:mm'))
// 30 minutes before
document.write(today.transfer('-30minutes').format('yyyy年MM月dd日 HH:mm'))
// 30 minutes later
document.write(today.transfer('+30minutes').format('yyyy年MM月dd日 HH:mm'))
// 0 seconds
document.write(today.transfer('0seconds').format('yyyy年MM月dd日 HH:mm:ss'))
// 30 seconds before
document.write(today.transfer('-30seconds').format('yyyy年MM月dd日 HH:mm:ss'))
// 30 seconds later
document.write(today.transfer('+30seconds').format('yyyy年MM月dd日 HH:mm:ss'))
```
