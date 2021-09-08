import { Cookie } from './Cookie';

test('test setCookie', () => {
  let cookie = new Cookie();
  cookie.setCookie("i18n", "en", 1);
  cookie = null;
  expect(document.cookie).toBe("i18n=en");
});

test('test getCookie', () => {
  let cookie = new Cookie();
  cookie.setCookie("i18n", "jp", 1);
  let language = cookie.getCookie("i18n");
  cookie = null;
  expect(language).toBe("jp");
});