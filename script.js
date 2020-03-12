$(document).ready(
    function () {


        
       


        $('#AddNewItem').button({
            icons: {
                primary: "ui-icon-circle-plus"
            }
        }).click(function () { $('#menu').dialog('open'); }); ///


        $('#menu').dialog({
            modal: true, autoOpen: false, buttons: {
                'Dodaj zadanie': function () {

                    var taskName = $('#task_name').val();
                    if (taskName === '') {
                        return false;
                    }



                    var taskHTML = '<li class="all"><span   class="done "></span>';                   
                    taskHTML += '<span class="task"></span>';
                    taskHTML += '<span class="delete"></span></li>';
                    var NewTask = $(taskHTML);



                    NewTask.find('.task').text(taskName);

                    NewTask.hide();

                    $('#todo').prepend(NewTask);


                   

                    $('.done').button(
                        {
                            icons: {
                                primary: "ui-icon-check"
                            }
                        }
                    );

                    $('.delete').button(
                        {

                            icons: {
                                primary: "ui-icon-circle-close"
                            }
                        }
                    );



                  




                    NewTask.show('clip', 250).effect('highlight', 1000);
                    $(this).dialog('close');

                },
                'Anuluj': function () { $(this).dialog('close'); }

            }
        });///


        $('#todo').on('click', '.done', function () {
            var lielem = $(this).parent('li');
            lielem.slideUp('250', function () {

                var elem = $(this);
               elem.detach();
                $('#done').prepend(elem);
                elem.slideDown();

            });


        });///


        $('.sortlist').sortable({ connectWith: '.sortlist', cancel: '.delete,.done', placeholder: 'ui-state-highlight'});////

        $('.sortlist').on('click', '.delete', function ()
        {

            $(this).parent('li').effect('explode', function () { $(this).remove(); });

        }
        );///

    }
);