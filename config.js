// QuestLog: настройки подключения. Этот файл заливается на GitHub один раз,
// дальше при обновлениях приложения меняется только index.html.
window.QUESTLOG_CONFIG = {
  SUPABASE_URL: 'https://mypqwtecblqjogrofjie.supabase.co',              // адрес проекта: https://xxxx.supabase.co (без /rest/v1 и слеша в конце)
  SUPABASE_KEY: 'sb_publishable_13bfo2EbnQE68zfCVMu8xA_Ccad4vE6',              // publishable key: sb_publishable_...
  LOGIN_DOMAIN: 'questlog.app',  // логин "ivan" превращается в ivan@questlog.app
  VAPID_PUBLIC_KEY: 'BACa72VjO3UEf2TClRlZCT9J8ax65tJ1zTOlGJBeMYw8nQBWGjDIV7SYFThEFFW3x62B1Bg8rB06Olyfzrcjqzs',          // для пуш-уведомлений (см. README, раздел «Уведомления»)
};
