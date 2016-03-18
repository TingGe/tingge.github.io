Meteor.startup(function () {
  if (Meteor.users.find().count() != 0) return;

  Accounts.createUserWithPhone({
    phone: '+8613552120317',
    profile: {
      name: '听歌'
    }
  });

});

