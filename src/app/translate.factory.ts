import {TranslateLoader} from "ng2-translate";
import {Observable} from "rxjs/Observable";
import translations from "../generated/translations";

class ClientLocalTranslateLoader implements TranslateLoader {
  constructor(private readonly defaultLang: string) {
  }

  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations[lang] || translations[this.defaultLang]);
  }
}

/**
 * See the discussion at: https://github.com/ocombe/ng2-translate/issues/281 for why
 * it is required to provide a loader if you want to support AoT compilation.
 * Note that this is a slightly cleaner way than the previous setup using the shared module.
 * @return {TranslateLoader} An instance of the client local loader mentioned above.
 */
export function createTranslateLoader(): TranslateLoader {
  return new ClientLocalTranslateLoader("en");
}