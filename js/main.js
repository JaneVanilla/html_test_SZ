$( document ).ready(function() {

    //accordion
    $('.tab-list').each(function(){
        var $this =$(this);
        var $tab =$this.find('li.active');
        var $link = $tab.find('a');
        var $panel =$($link.attr('href'));

        if (screen.width >= 1214) {
            var height =  $('.tab-panel.active').height();
            $('.tab-panel.active').parent().css( "padding-bottom", height );
        }

        $this.on('click', '.tab-control', function(e){
            e.preventDefault();
            var $link =$(this);
            var id =this.hash;

            if(id && !$link.is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');

                if (screen.width >= 1214) {
                    $('.tab-panel').parent().css( "padding-bottom", 0 );
                }

                $panel =$(id).addClass('active');
                $tab =$link.parent().addClass('active');

                if (screen.width >= 1214) {
                    var height =  $('.tab-panel.active').height();
                    $('.tab-panel.active').parent().css( "padding-bottom", height );
                }

            }
        })
    })


});
