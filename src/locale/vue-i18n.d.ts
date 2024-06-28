// 
import { I18n, I18nOptions } from 'vue-i18n';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $i18n: I18n & I18nOptions;
  }
}