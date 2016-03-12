/*
 * @author: situ
 * @url: dohtml5.duapp.com
 * @from: WEB开发大本营
 * @email：gao_st@126.com
 * @qq: 454123662
 */

!function(window, document, $, undefined) {
    
    /*
     * ie678 placeholder属性修复
     */
    $.fn.placeholder = function() {
    	var input = document.createElement('input');
    	
    	if ('placeholder' in input) {
    		return;
    	}
    	
    	$('body')
	    	.on('click', '.wbc-placeholder', function() {
	    		$(this).prev().focus();
	    	})
	    	.on('keyup', 'input', function() {
    			var $this = $(this), 
    				val = this.value;
    			if (val.length > 0) {
    				$this.next('.wbc-placeholder').hide();
    			} else {
    				$this.next('.wbc-placeholder').show();
    			}
	    	});
    	
        this.each(function() {
            var $this = $(this),
            	txt = $this.attr('placeholder');
            	
            $this.wrap('<span class="input"></span>');
            $this.after('<span class="wbc-placeholder">' + txt + '</span>');
        });
    };
    
    $('input').placeholder();

}(window, document, jQuery);