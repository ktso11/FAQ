$(document).ready(function(){

  //variable caching 
  const landingView = $('.ask-an-expert-landing');
  const thankyouView = $('.ask-an-expert-thank-you');
  const formView = $('.ask-an-expert-form');
  const formLink = $('.ask-an-expert__link');
  const expertImg = $('.expert-imgs');
  const expertName = $('.expert-name');
  const searchInput = $('.search-input');
  const cancelButton = $('.cancel-button');
  const formValidation = $('.form-validation');
  const formInput = $('.detail-input');

  thankyouView.hide();
  formView.hide();
  formValidation.hide()

  //Expert objects for testing
  const experts = [
    {
      firstName: 'Lena',
      lastName: 'Smith',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait2.png'
    }, 
    {
      firstName: 'Ray',
      lastName: 'Johnson'
    },
    {
      firstName: 'Elijah',
      lastName: 'Taylor',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait1.png'
    }
  ];

  //Append 3 experts to UI
  // function appendExperts(){
  //   expertName.append(`${experts[0].firstName} ${experts[0].lastName}, ${experts[1].firstName}  ${experts[1].lastName} or ${experts[2].firstName} ${experts[2].lastName} will get right back to you.`)
  //   for (let employee = 0; employee < experts.length ; employee++) {
  //     let first = experts[employee].firstName
  //     //if img exisit append img, otherwise, append a circle with initial
  //     if (!experts[employee].img){
  //       expertImg.append(`<div class='img-does-not-exist img-position-${employee}'><p> ${first.charAt(0)} </p></div>`)
  //     } else {
  //       expertImg.append(`<img class='expert-img img-position-${employee}' src='${experts[employee].img}'>`)
  //     }
  //   }
  // }

  //append names of available experts
  //if img exisit append img, otherwise, append a circle with initial
  function appendExperts() {
    expertName.append(`${experts[0].firstName} ${experts[0].lastName}, ${experts[1].firstName}  ${experts[1].lastName} or ${experts[2].firstName} ${experts[2].lastName} will get right back to you.`);
      experts.map((expert, i) => {
      if(!expert.img) {
        expertImg.append(`<div class='img-does-not-exist img-position-${i}'><p> ${expert.firstName.charAt(0)} </p></div>`);
      } else {
        expertImg.append(`<img class='expert-img img-position-${i}' alt='${expert.firstName}' src='${expert.img}'>`);
      }
    });
  }

  function appendSearchSuggestions() {
    const searchSuggestions = 'top account ranked by total amount booked';
    searchInput.val(searchSuggestions);
  }

  //handle ask an expert link event
  formLink.on('click', function() {
    landingView.hide();
    formView.fadeIn(900);
    appendExperts();
    appendSearchSuggestions();
  })

  cancelButton.on('click', function(e) {
    e.preventDefault();
    formView.hide();
    landingView.fadeIn(900);
    expertName.text('');
    formInput.css('border', 'var(--form-border')
    formValidation.hide()
  });

  formView.on('submit', function(e) {
    e.preventDefault();
      if(formInput.val() === '') {
        formInput.css('border','2px solid var(--validation-color)');
        formValidation.show();
      } else {
        formView.hide();
        alert(formInput.val());
        thankyouView.fadeIn(900);
      }
  })

});
