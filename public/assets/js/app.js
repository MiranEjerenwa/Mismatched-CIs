$(function () {
	/* ******************************************* */
	//CI Mismatch table display code
	/* ******************************************* */
	// rendering the mismatched CI Table
	const render = function (items) {
		$('#ciData').empty();
		//appending each item to the ciData #
		items.forEach(function (item) {
			$('#ciData').append(renderItemRow(item));
		});
	}
	//api call and render
	const getItems = function () {
		$.get('/api/Mismatched_CI').then(render);
	}
	const renderItemRow = function (item) {
		const tr = $('<tr>'); 
		
		//appending items to the div(Items should be the name of the table)
			tr.append(
				$('<td>').text(item.config_item_id),
				$('<td>').text(item.ci_name),
				$('<td>').text(item.install_status),
				$('<td>').text(item.model_id_classification),
				$('<td>').text(item.company),
				$('<td>').text(item.department),
				$('<td>').text(item.owned_by),
				$('<td>').text(item.owned_by_company),
				$('<td>').text(item.owned_by_department)
				// preventing email from being displayed
				// $('<td>').text(item.email)
			);
			return tr;
	}
	getItems();
});

