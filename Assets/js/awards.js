var $myGroup = $('#awards');
$myGroup.on('show.bs.collapse','.collapse', function() {
	$myGroup.find('.collapse.show').collapse('hide');
});