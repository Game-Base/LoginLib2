module qmr
{
	export class HtmlUtil
	{
		public static htmlParse: egret.HtmlTextParser = new egret.HtmlTextParser();
		public constructor()
		{
		}

		/**主要处理了\n  读表\n读取有问题 */
		//解析工具已经做了，这里不用搞了
		public static getHtmlString(msg: string): egret.ITextElement[]
		{
			if (msg.indexOf('\\n') > -1)
			{
				let s: any = msg.split("\\n").join("\n");
				return HtmlUtil.htmlParse.parse(s);
			}
			return HtmlUtil.htmlParse.parse(msg);
		}

		public static getHtmlTextElement(msg: string, color: number, isUnderLine: boolean = false, href?: string, strokeColor?: number, stroke?: number): egret.ITextElement[]
		{
			let msgStr = '<font color=' + color;
			if (href) 
			{
				msgStr += " href=event:" + href;
			}
			if (isUnderLine) 
			{
				msgStr += " u='true'";
			}
			if (strokeColor) 
			{
				msgStr += " strokecolor=" + strokeColor;
			}
			if (stroke) 
			{
				msgStr += " stroke=" + stroke;
			}
			msgStr += ">" + msg + '</font>'
			return HtmlUtil.getHtmlString(msgStr);
		}

		/**
		 * @desc 返回对应颜色的html字符串
		 */
		public static getHtmlText(msg: string, color: number, isUnderLine: boolean = false, href?: string): string
		{
			if (href && isUnderLine) return '<font color=' + color + " href=event:" + href + " u='true'>" + msg + '</font>';
			if (href) return '<font color=' + color + " href=event:" + href + ">" + msg + '</font>';
			if (isUnderLine) return '<font color=' + color + " u='true'>" + msg + '</font>';
			return '<font color=' + color + ">" + msg + '</font>';
		}

		public static getColorSize(msg: string, color: number, size?: number): string
		{
			if (size) return '<font color=' + color + " size=" + size + ">" + msg + '</font>';
			return '<font color=' + color + ">" + msg + '</font>';
		}

		/**
		 * @desc 返回对应颜色的html字符串
		 */
		public static getHtmlTexts(data: Array<Array<any>>): any
		{
			var temp = [];
			for (let i = 0; i < data.length; i++)
			{
				temp.push(this.getHtmlText(data[i][1], data[i][0], data[i][2], data[i][3]));
			}
			return temp.join("");
		}
		/**
		 * @desc 针对道具类特殊的html字符串返回
		 * @param itemDataId道具配置Id
		 * @param count数量
		 */
		public static getItemHtmlText(itemDataId: number, count: number): string
		{
			let msg: string = "";
			// let itemData:ItemData = SingleModel.getInstance().packModel.getItemData(itemDataId);
			// if(itemData){
			// 	msg+='<font color='+ColorUtil.getColorByQuality(itemData.color)+'>'+itemData.name+'</font>';
			// 	msg+='<font color='+ColorConst.COLOR_WHITE+'>'+" x "+count+'</font>';
			// }else{
			// 	msg="未知道具Id["+itemDataId+"]";
			// }
			return msg;
		}

		public static log(...args): string
		{
			var backStr: string = "args:";
			for (var i in args)
			{
				if (!qmr.PlatformConfig.isDebug || !args) return;
				backStr += args[i] + "\n";
			}
			return backStr
		}

		//根据QueryString参数名称获取值
		public static getQueryStringByName(name) {
            var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
            if (result == null || result.length < 1) {
                return "";
            }
            return result[1];
        }

        public static isPhoneNumber(phoneNum): boolean {
            // let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
			// return reg.test(phoneNum);
			if(!phoneNum){
				return false;
			}
			if(!HtmlUtil.IsInteger(phoneNum)){
				return;
			}
			return String(phoneNum).length == 11;
		}
		
		/**
         * 判断输入的字符是否为整数
         */
        public static IsInteger(value):boolean {
            var str = value.trim();
            if (str.length != 0) {
                let reg =new RegExp(/^[-+]?\d*$/);
                if (!reg.test(str)) {
                    return false;
                }
            }
            return true;
        }

	}
}