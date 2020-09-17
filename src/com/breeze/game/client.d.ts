declare module qmr {
	class EntryAfterLogin 
	{
		public static onEnterGame();
	}
    
	class MessageID 
	{
		public static init();
		public static getMsgNameById(id: number): string;
	}

	class ProtoMsgIdMap
	{
		public static instance: ProtoMsgIdMap;
		public msgIdMap: any;
	}

	class ItemConfigCfg
	{
		
	}
}