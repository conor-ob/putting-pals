const alpha3ToAlpha2: Record<string, string> = {
  USA: "US",
};

export function getCountryFlag({
  player,
}: {
  player: { id: string; countryFlag: string };
}): string {
  let alpha2 = alpha3ToAlpha2[player.countryFlag] ?? undefined;

  if (alpha2 === undefined) {
    alpha2 = getAlpha2({ alpha3: player.countryFlag });
  }

  if (alpha2 === undefined) {
    alpha2 = resolveKnowFlagIssues({ player });
  }

  if (alpha2 === undefined) {
    console.log(
      "country flag not found for player=" + JSON.stringify(player, null, 2),
    );
    return player.countryFlag;
  } else {
    return alpha2;
  }
}

function getAlpha2({ alpha3 }: { alpha3: string }): string | undefined {
  switch (alpha3) {
    case "CHI":
      return "CL";
    case "ENG":
      return "GB-ENG";
    case "FIJ":
      return "FJ";
    case "NIR":
      return "GB-NIR";
    case "RSA":
      return "ZA";
    case "DEN":
      return "DK";
    case "GER":
      return "DE";
    case "PHI":
      return "PH";
    case "PUR":
      return "PR";
    case "SCO":
      return "GB-SCT";
    case "SIN":
      return "SG";
    case "NED":
      return "NL";
    case "UAE":
      return "AE";
    case "WAL":
      return "GB-WLS";
    default:
      return undefined;
  }
}

function resolveKnowFlagIssues({
  player,
}: {
  player: { id: string; countryFlag: string };
}): string | undefined {
  switch (player.id) {
    case "29454":
      return "AT";

    case "35986":
    case "46798":
      return "AU";

    case "33293":
      return "BE";

    case "35296":
      return "CN";

    case "33968":
    case "52453":
      return "DK";

    case "29670":
      return "ES";

    case "20396":
    case "28272":
    case "28723":
    case "29954":
    case "34708":
    case "35174":
    case "45194":
    case "45836":
    case "46410":
    case "46504":
    case "46615":
    case "47989":
    case "51003":
    case "55955":
    case "56548":
      return "GB-ENG";

    case "19825":
      return "GB-NIR";

    case "23814":
    case "34364":
    case "52215":
      return "GB-SCT";

    case "25369":
      return "GB-WLS";

    case "48898":
    case "55824":
      return "IE";

    case "39834":
    case "52444":
      return "IT";

    case "30852":
    case "31395":
    case "33689":
    case "47917":
      return "JP";

    case "28243":
    case "35087":
      return "KR";

    case "61560":
    case "66248":
      return "KY";

    case "28300":
    case "45227":
      return "NL";

    case "54480":
      return "PH";

    case "29939":
      return "PY";

    case "21528":
    case "27899":
      return "SE";

    case "29908":
    case "45242":
      return "TW"; // Chinese Taipei

    case "59866":
      return "US";

    case "26328":
    case "35181":
      return "ZA";

    case "34126":
      return "ZW";

    default:
      return undefined;
  }
}
