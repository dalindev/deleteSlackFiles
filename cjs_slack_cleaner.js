// Add overlay btn
$('body').prepend('<div style="position:fixed;z-index:9999;float:left;top:200px;left:30px;">'+
				  ' <button style="background:#009A44;border-radius:5px;color:white;font-size:20px;" id="remove_all_slack_file">'+
				  '   Remove All Slack files!'+
				  ' </button><br>'+
				  '<span>Action Count:<span id="action_count"></span></span>'+
				  '</div>');

//click event
$('#remove_all_slack_file').click(start);

function start(){

	if($('.pagination-list li').length <= 2){
		return alert('ALL DONE!');
	}

	console.log(1);
	let selAllBtn = $("button:contains('Select All')");
	if (selAllBtn.is(":visible"))
		return selectAll()
	setTimeout(() => {start}, 100)
}

function selectAll(){
	console.log(2);
	let selAllBtn = $("button:contains('Select All')");
	selAllBtn.click()
	if (selAllBtn.is(":visible"))
		return setTimeout(() => {selectAll()}, 100)
	deleteSelectedFiles()
}

function deleteSelectedFiles(){
	console.log(3);
	let delSelBtn = $("button:contains('Delete Selected Files')");
	delSelBtn.click();
	delSelBtn.hide();
	if (delSelBtn.is(":visible"))
		return setTimeout(() => {deleteSelectedFiles()}, 100)
	yesDeleteThemAll()
}

function yesDeleteThemAll(){
	console.log(4);
	let yesDelAll = $("input[value='Yes, delete them all!'");
	yesDelAll.click();
	if (yesDelAll.is(":visible"))
		return setTimeout(() => {yesDeleteThemAll()}, 100)
	deletingProgress()
}

function deletingProgress(){
	let delProgress = $('.deletingMsg');
	if (delProgress.is(":visible"))
		return start()
	setTimeout(() => {deletingProgress()}, 100)
}

function actionCounter($count){

}
