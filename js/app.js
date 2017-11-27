var badnames=0;
jQuery.ajaxSetup({cache:false});

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

$('#gettrees').click(
       function(event) {
    var birdurl =  'http://litoria.eeb.yale.edu/bird-tree/cgi-bin/birdsJ.pl';

    $("#loading").toggle(true);

    badnames=0;
          $.post(
            birdurl,
            {
                email: $('#email').val(),
                treeset: $('#treeset').val(),
                treenum: $('#treenum').val(),
                species: $('#selected').val(),
    debug: getURLParameter('debug')
            },
            function(response) {
                $.each(
                        response.results,
                        function (result) {
          if(response.results[result].bad_name) {
            badnames++;
          } else if (response.results[result].error_message) {
        $("#loading").toggle(false);
                                alert(response.results[result].error_message);

                            } else {
         checkStatus(response.results[result].pid, response.results[result].trees);
                            }
                        }
                );
             }
          );
  }
);

function checkStatus (procid, trees) {
        var pid = procid;
  if($.trim(procid) != "") {
    $.post(
      'http://litoria.eeb.yale.edu/bird-tree/cgi-bin/statusJ.pl',
      {pid: $.trim(procid)},
      function(response) {
        if(response.results[0].trees_done >= trees-5) {
          $("#loading").toggle(false);
          $("#status").text(trees+' trees done. Downloading ZIP.');
          setTimeout("$('#status').text('')",2000);
          setTimeout(
            function(){
              $.download('http://litoria.eeb.yale.edu/bird-tree/cgi-bin/birdzip.pl', {pid : pid})
            },
            3000
          );
          if(badnames>0) {
            alert(badnames + ' of the selected names are invalid. These are listed in the invalid_names.txt file.');
          }
        } else {
          if(response.results[0].trees_done!="") {
            $("#status").text(response.results[0].trees_done+' trees done.');
          }
          if(document.all) {
            setTimeout("checkStatus('"+pid+"','"+trees+"')",2000);
          } else {
            setTimeout(function(){checkStatus(pid,trees)},2000);
          }
        }
        }
    ).error(
      function(err) {
        setTimeout(function(){checkStatus(pid,trees)},2000);
      }
    );
  }
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
$('#treenum').blur(
  function(event) {
    if(isNumber(this.value)) {
      if(this.value<100) {
        this.value=100;
      } else if (this.value>10000) {
        this.value=10000;
      }
    } else {
      this.value=10;
    }
  }
)
