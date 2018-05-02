$(function() {
	// Add overlay btn
	$('body').prepend('<div style="position:fixed;z-index:9999;float:left;top:200px;left:30px;">'+
					  ' <button style="background:#009A44;border-radius:5px;color:white;font-size:20px;" id="remove_all_slack_file">'+
					  '   Remove All Slack files!'+
					  ' </button><br>'+
					  '<span style="font-size:18px;">Page Count: <b><span id="action_count">0</span></span></b>'+
					  '</div>');

	//click event
	$('#remove_all_slack_file').click(start);

	var step = 0;

	function start(){
		cleansed();
		if($('.pagination-list li').length <= 2){
			return alert('ALL DONE!');
		}
		let selAllBtn = $("button:contains('Select All')");
		setTimeout(() => {
			if (selAllBtn.is(":visible")){
				selectAll()
			} else {
				$("button:contains('Deselect All')").click();
				start();
			}
		}, 1000)
	}

	function selectAll(){
		cleansed();
		step = step === 0 ? 1 : step;
		if(step === 1){
		let selAllBtn = $("button:contains('Select All')");
			setTimeout(() => {
				if (selAllBtn.is(":visible")){
					selAllBtn.click();
					deleteSelectedFiles();
				} else {
					selectAll();
				}
			}, 1000)
		}
	}

	function deleteSelectedFiles(){
		cleansed();
		step = step ===1 ? 2 : step;
		if(step === 2){
			let delSelBtn = $("button:contains('Delete Selected Files')");
			setTimeout(() => {
				if (delSelBtn.is(":visible")){
					delSelBtn.click();
					yesDeleteThemAll();
				} else {
					deleteSelectedFiles();
				}
			}, 1000)
		}
	}

	function yesDeleteThemAll(){
		cleansed();
		step = step === 2 ? 3 : step;
		if(step === 3){
			let yesDelAll = $("input[value='Yes, delete them all!'");
			setTimeout(() => {
				if (yesDelAll.is(":visible")){
					yesDelAll.click();
					deletingProgress();
				} else {
					$("button:contains('Delete Selected Files')").click();
					yesDeleteThemAll();
				}
			}, 1000)
		}
	}

	function deletingProgress(){
		cleansed();
		step = step ===3 ? 4 : step;
		if(step === 4){
			let delProgress = $('.deletingMsg');
			setTimeout(() => {
				if (delProgress.is(":visible")){
					actionCounter();
					step = 0;
					start();
				} else {
					deletingProgress();
				}
			}, 2000)
		}
	}

	function actionCounter(){
		let ac = $('#action_count');
		ac.text(+ac.text()+1)
	}

	function cleansed(){
		let cls = $("button:contains('Record this momentous event on Slack!')");
		if(cls.is(':visible')){
			$('div.ngdialog-close').click();
		}
	}

});
