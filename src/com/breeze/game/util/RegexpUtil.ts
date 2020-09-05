module qmr {
    export class RegexpUtil {
        // 手机号校验
        public static isPhoneNumber(phoneNum): boolean {
            // let let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            /*
            * 移动号码包括的号段：134/135/136/137,138,139；
            *                     147/148(物联卡号)；
            *                     150/151/152/157/158/159；
            *                     165（虚拟运营商）；
            *                     1703/1705/1706（虚拟运营商）、178；
            *                     182/183/184/187/188
            *                     198

            * 联通号段包括：130/131
            *               145
            *               155/156
            *               166/167(虚拟运营商)
            *               1704/1707/1708/1709、171
            *               186/186
            *
            * 电信号段包括： 133
            *                153
            *                162(虚拟运营商)
            *                1700/1701/1702(虚拟运营商)
            *                180/181/189
            *                191/199
            * */
            let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
            return reg.test(phoneNum);
        }

        //判断输入内容是否为空
        // public static IsNull(value) {
        //     var str = value.trim();
        //     if (str.length == 0) {
        //         alert('对不起，文本框不能为空或者为空格!');//请将“文本框”改成你需要验证的属性名称!
        //     }
        // }

        // //判断日期类型是否为YYYY-MM-DD格式的类型
        // public static IsDate(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^(\d{1,4})(-|/)(\d{ 1, 2 }) \2(\d{ 1, 2})$ /;
        //         var r = str.match(reg);
        //         if (r == null)
        //             alert('对不起，您输入的日期格式不正确!'); //请将“日期”改成你需要验证的属性名称!
        //     }
        // }

        // //判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
        // public static IsDateTime(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^(\d{1,4})(-|/)(\d{ 1, 2 }) \2(\d{ 1, 2})(\d{ 1, 2}): (\d{ 1, 2 }): (\d{ 1, 2 }) $/;
        //         var r = str.match(reg);
        //         if (r == null)
        //             alert('对不起，您输入的日期格式不正确!'); //请将“日期”改成你需要验证的属性名称!
        //     }
        // }

        // //判断日期类型是否为hh:mm:ss格式的类型
        // public static IsTime(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^((20|21|22|23|[0-1]\d):[0-5][0-9])(:[0-5][0-9])?$/
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的日期格式不正确!");//请将“日期”改成你需要验证的属性名称!
        //         }
        //     }
        // }

        // //判断输入的字符是否为英文字母
        // public static IsLetter(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^[a-zA-Z]+$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的英文字母类型格式不正确!");//请将“英文字母类型”改成你需要验证的属性名称!
        //         }
        //     }
        // }

        // //判断输入的字符是否为整数
        // public static IsInteger(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^[-+]?\d*$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的整数类型格式不正确!");//请将“整数类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的字符是否为双精度
        // public static IsDouble(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^[-+]?\d+(.\d+)?$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的双精度类型格式不正确!");//请将“双精度类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的字符是否为:a-z,A-Z,0-9
        // public static IsString(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^[a-zA-Z0-9_]+$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的字符是否为中文
        // public static IsChinese(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^[\u0391-\uFFE5]+$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的EMAIL格式是否正确
        // public static IsEmail(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的邮编(只能为六位)是否正确
        // public static IsZIP(value) {
        //     var str = value.trim();
        //     if (str.length != 0) {
        //         let reg = /^\d{6}$/;
        //         if (!reg.test(str)) {
        //             alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！
        //         }
        //     }
        // }

        // //判断输入的数字不大于某个特定的数字
        // public static MaxValue(value, max) {
        //     var val = value.trim();
        //     if (value.length != 0) {
        //         let reg = /^[-+]?\d*$/;
        //         if (!reg.test(value)) {//判断是否为数字类型
        //             if (val > parseInt(max)) //“123”为自己设定的最大值
        //             {
        //                 alert('对不起，您输入的数字超出范围');//请将“数字”改成你要验证的那个属性名称！
        //             }
        //         }
        //     }
        // }
    }
}