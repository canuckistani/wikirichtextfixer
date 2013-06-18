$(function() {
    function appender(node) {
        var link = $(node).attr('href');
        $(node).attr('href', link+"&useskin=vector");
    }

    $('span.editsection a').each(function() {
        appender(this);
    });

    $('li#ca-edit >a').each(function() {
        appender(this);
    });

    $('div#header > ul > li > a').each(function() {
        if (this.innerHTML === 'Edit') {
    		appender(this);
    	}
    });
});
