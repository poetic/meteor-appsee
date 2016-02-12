Meteor.startup(function () {
  const APPSEE_API_KEY = Meteor.settings &&
    Meteor.settings.public &&
    Meteor.settings.public.APPSEE_API_KEY;

  if (APPSEE_API_KEY) {
    Appsee.start(APPSEE_API_KEY);
    console.log('Appsee is working!');
  } else {
    console.log('You need to set Meteor.settings.public.APPSEE_API_KEY');
  }
})
