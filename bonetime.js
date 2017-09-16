(function() {
  /**
   * @param {str} yyyy-mm-dd | yyyy-m-d | yyyy-mm-dd hh:mm:ss
   */
  function Time(str) {
    this.obj = null //原生JS DATE对象
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
    function filter(num) {
     return (Array(2).join('0') + num).slice(-2);
    }

    var result = format.replace('yyyy', this.year)
    result = result.replace('MM', filter(this.month))
    result = result.replace('dd', filter(this.date))
    result = result.replace('HH', filter(this.hour))
    result = result.replace('mm', filter(this.minute))
    result = result.replace('ss', filter(this.second))

    return result
  }

  Time.prototype.getTime = function() {
    return this.obj.getTime()
  }

  /**
   * 转换时间
   * @param {param} Mon|Tues|..|Sun|+10days|-10days|2017year|9month|11date|11hour|11min|11seconds
   * @return Time Object
   */
  Time.prototype.transfer = function(param){
    var base = new Date(this.obj.getTime())
    var d = {
          day : base.getDay()==0?7:base.getDay(),
          date : base.getDate(),
          month : base.getMonth(),
          year : base.getFullYear(),
          date: base.getDate(),
          hours: base.getHours(),
          minutes: base.getMinutes(),
          seconds: base.getSeconds()
        },
        driver = filter(param),
        week = {
          'Mon': 1,
          'Tues': 2,
          'Wed': 3,
          'Thur': 4,
          'Fri': 5,
          'Sat': 6,
          'Sun': 7
        },
        funcs = {
          'year': 'setFullYear',
          'month': 'setMonth',
          'date': 'setDate',
          'hours': 'setHours',
          'minutes': 'setMinutes',
          'seconds': 'setSeconds'
        }

    switch(driver.mode){
      case 'Mon': case 'Tues': case 'Wed': case 'Thur': case 'Fri': case 'Sat': {
        base.setDate(d.date - d.day + week[driver.mode])
        return new Time(base)
        break;
      }
      case 'Sun': {
        base.setDate(d.date + (7-d.day))
        return new Time(base)
        break;
      }
      case 'days': {
        base.setDate(d.date + driver.value)
        return new Time(base)
        break;
      }
      case 'year': case 'month': case 'date': case 'hours': case 'minutes': case 'seconds': {

        if(driver.prefix === '+' || driver.prefix === '-'){

          base[funcs[driver.mode]](d[driver.mode] + driver.value)
        }  else {
          base[funcs[driver.mode]](driver.value)
        }

        return new Time(base)
        break;
      }
      default:{
        return this
      }
    }

    function filter(str){
      var prefix = str.match(/^\+|\-/),
          mode = str.match(/[a-zA-Z]+/)

      return {
        prefix: prefix?prefix[0]:'',
        mode: mode?mode[0]:'',
        value: parseInt(str)
      }
    }
  }


  if (typeof module != 'undefined') {
    module.exports = Time
  } else {
    window.bonetime = Time
  }

})()
