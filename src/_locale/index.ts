
//  *   ts :
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.17
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Internationalization (i18n)
//  *

import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    signIn:{
      title_msg_default : 'VIVENTE',//Sign in -
      placeholder_EmailUser : 'Enter email address',
      placeholder_Password : 'Password',
      superscript_email : 'email address',
      superscript_password : 'password',
      forgot_msg : 'Forgot?',
      create_account : 'Create an account',
      proceed_btn : 'Proceed',
      placeholder_incorrect : 'incorrect',
      password_show : 'Show password',
      password_hide : 'Hide password',
      f_Terms : 'Terms of Service',
      f_Cookies : 'Cookie Consent',
      Cookies_alert : 'This website uses cookies',
      placeholder_OnForgot : 'Enter email address',
      title_OnForgot : 'Reset your password',
      Alert_Email_sent : 'Email sent to ',
      forgot_Reset_password : 'Change your password',
      title_alp : 'Administrative Console',
    },

    message: {
      language: 'English',
      lang: 'en',

      landingPage_uiTheme_Light: 'Light theme',
      landingPage_uiTheme_Dark: 'Dark theme',
      landingPage_uiTheme_Custom: 'Customized',
      landingPage_uiTheme_LightColorA: 'Color A',

      h_Search_placeholder: 'Search, /f Filter, #tag, !status',
      // h_Search_placeholder: 'Search (text, +/-"text", #tag, !status); Filter (/f "text")',

      settings_Change_Layout: 'Change Layout',
      settings_Settings: 'Settings',
      settings_Header: 'Header',
      settings_Footer: 'Footer',
      settings_Sign_Out: 'Sign Out',

      app_AppWorkspace : 'Workspace',
      app_AppUsers : 'User Management',
      app_AppStock : 'VIVENTE Stock',
      app_AppSale : 'Sale',
      app_AppReport : 'Report',
      app_AppManagement : 'Management',
    },
    invoice: {
      app_invoice_group_header_title: 'INVOICE',
      app_invoice_group_customer_title: 'Customer',
      app_invoice_group_comment_title: 'Comments',
      app_invoice_group_products_title: 'Bookings',
      app_invoice_group_amount_title: 'Amount',
      app_invoice_group_description_title: 'Description',
      // HEADER
      app_invoice_h_Date: 'Date',
      app_invoice_h_Sum: 'Sum',
      app_invoice_h_Nr: 'No.',
      app_invoice_h_Status: 'Status',
      app_invoice_h_Status_InProcess: 'In process',
      app_invoice_h_Status_Completed: 'Completed',
      app_invoice_h_Status_Stopped: 'Stopped',
      app_invoice_h_Status_Draft: 'Draft',
      app_invoice_h_PlaceOfTransaction: 'Place',//'Place of transaction',
      app_invoice_h_Place_Resident: 'Country of residence',
      app_invoice_h_Place_Partner: 'Partner country',
      app_invoice_h_Place_Another: 'Another country',
      app_invoice_h_Place_ES: 'European Union country',
      app_invoice_h_Place_Customs: 'Customs area',
      // CUSTOMER
      app_invoice_cust_Company: 'Company',
      app_invoice_cust_Carrier: 'Carrier',
      app_invoice_cust_Name: 'Name',
      app_invoice_cust_Bank: 'Bank',
      app_invoice_cust_AccountNo: 'Account No.',
      app_invoice_cust_LoadingPlace: 'Loading place',
      app_invoice_cust_Supplier: 'Supplier',
      app_invoice_cust_Stock: 'In stock',
      app_invoice_cust_Recipient: 'Recipient',
      app_invoice_cust_Agent: 'Agent',
      // PRODUCT LIST
      app_invoice_products_Nr: 'No.',
      app_invoice_products_Produkts: 'Product',
      app_invoice_products_Daudzums: 'Quantity',
      app_invoice_products_Cena: 'Price',
      app_invoice_products_Discount: 'Discount',
      app_invoice_products_Summa: 'Sum',
      // SUMMA
      app_invoice_SubTotal: 'SubTotal',
      app_invoice_Total_amount: 'Total amount',
      app_invoice_Issued_by: 'Issued by',
      // CARRIER
      app_invoice_carr_Vehicle: 'Vehicle',
      app_invoice_carr_Trailer: 'Trailer',
      app_invoice_carr_Driver: 'The Driver',//'The Driver of the vehicle',
      app_invoice_carr_Description: 'Description',
      // APP
      app_invoice_AddNEW: 'add new item',
      // EXPLORER
      app_invoice_EXPLORER: 'EXPLORER',

    },
    settings: {
      set_Appearance: 'Appearance',
      set_ThemePref: 'Theme preferences',
      set_LanguagePref: 'Language',
      set_LayoutPref: 'Layout',
      set_ProfilePref: 'Profile',
      set_User: 'User',
      set_eMail: 'e-mail',
      set_LoginPassword: 'Login and Password',
      set_ActivityBar: 'Activity Bar',
      set_TabBar: 'Tab Bar',
      set_SaveClose: 'Save and Close',
      set_Cancel: 'Cancel',
      set_Reset: 'Reset', 
      set_PrivacyPolicy: 'Privacy policy',
    }
  },
  lv: {
    signIn:{
      title_msg_default : 'VIVENTE', //'Pierakstīties',
      placeholder_EmailUser : 'Ievadiet E-pasta adresi',
      placeholder_Password : 'Ievadiet paroli',
      superscript_email : 'e-pasta adrese',
      superscript_password : 'Ievadiet paroli',
      forgot_msg : 'Vai aizmirsāt paroli?',
      create_account : 'Izveidot kontu',
      proceed_btn : 'Tālāk',
      placeholder_incorrect : 'pierakstīšanās neizdevās',
      password_show : 'Parādīt paroli',
      password_hide : 'Slēpt paroli',
      f_Terms : 'Pakalpojuma noteikumi',
      f_Cookies : 'Sīkdatņu piekrišana',
      Cookies_alert : 'Šajā tīmekļa vietnē ir uzstādīts sīkdatnes',
      placeholder_OnForgot : 'Ievadiet E-pasta adresi',
      title_OnForgot : 'Paroles maiņa',
      Alert_Email_sent : 'Email sent to ',
      forgot_Reset_password : 'Nomainiet paroli',
      title_alp : 'Administratīvā konsole',
    },

    message: {
      language: 'Latviešu',
      lang: 'lv',

      landingPage_uiTheme_Light: 'Gaišais režīms',
      landingPage_uiTheme_Dark: 'Tumšais režīms',
      landingPage_uiTheme_Custom: 'Pielāgots',
      landingPage_uiTheme_LightColorA: 'Kāsa A',

      h_Search_placeholder: 'Search, /f Filter, #tag, !status',

      settings_Change_Layout: 'Change Layout',
      settings_Settings: 'Settings',
      settings_Header: 'Header',
      settings_Footer: 'Footer',
      settings_Sign_Out: 'Sign Out',
      
      app_AppWorkspace : 'Workspace',
      app_AppUsers : 'User Management',
      app_AppStock : 'VIVENTE Stock',
      app_AppSale : 'Sale',
      app_AppReport : 'Report',
      app_AppManagement : 'Management',
    },
    invoice: {
      app_invoice_group_header_title: 'PAVADZĪME',
      app_invoice_group_customer_title: 'Klients',
      app_invoice_group_comment_title: 'Komentārs',
      app_invoice_group_products_title: 'Rezervācijas',
      app_invoice_group_amount_title: 'Summa',
      app_invoice_group_description_title: 'Apraksts',
      // HEADER
      app_invoice_h_Date: 'Datums',
      app_invoice_h_Sum: 'Summa',
      app_invoice_h_Nr: 'Nr.',
      app_invoice_h_Status: 'Statuss',
      app_invoice_h_Status_InProcess: 'Procesā',
      app_invoice_h_Status_Completed: 'Pabeigts',
      app_invoice_h_Status_Stopped: 'Pārtraukts',
      app_invoice_h_Status_Draft: 'Melnraksts',
      app_invoice_h_PlaceOfTransaction: 'Vieta',//'Darījuma vieta',
      app_invoice_h_Place_Resident: 'Rezidenta valsts',
      app_invoice_h_Place_Partner: 'Partnera valsts',
      app_invoice_h_Place_Another: 'Cita valsts',
      app_invoice_h_Place_ES: 'Eiropas Savienības valsts',
      app_invoice_h_Place_Customs: 'Muitas zona',
      // CUSTOMER
      app_invoice_cust_Company: 'Uzņēmums',
      app_invoice_cust_Carrier: 'Pārvadātājs',
      app_invoice_cust_Name: 'Name',
      app_invoice_cust_Bank: 'Norēķinu rekvizīti',
      app_invoice_cust_AccountNo: 'Konts',
      app_invoice_cust_LoadingPlace: 'Iekraušanas vieta',
      app_invoice_cust_Supplier: 'Piegādātājs',
      app_invoice_cust_Stock: 'Noliktava',
      app_invoice_cust_Recipient: 'Saņēmējs',
      app_invoice_cust_Agent: 'Aģents',
      // PRODUCT LIST
      app_invoice_products_Nr: 'Nr.',
      app_invoice_products_Produkts: 'Produkts',
      app_invoice_products_Daudzums: 'Daudzums',
      app_invoice_products_Cena: 'Cena',
      app_invoice_products_Discount: 'Atlaide',
      app_invoice_products_Summa: 'Summa',
      // SUMMA
      app_invoice_SubTotal: 'Kopā',
      app_invoice_Total_amount: 'Summa apmaksai',
      app_invoice_Issued_by: 'Rēķinu sagatavoja',
      // CARRIER
      app_invoice_carr_Vehicle: 'Transportlīdzeklis',
      app_invoice_carr_Trailer: 'Piekabe',
      app_invoice_carr_Driver: 'Vadītājs',//'Transportlīdzekļa vadītājs',
      app_invoice_carr_Description: 'Apraksts',
      // APP
      app_invoice_AddNEW: 'pievienot jaunu',
      // EXPLORER
      app_invoice_EXPLORER: 'EXPLORER',
    },
    settings: {
      set_Appearance: 'Izskats',
      set_ThemePref: 'Motīvu preferences',
      set_LanguagePref: 'Valoda',
      set_LayoutPref: 'Izkārtojums',
      set_ProfilePref: 'Profils',
      set_User: 'Lietotājs',
      set_eMail: 'e-pasts',
      set_LoginPassword: 'Pieteikšanās vārds un parole',
      set_ActivityBar: 'Darbības josla',
      set_TabBar: 'Tabulu josla',
      set_SaveClose: 'Saglabāt un Aizvērt',
      set_Cancel: 'Atcelt',
      set_Reset: 'Pārstartēt',
      set_PrivacyPolicy: 'Privātuma politika',
    }
  },
  ru: {
    signIn:{
      title_msg_default : 'VIVENTE',//Вход -
      placeholder_EmailUser : 'Адрес электронной почты (email)',
      placeholder_Password : 'Bведите пароль',
      superscript_email : 'адрес электронной почты',
      superscript_password : 'введите пароль',
      forgot_msg : 'Забыли пароль?',
      create_account : 'Создать аккаунт',
      proceed_btn : 'Далее',
      placeholder_incorrect : 'oшибка входа',
      password_show : 'Показать пароль',
      password_hide : 'Скрыть пароль',
      f_Terms : 'Условия использования',
      f_Cookies : 'Согласие на cookie',
      Cookies_alert : 'Разрешить использование cookie',
      placeholder_OnForgot : 'Адрес электронной почты (email)',
      title_OnForgot : 'Измените или сбросьте свой пароль',
      Alert_Email_sent : 'Email sent to ',
      forgot_Reset_password : 'Измените свой пароль',
      title_alp : 'Административная консоль',
    },
    message: {
      language: 'Русский',
      lang: 'ru',

      landingPage_uiTheme_Light: 'Светлая тема',
      landingPage_uiTheme_Dark: 'Темная тема',
      landingPage_uiTheme_Custom: 'Индивидуальный',
      landingPage_uiTheme_LightColorA: 'Цвет A',

      h_Search_placeholder: 'Search, /f Filter, #tag, !status',

      settings_Change_Layout: 'Change Layout',
      settings_Settings: 'Settings',
      settings_Header: 'Header',
      settings_Footer: 'Footer',
      settings_Sign_Out: 'Sign Out',

      app_AppWorkspace : 'Workspace',
      app_AppUsers : 'User Management',
      app_AppStock : 'VIVENTE Stock',
      app_AppSale : 'Sale',
      app_AppReport : 'Report',
      app_AppManagement : 'Management',
    },
    invoice: {
      app_invoice_group_header_title: 'СЧЕТ',
      app_invoice_group_customer_title: 'Клиент',
      app_invoice_group_comment_title: 'Комментарии',
      app_invoice_group_products_title: 'Заказы',
      app_invoice_group_amount_title: 'Cумма',
      app_invoice_group_description_title: 'Описание',
      // HEADER
      app_invoice_h_Date: 'Дата',
      app_invoice_h_Sum: 'Сумма',
      app_invoice_h_Nr: 'No.',
      app_invoice_h_Status: 'Cтатус',
      app_invoice_h_Status_InProcess: 'В процессе',
      app_invoice_h_Status_Completed: 'Завершён',
      app_invoice_h_Status_Stopped: 'Прерванный',
      app_invoice_h_Status_Draft: 'Черновик',
      app_invoice_h_PlaceOfTransaction: 'Mесто',//'Mесто сделки',
      app_invoice_h_Place_Resident: 'Страна проживания',
      app_invoice_h_Place_Partner: 'Страна-партнер',
      app_invoice_h_Place_Another: 'Другая страна',
      app_invoice_h_Place_ES: 'Страна Европейского Союза',
      app_invoice_h_Place_Customs: 'Таможенная зона',
      // CUSTOMER
      app_invoice_cust_Company: 'Uzņēmums',
      app_invoice_cust_Carrier: 'Перевозчик',
      app_invoice_cust_Name: 'Name',
      app_invoice_cust_Bank: 'Детали расчета',
      app_invoice_cust_AccountNo: 'Счет',
      app_invoice_cust_LoadingPlace: 'Место погрузки',
      app_invoice_cust_Supplier: 'Поставщик',
      app_invoice_cust_Stock: 'Cклад',
      app_invoice_cust_Recipient: 'Получатель',
      app_invoice_cust_Agent: 'Агент',
      // PRODUCT LIST
      app_invoice_products_Nr: 'No.',
      app_invoice_products_Produkts: 'Продукт',
      app_invoice_products_Daudzums: 'Количество',
      app_invoice_products_Cena: 'Цена',
      app_invoice_products_Discount: 'Скидка',
      app_invoice_products_Summa: 'Сумма',
      // SUMMA
      app_invoice_SubTotal: 'SubTotal',
      app_invoice_Total_amount: 'Total amount',
      app_invoice_Issued_by: 'Issued by',
      // CARRIER
      app_invoice_carr_Vehicle: 'Транспортное средство',
      app_invoice_carr_Trailer: 'Трейлер',
      app_invoice_carr_Driver: 'Водитель', //'Водитель транспортного средства',
      app_invoice_carr_Description: 'Описание',
      // APP
      app_invoice_AddNEW: 'добавить',
      // EXPLORER
      app_invoice_EXPLORER: 'EXPLORER',
    },
    settings: {
      set_Appearance: 'тема',
      set_ThemePref: 'Настройки темы',
      set_LanguagePref: 'Язык',
      set_LayoutPref: 'Mакет',
      set_ProfilePref: 'Профиль',
      set_User: 'Пользователь',
      set_eMail: 'Электронная почта',
      set_LoginPassword: 'Логин и пароль',
      set_ActivityBar: 'Панель активности',
      set_TabBar: 'Панель вкладок',
      set_SaveClose: 'Сохрани и Эакрой',
      set_Cancel: 'Oтмена',
      set_Reset: 'Перезагрузить',
      set_PrivacyPolicy: 'Приватность', //'Kонфиденциальность',
    }
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  // legacy: false, // `false`, to use Composition API
  messages,
})

export default i18n
