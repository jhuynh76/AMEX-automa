/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Optional Toggle
# Info Snippet
# Help Button
# Tab Control
# CTA function
  ## Replacement function
  ## Mailing ID
  ## Output
# Back Button
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
# Info snippet
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
# Help Button
--------------------------------------------------------------*/
$('#btnHelp').click(function(){
  
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
$('#btnGenerate').click(function(e){
  var name = $('#name').val();
  var img_name = $('#img_name').val();
  var presale = $('#presale').val();
  var blurb = $('#blurb').val();
  var provinceID = $('#province option:selected').val();
  var provinceName = $('#province option:selected').text();
  var location = $('#location').val();

  // Terms & conditions
  var bud_stage_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\nFor tickets purchased through Ticketmaster.ca, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Each order may also be subject to ticket limits set out by parties other than American Express.\n\n**Access to the American Express® Entrance is available to individuals upon the presentation of a valid American Express Card.\n\n***Subject to Lounge capacity.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting https://www.americanexpress.com/ca/en/customer-service/contact-us.html.\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit https://www.americanexpress.com/ca/en/privacy-statement.html.\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here. This email address is not monitored for other inquiries and messages received cannot be responded to.";

  var bud_stage_fr = 'AAAAA';

  var reg_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting https://www.americanexpress.com/ca/en/customer-service/contact-us.html.\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit https://www.americanexpress.com/ca/en/privacy-statement.html.\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here: https://ebm.cheetahmail.com/r/regf2?a=0&aid=268935401&n=115. This email address is not monitored for other inquiries and messages received cannot be responded to.";

  var reg_fr = 'https://code.jquery.com/jquery-3.4.1.min.js';

  var lang = 'ENG';
  var terms = reg_en;

  // language conditional statement
  if ( $('#french').prop('checked') == true ){
    lang = 'FRE';
    terms = reg_fr;
  }

  // Budweiser stage conditional statement
  if ( $('#bud').prop('checked') == true ){
    terms = bud_stage_en;
  }

  // Bud & french checked
  if ( $('#bud').prop('checked') == true && $('#french').prop('checked') == true ){
    terms = bud_stage_fr;
  }

  // if img name is blank, give it the FPO name
  if ( img_name == '' ){ img_name = 'AMEX_img_FPO.jpg'; }

  // Validator
  if (name == ' ' || name == ''){
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 400);
    $('#name').focus();

  } else{
    $('#input').fadeOut(300, function(){});
    $('#output').fadeIn(300, function(){});
  }

  /*--------------------------------------------------------------
  ## Replacement function
  --------------------------------------------------------------*/
  // finds name in presale and bolds it, replaces ® to HTML code
  // var regx = new RegExp(name, 'g');
  var newpresale = presale.replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');

  var newBlurb = blurb.replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');

  var newLocation = location.replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');


  /*--------------------------------------------------------------
  ## Location & Venue
  --------------------------------------------------------------*/
  // Gets first line, capitalizes it
  var firstLn = location.split('\n');
  var cap = firstLn[0].toUpperCase();
  var firstLnFrmt = '<b>' + cap + '</b><br>';

  // Removes the first line from location input because its already saved in from firstLnFrmt
  var rmFirstLn = location.replace(firstLn[0], '');

  var locationFinal = firstLnFrmt + rmFirstLn;

  /*--------------------------------------------------------------
  ## Mailing ID
  --------------------------------------------------------------*/
  // converts name to mailing ID
  var yr = new Date();
  var yrShort = yr.getFullYear().toString().slice(-2);
  var id = 'CA_FOTL_' + yrShort + '_' + name.replace(/ /g, '_') + '_' + provinceID + '_' + lang;

  // converts name to subject line
  var subject = provinceName + ' | ' + name + ' via Front Of The Line®';

  $('#id').text(id.toUpperCase());
  $('#subject').text(subject);
  $('#output_img_name').text(img_name);

  /*--------------------------------------------------------------
  ## Output
  --------------------------------------------------------------*/
  $('#outputHtml').val(
    name + '\n\r' +
    img_name + '\n\r' +
    newpresale + '\n\r' +
    newBlurb + '\n\r' +
    locationFinal
  );

  $('#outputTxt').val(
    "No Images? View this online:\nhttp://%%track%%/amex2?t_sparams=%%t_sparams%%\n\nAMERICAN EXPRESS invites®: https://www.americanexpress.com/ca/en/entertainment/tickets\n\nFRONT OF THE LINE® PRESALE\n" + name.toUpperCase() + "\n\n" + presale + "\n\nLocation & Venue\n\n" + location + "\n\nMore from American Express® Invites: https://www.americanexpress.com/ca/en/entertainment/tickets\n\nMembership Rewards: https://www.americanexpress.com/en-ca/rewards/membership-rewards/about-program?inav=ca_menu_rewards_mr_home\n\nMy Card Benefits: https://www.americanexpress.com/ca/en/credit-cards/all-cards/\n\n\n" + terms
  );
});

/*--------------------------------------------------------------
# Back button
--------------------------------------------------------------*/
$('#btnBack').click(function(){
  $('#output').fadeOut(300, function(){});
  $('#input').fadeIn(300, function(){});
});
