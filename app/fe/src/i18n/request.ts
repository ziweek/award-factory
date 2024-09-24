import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale =
    headers()
      .get("accept-language")
      ?.split(",")
      .map((v) => v.trim())[0] == "ko-KR"
      ? "ko"
      : "en";
  // "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
