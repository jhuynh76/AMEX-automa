/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Optional Toggle
# Help Snippet
# Tab Control
# CTA function
  ## Replacement function
  ## Mailing ID
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Optional Toggle
--------------------------------------------------------------*/
$('.blurb input[type="checkbox"]').change(function(){
    if ( $(this).prop('checked') ){
      $('#blurb').fadeIn(300, function(){});      
    }
    else{
      $('#blurb').fadeOut(300, function(){});
    }
});

/*--------------------------------------------------------------
# Help snippet
--------------------------------------------------------------*/
$('.label').each(function(){
  $('span').mouseover(function(){
    $(this).next('code').fadeIn(100, function(){});
  });

  $('span').mouseout(function(){
    $(this).next('code').fadeOut(100, function(){});
  });
});

/*--------------------------------------------------------------
# Tab control
--------------------------------------------------------------*/
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

/*--------------------------------------------------------------
# CTA function
--------------------------------------------------------------*/
$('#btnGenerate').click(function(){
  var name = $('#name').val();
  var img_name = $('#img_name').val();
  var blurb = $('#blurb').val();
  var location = $('#location').val();

  var lang;
  var id;
  var subject;

  // Terms & conditions
  var bud_stage_en = 'https://www.w3.org/TR/PNG/iso_8859-1.txt';
  var bud_stage_fr = 'https://code.jquery.com/jquery-3.4.1.min.js';
  var reg_en = 'https://www.w3.org/TR/PNG/iso_8859-1.txt';
  var reg_fr = 'https://code.jquery.com/jquery-3.4.1.min.js';


  // language conditional statement
  if ( $('#french').prop('checked') == true ){
    lang = 'FRE'; //for subject output
    $.get(bud_stage_fr, function(terms_fr){
      $('#outputTxt').val(terms_fr);
    });

  } else{
    lang = 'ENG'; //for subject output
    $.get(bud_stage_en, function(terms_en){
      $('#outputTxt').val(terms_en);
    });
  }

  // if img name is blank, give it the FPO name
  if ( img_name == '' ){ img_name = 'AMEX_img_FPO'; }

  var yr = new Date();
  var yrShort = yr.getFullYear().toString().slice(-2);

  /*--------------------------------------------------------------
  ## Replacement function
  --------------------------------------------------------------*/
  // finds name in preorder and bolds it, replaces ® to HTML code
  var preorder = $('#preorder').val();
  var regx = new RegExp(name, 'g');
  var newPreorder = preorder
    // .replace(regx, '<b>' + name +'</b>')
    
    .replace(/[Á]/g, '&Aacute;')
    .replace(/[á]/g, '&aacute;')
    .replace(/[À]/g, '&Agrave;')
    .replace(/[à]/g, '&agrave;')
    .replace(/[Â]/g, '&Acirc;')
    .replace(/[â]/g, '&acirc;')
    
    .replace(/[É]/g, '&Eacute;')
    .replace(/[é]/g, '&eacute;')
    .replace(/[È]/g, '&Egrave;')
    .replace(/[è]/g, '&egrave;')
    .replace(/[Ê]/g, '&Ecirc;')
    .replace(/[ê]/g, '&ecirc;')

    .replace(/[Í]/g, '&Iacute;')
    .replace(/[í]/g, '&iacute;')
    .replace(/[Ì]/g, '&Igrave;')
    .replace(/[ì]/g, '&igrave;')
    .replace(/[Î]/g, '&Icirc;')
    .replace(/[î]/g, '&icirc;')

    .replace(/[Ó]/g, '&Oacute;')
    .replace(/[ó]/g, '&oacute;')
    .replace(/[Ò]/g, '&Ograve;')
    .replace(/[ò]/g, '&ograve;')
    .replace(/[Ô]/g, '&Ocirc;')
    .replace(/[ô]/g, '&ocirc;')

    .replace(/[Ú]/g, '&Uacute;')
    .replace(/[ú]/g, '&uacute;')
    .replace(/[Ù]/g, '&Ugrave;')
    .replace(/[ù]/g, '&ugrave;')
    .replace(/[Û]/g, '&Ucirc;')
    .replace(/[û]/g, '&ucirc;')

		.replace(/[Ç]/g, '&Ccedil;')
		.replace(/[ç]/g, '&ccedil;')

		.replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>')
		.replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>')
		.replace(/“/g, '&ldquo')
		.replace(/”/g, '&rdquo')
		.replace(/\n/g, '<br>\r');


  /*--------------------------------------------------------------
  ## Location & Venue
  --------------------------------------------------------------*/
  // Gets first line, capitalizes it
  firstLn = location.split('\n');
  cap = firstLn[0].toUpperCase();
  firstLnFrmt = '<b>' + cap + '</b><br>';

  // Removes the first line from location input because its already saved in from firstLnFrmt
  rmFirstLn = location.replace(firstLn[0], '');

  locationFinal = firstLnFrmt + rmFirstLn;

  /*--------------------------------------------------------------
  ## Mailing ID
  --------------------------------------------------------------*/
  // converts name to mailing ID
  id = 'CA_FOTL_' + yrShort + '_' + name.replace(/ /g, '_') + '_ON_' + lang;

  // converts name to subject line
  subject = 'Edmonton | ' + name + ' via Front Of The Line®';

  $('#id').text(id.toUpperCase());
  $('#subject').text(subject);
  $('#output_img_name').text(img_name);

  // $('#outputHtml').val(newPreorder);

  $('#outputHtml').val(newPreorder + '\n\r' + locationFinal);

});