$(document).ready(
    function () {

        var EditText = '';
        var $EditElem;
        var $RemoveElem;

        function check() {

            var T_all = 0;
            var T_todo = 0;
            var T_done = 0;

            $('#todo li').each(function () { T_todo += 1; });
            $('#done li').each(function () { T_done += 1; });
            T_all = T_todo + T_done;
            $('#NumberTasksToDo').text(T_todo);
            $('#NumberTasksDone').text(T_done);
            $('#NumberTasksAll').text(T_all);


        }
       


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
                    ////

                    check();



                    ////

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

                ///
                check();
                ///

            });


        });///


        $('#done').on('click', '.done', function () {

            $('#Error').dialog('open');
        });///


        $('.sortlist').sortable({ connectWith: '.sortlist', cancel: '.delete,.done', placeholder: 'ui-state-highlight' });////



        $('#Remove').dialog(
            {
                modal: true,
                autoOpen: false,
                buttons: {
                   
                    'Tak': function () { $RemoveElem.slideDown();  $RemoveElem.remove(); $(this).dialog('close'); },
                    'Nie': function () { $(this).dialog('close'); }


                },
                close: function () {                 
                                     
                   

                } 
               }
            );///

        $('#Error').dialog(
            {
                modal: true,
                autoOpen: false,
                
                close: function () {

                    $(this).dialog('close');

                }
            }
        );///



        $('body').on('dialogclose', '#Remove', function () {

            var T_all = 0;
            var T_todo = 0;
            var T_done = 0;

            $('#todo li').each(function () { T_todo += 1; });
            $('#done li').each(function () { T_done += 1; });
            T_all = T_todo + T_done;
            $('#NumberTasksToDo').text(T_todo);
            $('#NumberTasksDone').text(T_done);
            $('#NumberTasksAll').text(T_all);


        } 
        );///




       


        $('.sortlist').on('click', '.delete', function () {


            $RemoveElem = $(this).parent('li');

            $('#Remove').dialog('open');         
           

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

        $('#done').on('click', '.edit', function () {

            EditText = $(this).prev().text();
            $EditElem = $(this).prev();
            $('#edit_task').val(EditText);
            $('#Edit').dialog('open');

        });/////
        

        $('.sortlist').on(

            'click', 'li', function () {

                var T_all = 0;
                var T_todo = 0;
                var T_done = 0;

                $('#todo li').each(function () { T_todo += 1; });
                $('#done li').each(function () { T_done += 1; });
                T_all = T_todo + T_done;
                $('#NumberTasksToDo').text(T_todo);
                $('#NumberTasksDone').text(T_done);
                $('#NumberTasksAll').text(T_all);


            }
        );///


       





    }
);