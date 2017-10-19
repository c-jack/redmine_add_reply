(function() {

jQuery(document).ready(function() {
	var icons = $('div#content>div.contextual:has(a.icon)');
	
    if (icons.length === 0) {	return;	}
	
    var shbtn = $('a.add-reply');
	
    icons.each(function() {
		
        var replyButton = shbtn.clone().css('display', 'inline')
		var historyh3 = $(this).find('#history h3');
		if (historyh3.length > 0) {    replyButton.insertAfter(historyh3);
        } else {            			$(this).append(replyButton);	    	}
        });
	});
})();

$("body").on('DOMSubtreeModified', "#preview", function() {
  $('#preview.preview_container').fadeIn();
});
function hideReply() {
$('#replyToIssue').hide("drop", {direction: "down"}, "fast");
}
function addReply() {
$('#reply-form #all_attributes p:not(.attributes p)').remove();
$('#reply-form #all_attributes #attributes .splitcontent:nth-of-type(2)').remove();
$('#reply-form #all_attributes #attributes .splitcontent .splitcontentright').remove();
$('#reply-form #all_attributes #attributes .splitcontent .splitcontentleft p:nth-of-type(4)').remove();
$('#replyToIssue').show("drop", {direction: "down"}, "fast");
}
