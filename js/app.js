var badnames=0;
jQuery.ajaxSetup({cache:false});

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

$('#btnGetTrees').click(function(event) {
    
  $("#loading").toggle(true);
  $("#status").toggle(false);

  // var birdurl =  'https://tree-pruner-dot-map-of-life.appspot.com/api/prune';
  // if (getURLParameter('debug') == 'true') {
  //   birdurl =  'https://tree-pruner-alpha-dot-map-of-life.appspot.com/api/prune';
  // }
  var birdurl =  'https://tree-pruner-alpha-dot-map-of-life.appspot.com/api/prune';
  $.post(birdurl, {
    email: $('#email').val(),
    tree_base: 'sharktree',
    tree_set: $('#treeset').val(),
    sample_size: $('#treenum').val(),
    species: $('#selected').val()
  }).done(function (data) {
    $("#status").html('<div class="alert alert-success"><h4>Your request has been submitted</h4> <p>Please note your job id for reference: <strong>' + data.job_id + '</strong>. <br /> We will email you with the final results.</p></div>');
  }).fail(function (response) {
    $("#status").html('<div class="alert alert-danger"><h4>There is an issue with your request</h4><p>' + response.responseJSON.message + '.</p></div>');
  }).always(function () {
    $("#loading").toggle(false);
    $("#status").toggle(true);
  });
});

$('#btnStatus').click(function(event) {
  $("#loadingCheck").toggle(true);
  $("#statusCheck").toggle(false);
  checkJobStatus($('#emailStatus').val(), $('#jobid').val(), $("#statusCheck"));
});

function checkJobStatus(email, job_id, statusObj) {
  // var url = 'http://tree-pruner.map-of-life.appspot.com/api/result';
  // if (getURLParameter('debug') == 'true') {
  //   url = 'http://tree-pruner-alpha.map-of-life.appspot.com/api/result';
  // }
  var birdurl =  'https://tree-pruner-alpha-dot-map-of-life.appspot.com/api/prune';
  $.getJSON(url, {email: email, job_id: job_id})
    .done(function(data) {
      if (data.status == 'error') {
        statusObj.html('<div class="alert alert-danger"><h4>There is an issue with your request</h4><p>' + data.message + '.</p></div>');
      } else if (data.status == 'completed') {
        statusObj.html('<div class="alert alert-success"><h4>Your request has been processed</h4><p>You can download your generated samples <a href="' + data.message + '" class="alert-link">here</a>.</p></div>');
      } else {
        statusObj.html('<div class="alert alert-info"><h4>Hold your horses</h4><p>' + data.message + '.</p></div>');
        // window.setTimeout(function() {
        //   checkJobStatus(email, job_id, statusObj);
        // }, 60000);
      }
    })
    .fail(function(response) {
      $("#statusCheck").html('<div class="alert alert-danger"><h4>There is an issue with your request</h4><p>Please try again or contact us if the problem persists.</p></div>');
    })
    .always(function() {
      $("#loadingCheck").toggle(false);
      $("#statusCheck").toggle(true);
    });
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
