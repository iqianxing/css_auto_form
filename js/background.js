(function (window, $) {
	$(document.body).append('<form class="form form-horizontal">' +
		'<div css="control-group" id="AutoForm">' +
		'<label class="control-label">任务：</label>' +
		'<div class="controls">' +
		'<textarea type="text" id="taskList" rows=5></textarea>' +
		'<button type="button" class="btn btn-primary" id="fillForm">填单</button>' +
		'</div>' +
		'</div>' +
		'</form>');


	$("#fillForm").on("click", action);

	function action() {
		var taskList = $("#taskList").val().split("\n");
		taskList.forEach(function (v, i) {
			if (!v || !v.trim()) {
				return;
			}

			var kv = v.split("||");
			setValue(kv[0], kv[1]);
		})

	}

	function setValue(selector, value) {
		console.log("css:%s\nvalue:%s", selector, value);
		$(selector).val(value);
	}

	function doAction(selector, action) {
		console.log("css:%s\naction:%s", selector, action);
		$(selector)[action]();
	}


	window.AV = {
		setValue: setValue,
		doAction: doAction,
	}
})(window, jQuery);