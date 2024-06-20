export const environment = 
{
  LogLevel: 4,
  production: true,
  version: '1.2.1',
  IsSalesApp: false,
  EditOnSidePanel: false,

  CanUseSinalR: false,
  OrderEntryNewLook: false,
  SalesLatestHourForNewOrderEntry: 30,

  ServerCode: null,

  simulateAutoLoad: false,
  MinuteIntervalToCheckForUpdates: 180,
  MinuteIntarvalToReloadedPrductionData: 20,
  SecondIntervalToCheckForReloadedPrductionData: 120,
  DisableCommunication: false,
  DefaultPageNumber: 1,
  DefaultTabNumber: 1,
  NumberOfDaysFromPreviousMonthForBackData: 6,
  MaxNumberOfDaysFromForBackData: 100,

  SalesOrderEntryShowPackages: false,

  ShowRoutingDetails: false,
  ShowCustomerOrderActionPanel: true,
  DebugCss: false,
  ShowActiveInfoMenu: true,

  LoginSuccessDefaultRoute: 'ai',
  AgoraAppId: '1fabe28b23be45d5b0dec0f3dd78d696',
  
  CreateSalesDocumentEntity: false,
  LoadSalesDataInBackground: false,
  LoadProductionDataInBackground: false,

  ReloadDataIntervalTimeInMinutes:  100,

  DefaultFilterCustomer: '',
  
  developmentMode: false,
  LoginKind: 1,
  SaveProductionToStorage: false,
  IncludeModelInRequests: false,
  UpdateModelFromRequests: true,
  LogoutUrl: "https://activeinfo.io/infotree",
  NumberOfDaysForBackData: 10,
  applicationName: "InfoTree",
  canLoginAsUser: true,
  canLoginAsCustomer: false,
  canCustomerRegisterToSystem: false,
  ShowGlobalSearchTextValues: true,
  GlobalSearchText: '',

  
  defaultUser:
  {
    UserName: '',
    OrganizationCode: '',
    EmailAddress: "",
    FirstName: "",
    LastName: "",
    Phone: "",
  },

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

  productionServer: 'https://dataserver.activeinfo.io/webce',
  signalRServerEndPoint: 'https://dataserver.activeinfo.io/webce/',

  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'he',
  projectPrefix: 'AIClient',
  supportedLanguages: [
    { name: 'English', code: 'en', isRTL: false, isMaint: false},
    { name: 'Francais', code: 'fr', isRTL: false, isMaint: false},
    { name: 'עברית', code: 'he', isRTL: true, isMaint: false}
  ]
};
