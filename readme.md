# 描述
這是一個包含了等級系統、RPG系統以及經濟系統的插件，然後就沒然後了XD。
插件製作人：Tobydog(小風)、 珍奶
# 版本
Beta 0.7.0

# 代辦清單
- [x] 等級系統
- [ ] RPG系統
- [ ] 經濟系統

# 指令列表
指令前墜: n/

## 測試用指令
* ping
    * 檢視機器人延遲
* uptime
    * 別名: up, ut
    * 顯示機器人上線時間
* help
    * 檢視機器人指令
    * 不知道為甚麼，反正我就是還沒做完XD

## RPG指令
* rank
    * 別名: level, lv, exp, ra
    * 檢視使用者的等級和經驗
    * 例子: `n/rank` `n/rank <使用者 或 使用者ID>` 
* top
    * 顯示伺服器前幾名的成員，或查詢成員排名
    * 例子: `n/top` `n/top <頁數>` `n/top <使用者 或 使用者ID>`
* userInfo
    * 別名: ui, user
    * 顯示使用者詳細資料
    * 例子: `n/ui` `n/ui 使用者 或 使用者ID`

## 斜槓指令
* clean_roles
    * 清除你所選擇的身分組
* suggest
    * 給管理員建議

## 右鍵apps
* report
    * 檢舉使用者不恰當言論

## 經濟系統指令
還沒開始做

# 還沒開始做的指令
## RPG指令
可能會與經濟系統融合
* 職業
	* role
		* 輸入上方指令即可選擇職業
	* 職業列表
		* 
* 副本
	* dungeon start <副本ID>
	* dungeon end <副本ID>
		* 開始或結束副本
		* 別名: dun,du
		* 例子: `n/dun <start||end> <副本ID>` `n/dun <s||e> <副本ID>`
* 探索
	* adventure <s||e>
		* 別名: adv, adve
		* 開始或結束該頻道的探險
	* ad <選項>
		* 選項: afk, atk, run, mine
			* afk: 設置自己為掛機狀態
				* 在掛機狀態下，你不會輸出或受到任何傷害
				
			* atk: 自動攻擊敵人...除非他比你強
				* 在此模式下，你可對敵人進行輸出，同時也會受到傷害，代表你可以藉此獲得獎勵...或死亡
			
			* run: 跑啊!
				* 你不能輸出。你只能跑...如果跑得掉的話
				* 喔我是不是忘了說你若沒成功跑掉可能會迎接死亡?
				* 阿還有，在此模式下也會有獎勵
				
			* mine: 我生來就是為了挖、挖、挖
				* 只有挖礦，沒有打架，沒有經驗獎勵，但會獲得金錢
				* 可能有苦力怕?
				
	* loot
		* 檢視你上一次探險所獲得的戰利品
	* backpack
		* 檢視你所擁有的東西
		* 別名: b, bp
				
* 商店
	* shop
		* 開啟商店
		
	* sell
		* 把特定物品賣出
			
				
				