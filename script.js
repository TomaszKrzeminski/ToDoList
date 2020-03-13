$(document).ready(
    function () {

        var EditText = '';
        var $EditElem;
        var $RemoveElem;


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
                    taskHTML += '<span class="edit"></span>';
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

                    $('.edit').button(
                        {

                            icons: {
                                primary: "ui-icon-wrench"
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


        $('.sortlist').sortable({ connectWith: '.sortlist', cancel: '.delete,.done', placeholder: 'ui-state-highlight' });////



        $('#Remove').dialog(
            {
                modal: true,
                autoOpen: false,
                buttons: {
                    'Tak': function () { $RemoveElem.effect('explode', function () { $(this).remove(); }); $(this).dialog('close');     },
                    'Nie': function () { $(this).dialog('close'); }


                }
               }
            );///


        $('.sortlist').on('click', '.delete', function () {


            $RemoveElem = $(this).parent('li');

            $('#Remove').dialog('open');

           // $(this).parent('li').effect('explode', function () { $(this).remove(); });

        }
        );///




        $('#Edit').dialog({
            modal: true, autoOpen: false, buttons: {
                'Zapisz': function () {
                    var text = $('#edit_task').val();
                    $EditElem.text(text);
                    $(this).dialog('close');

                },
                'Anuluj': function () { $(this).dialog('close'); }

            }
        });///



        $('#todo').on('click', '.edit', function () {

            EditText = $(this).prev().text();
            $EditElem = $(this).prev();
            $('#edit_task').val(EditText);
            $('#Edit').dialog('open');

        });/////


        










    }
);