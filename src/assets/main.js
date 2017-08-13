$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/kirksolar.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
	  var output = '';
	  var len;
	  var i;
		for (i = 0, len = response.courses.completed.length; i < len; i++) {
			output += '<div class="course">'
				+'<h3>'+response.courses.completed[i]['title']+'</h3>'
				+'<img src="'+response.courses.completed[i]['badge']+'"/>'
				+'<a href="'+response.courses.completed[i]['url']+'" target="_blank" class="btn btn-primary">See Course</a>'
			+'</div>';
		}
	  $('#badges').html(output);
	  console.log(response.courses);
    }
  });

});
