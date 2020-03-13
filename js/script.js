/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Info Snippet
# Help Button
# Tab Control
# CTA function
  ## Validator
  ## Replacement function
  ## Mailing ID
  ## Output
# Back Button
--------------------------------------------------------------*/
$('#province').each(function(){
  $('input[type="checkbox"]').after().data(name);
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
  var location = $('#location').val();

  /*--------------------------------------------------------------
  # Links
  --------------------------------------------------------------*/
  // ENG
  var ae_invites_en = 'https://www.americanexpress.com/ca/en/entertainment/tickets';
  var membership_rewards_en = 'https://www.americanexpress.com/en-ca/rewards/membership-rewards/about-program?inav=ca_menu_rewards_mr_home';
  var card_benefits_en = 'https://www.americanexpress.com/ca/en/credit-cards/all-cards/';
  
  var privacy_en = 'https://www.americanexpress.com/ca/en/privacy-statement.html';
  var contact_us_en = 'https://www.americanexpress.com/ca/en/customer-service/contact-us.html';
  var unsubscribe_en = 'https://ebm.cheetahmail.com/r/regf2?a=0&aid=268935401&n=115';

  // FRE
  var ae_invites_fr = 'https://www.americanexpress.com/ca/fr/entertainment/tickets';
  var membership_rewards_fr = 'https://www.americanexpress.com/fr-ca/rewards/membership-rewards/about-program';
  var card_benefits_fr = 'https://www.americanexpress.com/ca/fr/cartes-de-credit/toutes-les-cartes/';
  
  var privacy_fr = 'https://www.americanexpress.com/ca/fr/privacy-statement.html?inav=ca_fr_legalfooter_privacy';
  var contact_us_fr = 'https://www.americanexpress.com/ca/fr/service-clientele/nous-joindre.html';
  var unsubscribe_fr = 'https://ebm.cheetahmail.com/r/regf2?a=0&aid=268935401&n=116&email=%25%25email%25%25';

  // Terms & conditions
  var reg_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting: " + contact_us_en + ".\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit: " + privacy_en + ".\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here: " + unsubscribe_en + ". This email address is not monitored for other inquiries and messages received cannot be responded to.";

  var reg_fr = "*Tout achat doit être porté intégralement à une Carte American Express. Sous réserve des disponibilités, des modalités, des restrictions, des procédures de vérification et des frais applicables à l’événement et à la billetterie. Les billets et les forfaits peuvent ne pas être transférables et ne doivent pas être revendus. Il n’y aura aucun échange et aucun remboursement, sous réserve des obligations du marchand en vertu des lois applicables.\n\nPour les billets achetés par l’intermédiaire de Ticketmaster.ca, American Express a fixé une limite de deux commandes pour cette offre. Cette limite s’applique à toutes les Cartes associées à tous vos comptes American Express. Chaque commande peut également être assujettie à des limites de billets déterminées par des parties autres qu’American Express.\n\nMD: utilisée en vertu d’une licence accordée par American Express. © Banque Amex du Canada, 2020.\n\nEnvoyée par la Banque Amex du Canada, C.P. 3204, succursale F, Toronto (Ontario) M1W 3W7. Vous pouvez vérifier l’authenticité du présent courriel en communiquant avec nous ou en allant au: " + contact_us_fr + ".\n\nNotez que ce courriel a été envoyé à : Si ce message a été reçu à une autre adresse, c’est qu’il y a été réacheminé.\n\nPour savoir comment nous recueillons, utilisons et protégeons vos renseignements personnels, visitez le site: " + privacy_fr + ".\n\nSi, à l'avenir, vous ne voulez pas recevoir de courriels d'Avant-Première, cliquer ici: " + unsubscribe_fr + ". Il faut prévoir environ de deux à quatre semaines pour le traitement de votre demande. Nous ne vérifions pas les autres courriels envoyés à cette adresse électronique et nous n’y répondons pas.";

  var bud_stage_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\nFor tickets purchased through Ticketmaster.ca, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Each order may also be subject to ticket limits set out by parties other than American Express.\n\n**Access to the American Express® Entrance is available to individuals upon the presentation of a valid American Express Card.\n\n***Subject to Lounge capacity.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting: " + contact_us_en + ".\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit: " + privacy_en + ".\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here: " + unsubscribe_en + ". This email address is not monitored for other inquiries and messages received cannot be responded to.";

  var bud_stage_fr = "AAAA";

  // array list of misc terms in both english and french, default is eng. When french is selected, it'll switch
  var misc_en = ["No Images? View this online", "AMERICAN EXPRESS invites®", "FRONT OF THE LINE® PRESALE", "Location & Venue", "More from American Express® Invites", "Membership Rewards", "My Card Benefits"];
  var misc_fr = ["Il n'y a pas d'images? Consultez ce courriel en ligne", "AMERICAN EXPRESS invites(MD)", "AVANT PREMIÈRE(MD) PRÉVENTE", "Emplacements et Lieux", "Plus d'offres d'American Express invite(MD)", "Programme Points-privilèges", "Avantages de ma Carte"];
  var misc = misc_en;

  var lang = 'ENG';
  var terms = reg_en;

  // language conditional statement
  if ( $('#french').prop('checked') == true ){
    lang = 'FRE';
    terms = reg_fr;
    misc = misc_fr;
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

  /*--------------------------------------------------------------
  ## Validator
  --------------------------------------------------------------*/
  if (name == ' ' || name == ''){
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 400);
    $('#name').focus();
  }
  else if (location == ' ' || location == ''){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#location').offset().top}, 400);
    $('#location').focus();
  }
  else{
    $('#input').fadeOut(300, function(){});
    $('#output').fadeIn(300, function(){});
  }

  /*--------------------------------------------------------------
  ## Replacement function
  --------------------------------------------------------------*/
  // finds name in presale and bolds it, replaces ® to HTML code
  // var regx = new RegExp(name, 'g');
  var newpresale = presale.replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');

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
  var selected = [];
  $('#province input[type="checkbox"]:checked').each(function(){
    selected.push( $(this).data('val') );
  });

  var provinceId = selected.toString().replace(/,/g, '_');
  var yr = new Date();
  var yrShort = yr.getFullYear().toString().slice(-2);
  var id = 'CA_FOTL_' + yrShort + '_' + name.replace(/ /g, '_') + '_' + provinceId + '_' + lang;

  // converts name to subject line
  var subject = provinceId + ' | ' + name + ' via Front Of The Line®';

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
    locationFinal
  );

  $('#outputTxt').val(
    misc[0] + ":\nhttp://%%track%%/amex2?t_sparams=%%t_sparams%%\n\n" + misc[1] + ": " + ae_invites_en + "\n\n" + misc[2] + "\n" + name.toUpperCase() + "\n\n" + presale + "\n" + misc[3] + "\n\n" + location + "\n\n" + misc[4] + ": " + ae_invites_en + "\n\n" + misc[5] + ": " + membership_rewards_en + "\n\n" + misc[6] + ": " + card_benefits_en + "\n\n" + terms
  );
});

/*--------------------------------------------------------------
# Back button
--------------------------------------------------------------*/
$('#btnBack').click(function(){
  $('#output').fadeOut(300, function(){});
  $('#input').fadeIn(300, function(){});
});
