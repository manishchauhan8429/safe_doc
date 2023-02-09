// exit
function exit()
{
	var exit_btn = document.getElementById("exit");
	exit_btn.onclick = function(){
		history.back();
	}
}

exit();

// menu hover coding
function menu_hover()
{
	var app_name = document.getElementById("app-box");
	var li = app_name.getElementsByTagName("LI");
	var i;
	for(i=0;i<li.length;i++)
	{
		li[i].onmouseover = function(){
			this.style.webkitTransform = "rotate(360deg)";
			this.style.mozTransform = "rotate(360deg)";
			this.style.transform = "rotate(360deg)";
			this.style.webkitTransition = "1s";
			this.style.mozTransition = "1s";
			this.style.transition = "1s";
		}

		li[i].onmouseout = function(){
			this.style.webkitTransform = "rotate(0deg)";
			this.style.mozTransform = "rotate(0deg)";
			this.style.transform = "rotate(0deg)";
			this.style.webkitTransition = "1s";
			this.style.mozTransition = "1s";
			this.style.transition = "1s";
		}
	}
}

menu_hover();

// update default ledgers
function default_ledger()
{
	var cash = localStorage.getItem("cash_ledger");
	var profit_loss = localStorage.getItem("profit_loss_ledger");
	if(cash == null && profit_loss == null)
	{
		var cash_ledger = {ledger_name:"Cash",group:"Cash in hand",balance:"",mode:""};
		var cash_store = JSON.stringify(cash_ledger);
		localStorage.setItem("cash_ledger",cash_store);

		var profit_loss_ledger = {ledger_name:"Profit & Loss A/c",group:"Profit & Loss A/c",balance:"",mode:""};
		var profit_loss_store = JSON.stringify(profit_loss_ledger);
		localStorage.setItem("profit_loss_ledger",profit_loss_store);
	}



}

default_ledger();