exports.options = {
  ignoreRBAC: false, //hide tables that the ls_extrnal user has no access to.
  dynamicJson: true,
  ignoreIndexes: true,
  cors: false, // taken care of by API gateway 
  
  // enable in dev only -- map to env variable
  showErrorStack: true,
  extendedErrors: 'detail',
  
  graphqlRoute: '/graphql',
  
  graphiql: false,
  
  // JWT Settings

  jwtSecret: '-----BEGIN CERTIFICATE-----\n' +
'MIIC+DCCAeCgAwIBAgIJZ8BAJnhPZ5GIMA0GCSqGSIb3DQEBBQUAMCMxITAfBgNV\n' +
'BAMTGGxhYnNlbnRyeS1hdXRoLmF1dGgwLmNvbTAeFw0xNjAzMTQxNjM3MjFaFw0y\n' +
'OTExMjExNjM3MjFaMCMxITAfBgNVBAMTGGxhYnNlbnRyeS1hdXRoLmF1dGgwLmNv\n' +
'bTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANmMVZDNVGiNDFTCZG6c\n' +
'B+NzQh9IhnUO7jCwDdya/2bd6TVFwMV3weiKpEr+zgaPxzaVYqt19uu1h38RuGk5\n' +
'dhd5qrBcCuKh1gNjn/6HotWf9R70qrgh1D9wBSwhrNdyAjC8sEhPt8RElGhHcx0x\n' +
'cOkfb4q9eq1hKpcFWxXiyLb/z9kee/xgN+zIFdTbUY4c/SU7PhKfXuel8UOIRSXu\n' +
'd36rM3ZHph1CqIxaigw/LuALYZJQsZ6/8yHvJkjkKtqg1zv/31j77R/rbekq3G/+\n' +
'ZliOSJgw9z7WbQI6Dv4vB58piynYnawnT15j78wnghUZ/p3Vzus/Rs38e2NgMxmz\n' +
'NhECAwEAAaMvMC0wDAYDVR0TBAUwAwEB/zAdBgNVHQ4EFgQUgxC/TIor97phh4Ml\n' +
'QRQdBDhlL2YwDQYJKoZIhvcNAQEFBQADggEBAM7e71hDdCZX4/Zl5RiP3luVsh8U\n' +
'QYcbHxhkFIU6QHMC7hJt0I+973IkjPe3AvNhUz6/MuLynRXPtx5HzcaiVM6XcdKt\n' +
'dE/BiHz6MyCmWR7hjmIC51ImGhjGCNCdlDvxG95fxcrFmiN4O2yt28LPnM+lq3ws\n' +
'7sVD56nh6R3J8WhbP0Mv+UCwv+C5F5I++I5hWI5Ka599sK0Z7P2Q7Y5QcjZtMCZ+\n' +
'ZB2ANctAvwmC+AeILr/3v0hahpuf63Et5mKlXdM76LU2NuooLBGIh2wID5tsl1gj\n' +
'CqfG320jzHcH2o/IkPANPpBILgMQkPPpGbNxHYZMwObK4cUe5Kj+NjK0Bjo=\n' +
'-----END CERTIFICATE-----',
  
  jwtVerifyOptions: { audience:'https://labsentry.com/graphql'},
  jwtRole: ['https://labsentry_com/app_metadata','user'],
  pgDefaultRole:'ls_unauth_user_acc',  
};
