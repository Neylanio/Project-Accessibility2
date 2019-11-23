 

 jQuery(function($) {
            if (typeof($.datepicker) != "undefined") {
                $.datepicker.setDefaults(
                    jQuery.extend($.datepicker.regional['pt-BR'], {
                        dateFormat: 'dd/mm/yy'
                    }));
            }
        });


 <script src = "main.js"/>