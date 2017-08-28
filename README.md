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

```
