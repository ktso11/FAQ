$(document).ready(function(){

  //create users to append on load
  //create search input for search bar
  const landingView = $('.ask-an-expert-landing');
  const thankyouView = $('.ask-an-expert-thank-you');
  const formView = $('.ask-an-expert-form');
  const formLink = $('.ask-an-expert__link');
  const expertImg = $('.expert-imgs');
  const expertName = $('.expert-name');
  const searchInput =$('.search-input')

  thankyouView.hide();
  formView.hide();

  //Expert objects for testing
  const experts = [
    {
      firstName : "Lena",
      lastName: "Smith",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait2.png"
    }, 
    {
      firstName: "Ray",
      lastName: "Johnson",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait1.png"
    },
    {
      firstName: "Katie",
      lastName: "So"
    },
    {
      firstName: "Elijah",
      lastName: "Taylor"
    }

  ];


  //Append 3 experts to UI
  function appendExperts(){
    expertName.append(experts[0].firstName + " " + experts[0].lastName+ ", " +experts[1].firstName + " " + experts[1].lastName + " or "+ experts[2].firstName + " " + experts[2].lastName + " will get right back to you")
    for (let employee = 0; employee < 3 ; employee++) {
      let first = experts[employee].firstName
      //if img exisit append img, otherwise, append a circle with initial
      if (!experts[employee].img){
        expertImg.append("<div class='img-does-not-exist img-position-"+employee+"'><p>" + first.charAt(0) + "</p></div>")
      } else {
        expertImg.append("<img class='expert-img img-position-"+employee+"' src='" + experts[employee].img + "'>")
      }
    }
  }

  function appendSearchSuggestions(){
    const searchSuggestions = "top account ranked by total amount booked";
    searchInput.val(searchSuggestions);
  }


  formLink.on('click', function(){
    landingView.hide();
    formView.fadeIn(900);
    appendExperts();
    appendSearchSuggestions()
  })

  // formView.on('submit', function(e){
  //   e.preventDefault();
  //   var detailInput = $('.detail-input,');
  //   var searchInput =$('.search-input')
  //   // formInput.each(function(){
  //     // e.preventDefault();
  //     if(detailInput.val().length === 0 || detailInput.val().length === 0 ){
  //       $(this).css("border-color","red");
  //       return false;  
  //     } else {
  //       e.preventDefault();
  //       formView.hide();
  //       thankyouView.fadeIn(900);
  //     }
  //   // })
  // })

  formView.on('submit', function(e){
    e.preventDefault();
    const formInput = $('.detail-input, .search-input');
    formInput.each(function(){
      if(!$(this).val()){
        $(this).css("border-color","red");

      } else {
        formView.hide();
        thankyouView.fadeIn(900);
      }
    })
  })


  
});
