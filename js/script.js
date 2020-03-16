/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Info Snippet
# Help Button
# Tab Control
# CTA function
  ## Validator
  ## Replacement functions
  ## Mailing ID
  ## Output
    ### HTML
    ### TXT
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
    $(this).next('code').fadeIn(200, function(){});
  });

  $('span').mouseout(function(){
    $(this).next('code').fadeOut(200, function(){});
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
  var amexHeaderImg_en = 'http://f.email.americanexpress.com/i/45/268935401/amex_invites_header.jpg';
  var ae_invites_en = 'https://www.americanexpress.com/ca/en/entertainment/tickets';
  var membership_rewards_en = 'https://www.americanexpress.com/en-ca/rewards/membership-rewards/about-program?inav=ca_menu_rewards_mr_home';
  var card_benefits_en = 'https://www.americanexpress.com/ca/en/credit-cards/all-cards/';
  
  var privacy_en = 'https://www.americanexpress.com/ca/en/privacy-statement.html';
  var contact_us_en = 'https://www.americanexpress.com/ca/en/customer-service/contact-us.html';
  var unsubscribe_en = 'https://ebm.cheetahmail.com/r/regf2?a=0&aid=268935401&n=115';

  // FRE
  var amexHeaderImg_fr = 'http://f.email.americanexpress.com/i/45/268935401/amex_invites_header_fr.jpg';
  var ae_invites_fr = 'https://www.americanexpress.com/ca/fr/entertainment/tickets';
  var membership_rewards_fr = 'https://www.americanexpress.com/fr-ca/rewards/membership-rewards/about-program';
  var card_benefits_fr = 'https://www.americanexpress.com/ca/fr/cartes-de-credit/toutes-les-cartes/';
  
  var privacy_fr = 'https://www.americanexpress.com/ca/fr/privacy-statement.html?inav=ca_fr_legalfooter_privacy';
  var contact_us_fr = 'https://www.americanexpress.com/ca/fr/service-clientele/nous-joindre.html';
  var unsubscribe_fr = 'https://ebm.cheetahmail.com/r/regf2?a=0&aid=268935401&n=116&email=%25%25email%25%25';

  // if img name is blank, give it the FPO name
  if ( img_name == '' ){ img_name = 'AMEX_img_FPO.jpg'; }
  var img_link = '<img src="http://f.email.americanexpress.com/i/45/268935401/' + img_name + '" alt="" title="" height="auto" style="border:none;display:block;outline:none;text-decoration:none;width:100%;height:auto;" width="620" />';

  // Terms & conditions
  var reg_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting: " + contact_us_en + ".\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit: " + privacy_en + ".\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here: " + unsubscribe_en + ". This email address is not monitored for other inquiries and messages received cannot be responded to.";
  var reg_fr = "*Tout achat doit être porté intégralement à une Carte American Express. Sous réserve des disponibilités, des modalités, des restrictions, des procédures de vérification et des frais applicables à l’événement et à la billetterie. Les billets et les forfaits peuvent ne pas être transférables et ne doivent pas être revendus. Il n’y aura aucun échange et aucun remboursement, sous réserve des obligations du marchand en vertu des lois applicables.\n\nMD: utilisée en vertu d’une licence accordée par American Express. © Banque Amex du Canada, 2020.\n\nEnvoyée par la Banque Amex du Canada, C.P. 3204, succursale F, Toronto (Ontario) M1W 3W7. Vous pouvez vérifier l’authenticité du présent courriel en communiquant avec nous ou en allant au: " + contact_us_fr + ".\n\nNotez que ce courriel a été envoyé à : Si ce message a été reçu à une autre adresse, c’est qu’il y a été réacheminé.\n\nPour savoir comment nous recueillons, utilisons et protégeons vos renseignements personnels, visitez le site: " + privacy_fr + ".\n\nSi, à l'avenir, vous ne voulez pas recevoir de courriels d'Avant-Première, cliquer ici: " + unsubscribe_fr + ". Nous ne vérifions pas les autres courriels envoyés à cette adresse électronique et nous n'y répondons pas.";

  var bud_stage_en = "*Purchase must be charged in full to an American Express Card. Subject to availability and to event and ticketing terms, restrictions, verification procedures and fees. Tickets and packages may not be transferable and should not be resold. No refunds and no exchanges subject to merchant's obligations under applicable law.\n\nFor tickets purchased through Ticketmaster.ca, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Each order may also be subject to ticket limits set out by parties other than American Express.\n\n**Access to the American Express® Entrance is available to individuals upon the presentation of a valid American Express Card.\n\n***Subject to Lounge capacity.\n\n® Used under license from American Express. Copyright ©: AMEX Bank of Canada, 2020.\n\nSent from Amex Bank of Canada, P.O. Box 3204, Station 'F', Toronto, ON, M1W 3W7. You can contact us or verify with us the authenticity of this email by visiting: " + contact_us_en + ".\n\nNote that this e-mail was sent to: %%EMAIL%%. If you received this email at a different address, this email message was forwarded.\n\nTo find out how we collect, use and safeguard your personal information, please visit: " + privacy_en + ".\n\nIf you do not wish to receive Front Of The Line® Entertainment e-Update emails in the future, please click here: " + unsubscribe_en + ". This email address is not monitored for other inquiries and messages received cannot be responded to.";
  var bud_stage_fr = "*Tout achat doit être porté intégralement à une Carte American Express. Sous réserve des disponibilités, des modalités, des restrictions, des procédures de vérification et des frais applicables à l’événement et à la billetterie. Les billets et les forfaits peuvent ne pas être transférables et ne doivent pas être revendus. Il n’y aura aucun échange et aucun remboursement, sous réserve des obligations du marchand en vertu des lois applicables.\n\nPour les billets achetés par l’intermédiaire de Ticketmaster.ca, American Express a fixé une limite de deux commandes pour cette offre. Cette limite s’applique à toutes les Cartes associées à tous vos comptes American Express. Chaque commande peut également être assujettie à des limites de billets déterminées par des parties autres qu’American Express.\n\nMD: utilisée en vertu d’une licence accordée par American Express. © Banque Amex du Canada, 2020.\n\nEnvoyée par la Banque Amex du Canada, C.P. 3204, succursale F, Toronto (Ontario) M1W 3W7. Vous pouvez vérifier l’authenticité du présent courriel en communiquant avec nous ou en allant au: " + contact_us_fr + ".\n\nNotez que ce courriel a été envoyé à : Si ce message a été reçu à une autre adresse, c’est qu’il y a été réacheminé.\n\nPour savoir comment nous recueillons, utilisons et protégeons vos renseignements personnels, visitez le site: " + privacy_fr + ".\n\nSi, à l'avenir, vous ne voulez pas recevoir de courriels d'Avant-Première, cliquer ici: " + unsubscribe_fr + ". Il faut prévoir environ de deux à quatre semaines pour le traitement de votre demande. Nous ne vérifions pas les autres courriels envoyés à cette adresse électronique et nous n’y répondons pas.";

  var bud_stage_blurb_en = "Enjoy special Cardmember benefits at Budweiser Stage including an exclusive American Express® Entrance**, and a chance to relax in the American Express® Lounge***.\n\n";
  var bud_stage_blurb_fr = "Enjoy special Cardmember benefits at Budweiser Stage including an exclusive American Express® Entrance**, and a chance to relax in the American Express® Lounge***.\n\n";

  // array list of misc terms in both english and french, default is eng. When french is selected, it'll switch
  var misc_en = ["No Images? View this online", "AMERICAN EXPRESS invites®", "FRONT OF THE LINE® PRESALE", "Location & Venue", "More from American Express® Invites", "Membership Rewards", "My Card Benefits"];
  var misc_fr = ["Il n'y a pas d'images? Consultez ce courriel en ligne", "AMERICAN EXPRESS invites(MD)", "AVANT PREMIÈRE(MD) PRÉVENTE", "Emplacements et Lieux", "Plus d'offres d'American Express invite(MD)", "Programme Points-privilèges", "Avantages de ma Carte"];
  var misc = misc_en;

  var lang = 'ENG';
  var ae_invites = ae_invites_en;
  var amexHeaderImg = amexHeaderImg_en;
  var blurb = '';
  var terms = reg_en;

  // language conditional statement
  if ( $('#french').prop('checked') == true ){
    lang = 'FRE';
    ae_invites = ae_invites_fr;
    amexHeaderImg = amexHeaderImg_fr;
    terms = reg_fr;
    misc = misc_fr;
  }

  // Budweiser stage conditional statement
  if ( $('#bud').prop('checked') == true ){
    blurb = bud_stage_blurb_en;
    terms = bud_stage_en;
  }

  // Bud & french checked
  if ( $('#bud').prop('checked') == true && $('#french').prop('checked') == true ){
    blurb = bud_stage_blurb_fr;
    terms = bud_stage_fr;
  }

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
  ## Replacement functions
  --------------------------------------------------------------*/
  // array list of cities
  var arr = ["Toronto", "Hamilton", "Montreal", "Laval", "Vancouver", "Edmonton", "Saskatoon"];
  
  // assign to RegExp for global changes
  var city1 = new RegExp(arr[0], 'g');
  var city2 = new RegExp(arr[1], 'g');
  var city3 = new RegExp(arr[2], 'g');
  var city4 = new RegExp(arr[3], 'g');
  var city5 = new RegExp(arr[4], 'g');
  var city6 = new RegExp(arr[5], 'g');
  var city7 = new RegExp(arr[6], 'g');

  // replace all instances
  var locationTxt = location
  .replace(city1, arr[0].toString().toUpperCase())
  .replace(city2, arr[1].toString().toUpperCase())
  .replace(city3, arr[2].toString().toUpperCase())
  .replace(city4, arr[3].toString().toUpperCase())
  .replace(city5, arr[4].toString().toUpperCase())
  .replace(city6, arr[5].toString().toUpperCase())
  .replace(city7, arr[6].toString().toUpperCase())

  /*--------------------------------------------------------------
  ## Location & Venue
  --------------------------------------------------------------*/

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
  /*--------------------------------------------------------------
  ### HTML
  --------------------------------------------------------------*/
  var header = '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <title>' + subject + '</title> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> #outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass *{line-height:100%;}body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table, td{border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img{border: 0; height: auto; line-height: 100%; outline: none;text-decoration: none; -ms-interpolation-mode: bicubic;}p{display: block; margin: 13px 0;}.iosLinks a{color: #333333 !important; text-decoration: none;}th{font-weight: normal; text-align: left;}a{color: inherit; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit;}</style> <style type="text/css"> @media only screen and (max-width:619px){@-ms-viewport{width:320px;}@viewport{width:320px;}}</style> <style type="text/css"> @media only screen and (max-width:619px){.starthere,.wrapper{margin:0 auto}.mobile-100{width:100%!important;display:block!important;}.wrapper-inner{margin:0 auto;width:310px!important}.spacer{display:none!important}.preheader-text{font-size:12px!important;line-height:16px!important;text-align:center!important}}.full-width{width:100%!important}.gmailfix{display:none;display:none!important}@media only screen and (max-width:619px) and (max-width:619px){.bp-rtp{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.bp-padding{padding:10px!important}.bp-card{width:45px!important;height:28px!important}.bp-text{font-size:14px!important;line-height:18px!important}}@media only screen and (max-width:619px) and (max-width:619px){.bp-hide{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.bp-mobile-only{display:block!important}.bp-gutter{width:10px!important}.master-padding{padding:8px 10px!important}.bp-logo-padding{padding:10px 7px 11px 6px!important}.bp-no-padding{padding:0!important}.bp-logo,.bp-logo img{width:51px!important}.bp-logo-width{width:20%!important}.bp-acct-padding{padding:11px 10px!important}.bp-acct-text{width:75%!important}.bp-login-button{display:block;padding:10px 0 12px!important;width:66px!important}.bp-login-container{width:25%!important}.bp-acct-bar{width:100%!important}.bp-acct-width{width:80%!important}.bp-member{vertical-align:top;padding-top:1px;padding-left:5px}.bp-member-width{width:110px!important}.bp-member-width img{width:109px!important}.bp-cent-logo-width{width:51px!important}.bp-cent-logo{padding-top:10px!important}.bp-cent-wordmark{width:145px!important}.bp-cent-acct-info,.bp-cent-wordmark-container{width:70%!important}.bp-cent-acct-info{padding-left:10px}.bp-no-padding-top{padding-top:0!important}.bp-cent-member{padding:4px 0!important}.bp-small-text{font-size:11px!important}}@media only screen and (min-width:620px){.bp-cent-acctno{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.fm-padding{padding:22px 40px 24px!important}.fm-social-icon{width:28px!important}.fm-social-icon.left{margin-right:20px}.fm-social-icons{text-align:center!important}.fm-nav-links{padding:0!important}.fm-nav-link{width:100%!important;padding:15px 0!important}.fm-nav-link.fm-border{border-top:1px solid #efefef}.fm-cross-icon{display:inline-block;padding:0 1% 24px!important;width:48%}.fm-cross-row{clear:left}.fm-cross-container{padding:33px 0 8px!important}.fm-co-brand{padding:20px!important}.fm-cross-link{padding:0 6px!important;display:inline-block}.h1,.tm-news-head{padding-bottom:0!important}.tm-block,.tm-heading{clear:left!important;display:block!important}.h1{font-size:24px!important;line-height:32px!important}.tm-heading{width:100%!important}.tm-news-content{padding-top:20px!important}.tm-block{margin:0 auto 40px}.tm-gap-filler{width:20px!important}}@media only screen and (max-width:619px) and (max-width:619px){.tm-gutter{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.section-divider-inner{width:50%!important;white-space:normal!important}.tm-quote-padding{padding:20px!important}.tm-quote img{width:49px!important}.tm-quote-left{padding-top:0!important;padding-bottom:16px!important;text-align:left;vertical-align:top}.tm-vert-step{width:100%;display:block;clear:left!important;margin-bottom:8px!important;text-align:center}.tm-vert-step img{margin:0 auto}.tm-vert-title{padding-bottom:30px!important}.tm-quote,.tm-quote-text,.tm-step-block{display:block!important;width:100%!important}.tm-quote-width{width:20px!important}.tm-quote-right{padding:12px 0 0!important;vertical-align:bottom;text-align:right!important}.tm-app-content-center,.tm-centre,.tm-centre-child{text-align:center!important}.tm-vert-spacer{height:16px!important}.tm-centre-button,.tm-centre-image{margin:0 auto!important}.tm-bmargin-10{margin-bottom:10px}.tm-centre-child{margin-bottom:30px!important;width:100%!important}.tm-centre-child img{width:80px!important}.tm-info-padding{padding:30px 0!important}.tm-nowrap{white-space:nowrap!important}.tm-table-padding-left{padding:15px 5px 15px 40px!important}.tm-table-padding-right{vertical-align:top;padding:15px 40px 15px 5px!important}.tm-nav{padding:0!important}.tm-nav-link{width:100%!important;padding:15px 0!important}.tm-nav-link.tm-border{border-top:1px solid #fff}.tm-app-content{display:block!important;padding:0 40px 40px!important;width:auto!important}.tm-app-icon{padding:0!important;width:120px!important;height:35px!important}.tm-app-icon.tm-app-right{text-align:right}.tm-app-icon img{display:inline-block!important;width:auto!important;height:35px!important}.tm-app-image{display:block!important;height:auto!important;width:100%!important;padding:40px 0!important;text-align:center}.tm-app-image img{display:inline-block!important;height:230px!important;width:230px!important}}.tm-cobrand-logos img{width:auto!important;height:50px!important;margin:0 auto!important}@media only screen and (max-width:619px){.hb-textBox{padding-left:20px!important;padding-right:20px!important}.hb-imgBox{width:100%!important;display:block}.hb-imgBox img{display:block!important;height:auto!important;max-height:none!important;width:100%!important}}@media only screen and (max-width:619px) and (max-width:619px){.hb-gutter{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.hb-hero-container,.hb-reset{height:auto!important}.hb-reset-text{padding:40px!important}.hb-reset-text-top{padding-top:51.61%!important}.hb-reset-text-bottom{padding-bottom:51.61%!important}.hb-full{display:block!important;width:auto!important}.hb-hero-container{vertical-align:top!important}.hb-hero-content{padding:40px!important}.hb-button{width:230px!important}.hb-hero-button{width:228px!important}}@media only screen and (max-width:619px) and (max-width:619px){.hb-hide{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.hb-mobile-hidden,.hb-overlay .mobile-no-padding{padding:0!important}.hb-mobile-autoHeight,.hb-mobile-autoHeight>table{height:auto!important}.hb-overlay,.hb-overlay>table{background:0 0!important;height:auto!important}.hb-headline{font-size:20px!important;line-height:28px}.hb-mobile-minHeight320{min-height:320px!important;height:auto!important}.hb-mobile-minHeight320>table{height:320px!important}.hb-mobile-only{display:block!important;max-height:none!important;line-height:auto!important}.hb-mobile-hidden{width:0!important;display:none!important}.im-mobile-center,.im-mobile-center table{text-align:center!important}.im-mobile-center table{margin:0 auto!important}}@media only screen and (max-width:619px) and (max-width:619px){.im-hide{height:0!important;max-height:0!important;display:none!important;line-height:0!important}}@media only screen and (max-width:619px){.im-207-to-230,.im-horz-logo{padding-bottom:40px!important}.im-block-centre,.im-text-centre{text-align:center!important}.im-imgBox{width:100%!important}.im-hide,.im-pair-column{display:block;width:100%;margin:0 auto}.im-horz-pair-padding{padding:40px!important}.im-horz-logo{padding-top:0!important}.im-mobile-autoHeight,.im-mobile-autoHeight>table{height:auto!important}.im-small-padding{padding:40px!important}.im-fl-right{float:right}.im-hide{height:10px}.im-207-to-230,.im-207-to-230 img{height:230px!important;width:230px!important}.im-block,.im-gutter{width:100%!important}.im-small-text{padding:0!important}.im-gutter{height:40px!important;display:block!important}.im-block,.im-block-auto{height:auto!important;display:block!important}.im-block-auto{width:auto!important}.im-logo-set,.im-logo-set img{width:105px!important;height:105px!important}.im-block-centre{margin:0 auto!important}.im-block-centre img{display:inline-block!important}.im-logo-set{display:block;float:left;padding-right:0!important;margin-bottom:10px}.im-logo-set.im-logo-clear{padding-right:20px!important;clear:left}}</style> <style type="text/css"> a[x-apple-data-detectors]{color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important;}@media only screen and (max-width:619px){.mj-hero-content{width: 100% !important;}.im-overlay-alt-dark{width: 310px !important;}.im-overlay-alt-light{width: 310px !important;}}</style></head>';
  var bodyStart = '<body style="background: #dddddd; font-family: Helvetica, Arial, sans-serif;"><div class="wrapper" style="max-width:620px; margin: 0 auto">';
  var bodyTableStart = '<table role="presentation" cellpadding="0" cellspacing="0" align="center" border="0"><tbody><tr><td class="wrapper-inner" style="width:620px;">';

  var viewExt = '<div class="mobile-100" style="margin:0px auto;"><table role="presentation"align="center" width="100%"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:8px 5px;"><div class="mobile-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:center;width:60%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><div class="preheader-text" style="cursor:auto;color:#555555;font-family:HelveticaNeue, Helvetica Neue Regular, Helvetica, Arial, sans-serif;font-size:13px;line-height:13px;">%%IGNORE%%' + misc[0] + '<a href="http://%%track%%/amex2?t_sparams=%%t_sparams%%" style="color:#555555">View this online</a>.%%IGNORE%%</div></td></tr></tbody></table></div></td></tr></tbody></table></div>';
  var invitesHeader = '<div><table role="presentation" cellpadding="0" cellspacing="0"><tbody><tr><td><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix"><table role="presentation"><tbody><tr><td style="font-size:0px;padding:0px;"><table role="presentation" cellpadding="0" cellspacing="0"><tbody><tr><td><a href="' + ae_invites + '"><img src="' + amexHeaderImg + '" height="auto" width="620"></a></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div>';
  var bodyTableEnd = '</td></tr></tbody></table>';
  var bodyEnd = '</div></body></html>';

          

  // add bold tags fon every city replacement
  var locationHtml = location
  .replace(city1, '<b>' + arr[0].toString().toUpperCase() + '</b>')
  .replace(city2, '<b>' + arr[1].toString().toUpperCase() + '</b>')
  .replace(city3, '<b>' + arr[2].toString().toUpperCase() + '</b>')
  .replace(city4, '<b>' + arr[3].toString().toUpperCase() + '</b>')
  .replace(city5, '<b>' + arr[4].toString().toUpperCase() + '</b>')
  .replace(city6, '<b>' + arr[5].toString().toUpperCase() + '</b>')
  .replace(city7, '<b>' + arr[6].toString().toUpperCase() + '</b>')
  .replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');


  var strHtml = img_link + "\n\n" + misc[2] + "\n" + name.toUpperCase() + "\n\n" + presale + '\n\n' + blurb + misc[3] + "\n\n" + locationHtml + "\n\n" + misc[4] + ": " + ae_invites + "\n\n" + misc[5] + ": " + membership_rewards_en + "\n\n" + misc[6] + ": " + card_benefits_en + "\n\n" + terms
  var strHtmlFinal = strHtml
  .replace(/[Á]/g, '&Aacute;').replace(/[á]/g, '&aacute;').replace(/[À]/g, '&Agrave;').replace(/[à]/g, '&agrave;').replace(/[Â]/g, '&Acirc;').replace(/[â]/g, '&acirc;').replace(/[É]/g, '&Eacute;').replace(/[é]/g, '&eacute;').replace(/[È]/g, '&Egrave;').replace(/[è]/g, '&egrave;').replace(/[Ê]/g, '&Ecirc;').replace(/[ê]/g, '&ecirc;').replace(/[Í]/g, '&Iacute;').replace(/[í]/g, '&iacute;').replace(/[Ì]/g, '&Igrave;').replace(/[ì]/g, '&igrave;').replace(/[Î]/g, '&Icirc;').replace(/[î]/g, '&icirc;').replace(/[Ó]/g, '&Oacute;').replace(/[ó]/g, '&oacute;').replace(/[Ò]/g, '&Ograve;').replace(/[ò]/g, '&ograve;').replace(/[Ô]/g, '&Ocirc;').replace(/[ô]/g, '&ocirc;').replace(/[Ú]/g, '&Uacute;').replace(/[ú]/g, '&uacute;').replace(/[Ù]/g, '&Ugrave;').replace(/[ù]/g, '&ugrave;').replace(/[Û]/g, '&Ucirc;').replace(/[û]/g, '&ucirc;').replace(/[Ç]/g, '&Ccedil;').replace(/[ç]/g, '&ccedil;').replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>').replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;').replace(/\n/g, '<br>\r');

  $('#outputHtml').val(header + bodyStart + bodyTableStart + viewExt + invitesHeader + strHtmlFinal + bodyTableEnd + bodyEnd);

  /*--------------------------------------------------------------
  ### TXT
  --------------------------------------------------------------*/
  var strTxtFinal = misc[0] + ":\nhttp://%%track%%/amex2?t_sparams=%%t_sparams%%\n\n" + misc[1] + ": " + ae_invites + "\n\n" + misc[2] + "\n" + name.toUpperCase() + "\n\n" + presale + '\n\n' + blurb + misc[3] + "\n\n" + locationTxt + "\n\n" + misc[4] + ": " + ae_invites + "\n\n" + misc[5] + ": " + membership_rewards_en + "\n\n" + misc[6] + ": " + card_benefits_en + "\n\n" + terms
  
  $('#outputTxt').val(strTxtFinal);
});

/*--------------------------------------------------------------
# Back button
--------------------------------------------------------------*/
$('#btnBack').click(function(){
  $('#output').fadeOut(300, function(){});
  $('#input').fadeIn(300, function(){});
});
