$(document).ready(function(){
  $.get('https://code.jquery.com/jquery-3.4.1.min.js', function(data){
    $('#outputTxt').text(data);
  });
});

// Tab control
$('#btnHtml').click(function(){
  $(this).addClass('active');
  $('#btnTxt').removeClass('active');
  $('#outputHtml').show();
  $('#outputTxt').hide();
});
$('#btnTxt').click(function(){
  $(this).addClass('active');
  $('#btnHtml').removeClass('active');
  $('#outputTxt').show();
  $('#outputHtml').hide();
});

$('#btn').click(function(){
  var name = $('#name').val();
  var img_name = $('#img_name').val();
  var preorder = $('#preorder').val();
  var blurb = $('#blurb').val();

  var lang;
  var id;
  var subject;

  // Gets language
  if ( $('#french').prop('checked') == true ){
    lang = 'FRE';
  } else{
    lang = 'ENG';
  }

  // gets image name
  if ( img_name == '' ){
    img_name = 'AMEX_img_FPO';
  }

  var yr = new Date();
  var yrShort = yr.getFullYear().toString().slice(-2);

  // finds name in preorder and bolds it, replaces ® to HTML code
  var regx = new RegExp(name, 'g');
  var newPreorder = preorder
    .replace(regx, '<b>' + name +'</b>')
    .replace(/[à]/g, '&agrave;')
		.replace(/[Â]/g, '&Acirc;')
		.replace(/[â]/g, '&acirc;')
		.replace(/[Ç]/g, '&Ccedil;')
		.replace(/[ç]/g, '&ccedil;')
		.replace(/[È]/g, '&Egrave;')
		.replace(/[è]/g, '&egrave;')
		.replace(/[É]/g, '&Eacute;')
		.replace(/[é]/g, '&eacute;')
		.replace(/[Ê]/g, '&Ecirc;')
		.replace(/[ê]/g, '&ecirc;')
		.replace(/[Î]/g, '&Icirc;')
		.replace(/[Ô]/g, '&Ocirc;')
		.replace(/[ô]/g, '&ocirc;')
		.replace(/[Ù]/g, '&Ugrave;')
		.replace(/[ù]/g, '&ugrave;')
		.replace(/[Û]/g, '&Ucirc;')
		.replace(/[û]/g, '&ucirc;')
		.replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>')
		.replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>')
		.replace(/“/g, '&ldquo')
		.replace(/”/g, '&rdquo')
		.replace(/\n/g, '<br>\r');

  // converts name to mailing ID
  id = 'CA_FOTL_' + yrShort + '_' + name.replace(/ /g, '_') + 'ON_' + lang;

  // converts name to subject line
  subject = 'Edmonton | ' + name + ' via Front Of The Line®';

  $('#id').text(id.toUpperCase());
  $('#subject').text(subject);
  $('#output_img_name').text(img_name);

  $('#outputHtml').val(newPreorder);
});
