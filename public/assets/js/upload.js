$(document).ready(function() {
    if(isAPIAvailable()) {
      $('#files').bind('change', handleFileSelect);
    }
});

function isAPIAvailable() {
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    return true;
  } else {
    // source: File API availability - http://caniuse.com/#feat=fileapi
    // source: <output> availability - http://html5doctor.com/the-output-element/
    document.writeln('The HTML5 APIs used in this form are only available in the following browsers:<br />');
    // 6.0 File API & 13.0 <output>
    document.writeln(' - Google Chrome: 13.0 or later<br />');
    // 3.6 File API & 6.0 <output>
    document.writeln(' - Mozilla Firefox: 6.0 or later<br />');
    // 10.0 File API & 10.0 <output>
    document.writeln(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
    // ? File API & 5.1 <output>
    document.writeln(' - Safari: Not supported<br />');
    // ? File API & 9.2 <output>
    document.writeln(' - Opera: Not supported');
    return false;
  }
}

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var file = files[0];

  // read the file metadata
  var output = ''
      output += '<span style="font-weight:bold;">' + escape(file.name) + '</span><br />\n';
      output += ' - FileType: ' + (file.type || 'n/a') + '<br />\n';
      output += ' - FileSize: ' + file.size + ' bytes<br />\n';
      output += ' - LastModified: ' + (file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a') + '<br />\n';

  // read the file contents
  printTable(file);

  // post the results
  $('#list').append(output);
}

function mismachedRowEvaluation(row) {
  return row[5] !== row[8];
}

function printTable(file) {
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(event){
    var csv = event.target.result;
    var data = $.csv.toArrays(csv);
    var filteredData = data.filter(mismachedRowEvaluation);
    //mapping data from the array 
    var mappedData = filteredData.map(function(entry) {
        return {
          config_item_id: entry[0],
          ci_name: entry[1],
          install_status: entry[2],
          model_id_classification: entry[3],
          company: entry[4],
          department: entry[5],
          owned_by: entry[6],
          owned_by_company: entry[7],
          owned_by_department: entry[8],
          email: entry[9]
        }
    });
  //posting the object into the table
    $.post('/api/Mismatched_CI', {data: mappedData}, function(data) {
      // if (item.owned_by_department !== item.department)
      console.log(data);
  });

  //rendering the data from the file directly on the page
    var html = '';

      for(var row in data) {
      html += '<tr>\r\n';
      for(var item in data[row]) {
        html += '<td>' + data[row][item] + '</td>\r\n';
      }
      html += '</tr>\r\n';
    }
    $('#contents').html(html);
  };
  reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
}

//code for app
    

