module qmr{
    export class WebLoadingManager
	{ 
        public static setLoadingStatus(msg?: string)
		{
			msg = msg || "";
			var showLoading = window["showPreLoading"];
			if(showLoading){
				showLoading(msg);
			}
		}
		
		private static bgName:string;
		private static bgArray = ["1022_map.jpg"];
		public static getBgName(): string
		{
			if(!WebLoadingManager.bgName){
				let i: number = Math.floor(Math.random()*WebLoadingManager.bgArray.length);
				WebLoadingManager.bgName = SystemPath.getLoginResDir() + "unpack/" + WebLoadingManager.bgArray[i];
			}
			return WebLoadingManager.bgName;
		}
    }
}