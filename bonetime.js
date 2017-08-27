(function() {
  /**
   * @param {str} yyyy-mm-dd | yyyy-m-d | yyyy-mm-dd hh:mm:ss
   */
  function Time(str) {
    this.obj = null //原生JS DATE对象
    this.time = 0 //时间戳
    this.year = 0
    this.month = 0
    this.date = 0
    this.hour = 0
    this.minute = 0
    this.second = 0

    this.init(str)
  }

  /**
   * 初始化日期数据
   * @param {String} str yyyy-mm-dd | yyyy-m-d | yyyy-mm-dd hh:mm:ss
   *                     yyyy/mm/dd | yyyy/m/d | yyyy/mm/dd hh:mm:ss
   */
  Time.prototype.init = function(str) {

    if(typeof str == 'string'){
      var d = str.split(' ')
      var d1 = d[0].split('-')

      if (d1.length === 1) {
        d1 = d[0].split('/')
      }

      this.year = parseInt(d1[0])
      this.month = parseInt(d1[1])
      this.date = parseInt(d1[2])

      if (d[1]) {
        var d2 = d[1].split(':')
        this.hour = parseInt(d2[0])
        this.minute = parseInt(d2[1])
        this.second = parseInt(d2[2])
      }

      this.obj = new Date(this.year, this.month - 1, this.date, this.hour, this.minute, this.second)
    } else {
      if(str instanceof Date){
        this.obj = str
      } else {
        this.obj = new Date()
      }
      this.year = this.obj.getFullYear()
      this.month = this.obj.getMonth()+1
      this.date = this.obj.getDate()
      this.hour = this.obj.getHours()
      this.minute = this.obj.getMinutes()
      this.second = this.obj.getSeconds()
    }


  }

  /**
   * 比较日期是否相等
   * @param {Time} aim 对比的time对象
   * @param {String} min 对比的最小精确单位
   */
  Time.prototype.equal = function(aim, min) {
    var m = min || 'date'
    var result = false

    switch (m) {
      case 'date':
        {
          if (this.year === aim.year && this.month === aim.month && this.date === aim.date) {
            result = true
            break
          }
        }
      default:
        {
          result = false
        }
    }

    return result

  }

  /**
   * @param {format} yy-mm-dd hh:mm:ss
   */
  Time.prototype.format = function(format) {

    var result = format.replace('yyyy', this.year)
    result = result.replace('MM', this.month)
    result = result.replace('dd', this.date)
    result = result.replace('HH', this.hour)
    result = result.replace('mm', this.minute)
    result = result.replace('ss', this.second)

    return result
  }

  /**
   * 转换时间
   * @param {param} Mon 周一
   *                Sun 周日
   * @return Time Object
   */
  Time.prototype.transfer = function(param){
    var base = this.obj
    var day = base.getDay()==0?7:base.getDate(),
        date = base.getDate(),
        month = base.getMonth(),
        year = base.getFullYear()

    switch(param){
      case 'Mon': {
        base.setDate(date - day + 1)
        return new Time(base)
        break;
      }
      case 'Sun': {
        base.setDate(date + (7-day))
        return new Time(base)
        break;
      }
    }
  }


  if (typeof module != 'undefined') {
    module.exports = Time
  } else {
    window.bonetime = Time
  }

})()
