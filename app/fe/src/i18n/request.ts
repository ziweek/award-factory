import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "ko";
  // const locale =
  //   headers()
  //     .get("accept-language")
  //     ?.split(",")
  //     .map((v) => v.trim())[0] == "ko-KR"
  //     ? "ko"
  //     : "en";
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
