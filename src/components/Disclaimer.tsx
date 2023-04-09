import { Box, Link } from "@chakra-ui/react";

export default function Disclaimer() {
  return (
    <Box as="aside" fontSize="sm">
      <Box>
        <div className="extraContent__text">
          Football live scores page on Flashscore.com offers all the latest
          football results from more than 1000+ football leagues and tournaments
          all around the world including the most famous{" "}
          <Link href="/football/england/premier-league/">Premier League</Link>,{" "}
          <Link href="/football/spain/laliga/">LaLiga</Link>,{" "}
          <Link href="/football/italy/serie-a/">Serie A</Link>,{" "}
          <Link href="/football/germany/bundesliga/">Bundesliga</Link>,{" "}
          <Link href="/football/europe/champions-league/">UEFA Champions League</Link>{" "}
          and also other leagues such as Chinese Super League or Egypt Premier
          League. Follow all the latest football results on Flashscore.com where
          you can find previews of the football matches, detailed statistics
          (shots on goal, ball possesion, corner stats, yellow and red cards,
          fouls etc.), odds comparison, H2H, lineups, live commentary, match
          report, transfers, news or video highlights. In addition to football
          scores and <Link href="/news/football/">football news</Link> you can also
          follow more than 30+ sports (<Link href="/tennis/">tennis live</Link>,{" "}
          <Link href="/basketball/">basketball scores</Link>,{" "}
          <Link href="/badminton/">badminton results</Link> - complete list of sports
          can be found in the <Link href="/live-scores/">Live scores</Link> section).
          Find all today's/tonight's football scores on Flashscore.com. The
          football livescore service is real time, you don't need to refresh it.
          <br />
          Football <b>Premier League</b> live on Flashscore.com! Saturday 8
          April Man Utd v Everton, Aston Villa v Nott'm Forest, Brentford v
          Newcastle, Fulham v West Ham, Leicester v AFC Bournemouth, Spurs v
          Brighton, Wolves v Chelsea, Southampton v Man City, Sunday 9 April
          Leeds v Crystal Palace, Liverpool v Arsenal. Follow live scores,{" "}
          <Link href="/football/england/premier-league/results/">EPL results</Link>,{" "}
          <Link href="/football/england/premier-league/fixtures/">fixtures</Link>,{" "}
          <Link href="/football/england/premier-league/standings/">
            Premier League standings
          </Link>{" "}
          and team pages (e.g. <Link href="/team/chelsea/4fGZN2oK/">Chelsea</Link>,{" "}
          <Link href="/team/arsenal/hA1Zm19f/">Arsenal</Link>).
          <br />
        </div>
      </Box>
    </Box>
  );
}
