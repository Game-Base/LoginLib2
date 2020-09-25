module qmr {
	export class CommonTool {
		public constructor() {
		}

		public static getMsg(...arg):string
		{
			var s:string = arg.shift();
			for (var key in arg)
			{
				var value:any = arg[key];
				s = s.replace(/\{\d+\}/,value);
			}
			return s;
		}

		/**
         * 根据时间返回字符串 00:00:00
         */
        public static formatTime1(second: number): string
        {
            var min: number = Math.floor(second / 60) % 60;
            var sec: number = Math.floor(second % 60);
            var minStr: string = min < 10 ? ("0" + min) : min.toString();
            var secStr: string = sec < 10 ? ("0" + sec) : sec.toString();

            return minStr + ":" + secStr;
        }
	}
}