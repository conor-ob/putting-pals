# ESPN REST API

## Leaderboard

https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=all&region=us&lang=en&event=${tempId}
https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=eur&region=us&lang=en
https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=eur
https://site.web.api.espn.com/apis/personalized/site/v2/sports/golf/leaderboard/streams?sport=golf&league=eur
https://fcast.espncdn.com/FastcastService/pubsub/profiles/12000/topic/golf-leaderboard-eur/message/719850/checkpoint

## Schedule

https://www.espn.com/golf/schedule/_/tour/eur?_xhr=pageContent
https://www.espn.com/golf/schedule/_/tour/eur/season/2026?_xhr=pageContent
https://site.web.api.espn.com/apis/site/v2/sports/golf/eur/tourschedule?region=us&lang=en&season=2026

## Scoreboard

https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header?sport=golf&league=pga&region=us&lang=en&contentorigin=espn&configuration=STREAM_MENU&platform=web&features=sfb-all%2Ccutl&buyWindow=1m&showAirings=buy%2Clive%2Creplay&showZipLookup=true&tz=America%2FNew_York&postalCode=d01&playabilitySource=playbackId
https://site.api.espn.com/apis/site/v2/sports/golf/eur/scoreboard

## Tournament

- GET current tournament / leaderboard
https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=eur
https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header?sport=golf&league=eur&event=401822682

## News

https://content.core.api.espn.com/v1/sports/golf/eur/news
https://content.core.api.espn.com/v1/sports/golf/eur/news/46986173
https://content.core.api.espn.com/v1/sports/news/46986173
https://site.web.api.espn.com/apis/site/v2/sports/golf/eur/news?region=us&lang=en&contentorigin=espn&limit=3
