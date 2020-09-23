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

		public static addInputListener(textInput: eui.TextInput, thisObject: any)
		{
			textInput.addEventListener(egret.FocusEvent.FOCUS_IN, CommonTool.focusInTxtHandler, thisObject)
			textInput.addEventListener(egret.FocusEvent.FOCUS_OUT, CommonTool.focusOutTxtHandler, thisObject)
		}

		public static removeInputListener(textInput: eui.TextInput, thisObject: any)
		{
			textInput.addEventListener(egret.FocusEvent.FOCUS_IN, CommonTool.focusInTxtHandler, thisObject)
			textInput.addEventListener(egret.FocusEvent.FOCUS_OUT, CommonTool.focusOutTxtHandler, thisObject)
		}

		public static focusInTxtHandler(evt:FocusEvent)
		{
			var inputFocus = function ()
			{
				if (document && document.body)
				{
					setTimeout(function ()
					{
						if(window.scrollTo){
							window.scrollTo(0, document.body.clientHeight);
						}
						
					}, 400);
				}
			};
			inputFocus();
		}

		public static focusOutTxtHandler()
		{
			var inputFocus = function ()
			{
				if (document && document.body)
				{
					setTimeout(function ()
					{
						if(window.scrollTo){
							window.scrollTo(0, document.body.clientHeight);
						}
						
					}, 400);
				}
			};
			inputFocus();
		}
	}
}