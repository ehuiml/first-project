window.addEventListener('load', function () {
    var num = document.querySelector('.num');
    var numhint = document.querySelector('.num-hint')
    var numreg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var telreg = /^[0-9]{6}$/;
    var pswreg = /^[a-zA-Z0-9_-]{6,30}$/;
    var unamereg = /[\u4e00-\u9fa5]{2,5}$/;
    var statusreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$){15,18}/;
    num.onfocus = (function () {
        numhint.innerHTML = '11位数字,<a href="javasprice:;"  style="color: red;">非大陆用户点击这里</a>'
        if (numreg.test(this.value)) {
            numhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
    })
    num.onblur = (function () {
        if (numreg.test(this.value)) {
            numhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
            authcode.style = "pointer-events:visible;"
            authcode.style.backgroundColor = 'rgb(229,0,79)'
        }
        else if (num.value == '') {
            numhint.innerHTML = '<i class="iconfont" style="color:orange;font-size: 12px;">&#xe710;手机号码未填写</i>'
            authcode.style = "pointer-events:none;"
            authcode.style.backgroundColor = 'grey'
        }
        else {
            numhint.innerHTML = '11位数字,<a href="javasprice:;"  style="color: red;">非大陆用户点击这里</a>';
            authcode.style = "pointer-events:none;"
            authcode.style.backgroundColor = 'grey'
        }
    })
    var tel = document.querySelector('#tel')
    var telhint = document.querySelector('.tel-hint')
    tel.onfocus = (function () {
        telhint.innerHTML = '请填写短信中的6位数字收不到请重试'
        if (telreg.test(this.value)) {
            telhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
    })
    tel.onblur = (function () {
        if (telreg.test(this.value)) {
            telhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
        else if (tel.value == '') {
            telhint.innerHTML = '<i class="iconfont" style="color:orange;font-size: 12px;">&#xe710;验证码未填写</i>'
        }
        else {
            telhint.innerHTML = '请填写短信中的6位数字收不到请重试';
        }
    })
    var psw = document.querySelector('.psw')
    var pswhint = document.querySelector('.psw-hint')
    psw.onfocus = (function () {
        pswhint.innerHTML = '请输入6~30位字母或数字'
        if (pswreg.test(this.value)) {
            pswhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
    })
    psw.onblur = (function () {
        if (pswreg.test(this.value)) {
            pswhint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
        else if (psw.value == '') {
            pswhint.innerHTML = '<i class="iconfont" style="color:orange;font-size: 12px;">&#xe710;密码未填写</i>'
        }
        else {
            pswhint.innerHTML = '请输入6~30位字母或数字';
        }
    })
    var uname = document.querySelector('.uname')
    var unamehint = document.querySelector('.uname-hint')
    uname.onfocus = (function () {
        unamehint.innerHTML = '请输入2-5个汉字'
        if (unamereg.test(this.value)) {
            unamehint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
    })
    uname.onblur = (function () {

        if (unamereg.test(this.value)) {
            unamehint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
        else if (uname.value == '') {
            unamehint.innerHTML = '<i class="iconfont" style="color:orange;font-size: 12px;">&#xe710;姓名未填写</i>'
        }
        else {
            unamehint.innerHTML = '请输入2-5个汉字';
        }
    })
    var status = document.querySelector('.status')
    var statushint = document.querySelector('.status-hint')
    status.onfocus = (function () {
        statushint.innerHTML = '请输入15或18位身份证号码'
        if (statusreg.test(this.value)) {
            statushint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
    })
    status.onblur = (function () {

        if (statusreg.test(this.value)) {
            statushint.innerHTML = '<i style="Color:dodgerblue">√用户名格式输入正确</i>';
        }
        else if (status.value == '') {
            statushint.innerHTML = '<i class="iconfont" style="color:orange;font-size: 12px;">&#xe710;身份证号码未填写</i>'
        }
        else {
            statushint.innerHTML = '请输入15或18位身份证号码';
        }
    })
    var closeeye = document.querySelector('#closeeye')
    var openeye = document.querySelector('#openeye')
    var iconfont = document.querySelector('.iconfont')
    var flag = 0;
    iconfont.onclick = function () {
        if (flag == 0) {
            psw.type = 'text'
            flag = 1;
            // console.log(1);
            closeeye.innerHTML = '&#xe633;'
            psw.onfocus()
        }
        else if (flag !== 0) {
            psw.type = 'password'
            flag = 0;
            closeeye.innerHTML = '&#xe634;'
            // console.log(2);
            psw.onfocus()
        }
    }
    var authcode = document.querySelector('.authcode')
    var time = 5

    authcode.onclick = function () {
        this.disabled = true;
        var timer = window.setInterval(function () {
            if (time == 0) {
                clearInterval(timer);
                authcode.disabled = false;
                authcode.innerHTML = "发送验证码";
                time = 5;
                authcode.style = "pointer-events:visible;"
                authcode.style.backgroundColor = 'rgb(229,0,79)'

            } else {
                authcode.innerHTML = "还剩下" + time + "秒";
                time--
                authcode.style = "pointer-events:none;"
                authcode.style.backgroundColor = 'grey'
            }
        }, 1000)
    }
    var mobile = document.querySelector('.mobile')
    mobile.onclick = function () {
        this.className = 'current'
        email.className = 'email'
        custom.className = 'custom'
    }
    var email = document.querySelector('.email')
    email.onclick = function () {
        this.className = 'current'
        custom.className = 'custom'
        mobile.className = 'mobile'
    }
    var custom = document.querySelector('.custom')
    custom.onclick = function () {
        this.className = 'current'
        email.className = 'email'
        mobile.className = 'mobile'
    }
})