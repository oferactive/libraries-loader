export const environment = 
{
  LogLevel: 4,
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'he',
  projectPrefix: 'AIClient_Dev',
  ShowActiveInfoMenu: true,

  CanUseSinalR: false,
  OrderEntryNewLook: false,
  SalesLatestHourForNewOrderEntry: 30,

  DefaultFilterCustomer: '',
  IsSalesApp: false,
  EditOnSidePanel: false,

  ServerCode: null,

  LoginSuccessDefaultRoute: 'ai',
  AgoraAppId: '1fabe28b23be45d5b0dec0f3dd78d696',

  ShowRoutingDetails: false,
  ShowCustomerOrderActionPanel: true,
  DebugCss: false,
  
  CreateSalesDocumentEntity: false,
  LoadSalesDataInBackground: false,
  LoadProductionDataInBackground: false,
  SalesOrderEntryShowPackages: false,

  developmentMode: true,
  LoginKind: 1,
  IncludeModelInRequests: false,
  UpdateModelFromRequests: true,
  SaveProductionToStorage: false,
  LogoutUrl: "https://localhost:3000/",
  NumberOfDaysForBackData: 10,
  applicationName: "InfoTree",
  canLoginAsUser: true,
  canLoginAsCustomer: false,
  canCustomerRegisterToSystem: false,
  ShowGlobalSearchTextValues: true,
  GlobalSearchText: '',

  DisableCommunication: false,
  simulateAutoLoad: false,

  DefaultPageNumber: 1,
  DefaultTabNumber: 1,
  NumberOfDaysFromPreviousMonthForBackData: 6,
  MaxNumberOfDaysFromForBackData: 2,

  MinuteIntervalToCheckForUpdates: 3,
  MinuteIntarvalToReloadedPrductionData: 5,
  SecondIntervalToCheckForReloadedPrductionData: 60,

  ReloadDataIntervalTimeInMinutes:  100,

  
  firebase:
  {
    apiKey: "AIzaSyAapIIfPL6aUX5zAbhpFbXLzH2IM7OCBZE",
    authDomain: "aiservice-b3a0e.firebaseapp.com",
    databaseURL: "https://aiservice-b3a0e.firebaseio.com",
    projectId: "aiservice-b3a0e",
    storageBucket: "aiservice-b3a0e.appspot.com",
    messagingSenderId: "122774475832",
    appId: "1:122774475832:web:c3fbd65e9554088d"
  },
  
  defaultUser:
  {
    UserName: '',
    OrganizationCode: '',
    EmailAddress: "",
    FirstName: "",
    LastName: "",
    Phone: "",
  },

  productionServer: 'https://dataserver.activeinfo.io/webce',
  signalRServerEndPoint: 'https://dataserver.activeinfo.io/webce/',

  supportedLanguages: [
    { name: 'English', code: 'en', isRTL: false, isMaint: false},
    { name: 'Francais', code: 'fr', isRTL: false, isMaint: false},
    { name: 'עברית', code: 'he', isRTL: true, isMaint: false}
  ]
};
