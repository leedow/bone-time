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
```
