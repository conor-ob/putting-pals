# Putting Pals

A golf prediction game among friends: for each Tournament, Competitors pick professional Players and are ranked on their Picks' combined scores.

## Language

### People

**Competitor**:
A friend who enters a Competition by making Picks.
_Avoid_: Pal, PuttingPalsPlayer, user, entrant

**Player**:
A professional golfer playing in a Tournament.
_Avoid_: golfer, pro

### Events

**Tour**:
A professional golf circuit that runs Tournaments, e.g. the PGA TOUR or DP World Tour. Putting Pals is not a Tour; it is a way of viewing a Tournament as a Competition.

**Tournament**:
A real-world professional golf event (e.g. the Masters) run by a Tour.
_Avoid_: event

**Season**:
A Tour's year of Tournaments, e.g. the 2026 PGA TOUR Season.

**Schedule**:
The Tournaments a Tour runs in a Season, split into upcoming and completed.

**Competition**:
The Putting Pals game played on a single Tournament; there is at most one Competition per Tournament.
_Avoid_: game, contest

### Picks

**Pick**:
A Player chosen by a Competitor for a Competition. Every Competitor makes exactly three, and no two Competitors may have the same three.
_Avoid_: selection, choice, team member

**Combined Odds**:
The sum of the fractional bookmaker odds of a Competitor's three Picks (e.g. 50/1 + 40/1 + 35/1 = 125/1).

**Minimum Combined Odds**:
The lowest Combined Odds a Competitor's Picks must reach (125/1), so that nobody can simply pick the three favourites.
_Avoid_: odds limit, handicap

### Scoring

**Scoring Rules**:
The rules for how a Competition turns its Picks' tournament scores into a Competitor's total: either Default Scoring or the Missed Cut Rule.

**Default Scoring**:
Scoring Rules where every Pick counts with their actual tournament score, including a Pick who missed the cut.

**Missed Cut Rule**:
Scoring Rules where a Pick who misses the cut, withdraws or is disqualified counts as no better than the worst-scoring Pick, across all Competitors, who made the cut. This stops a Pick leaving the Tournament early from helping a Competitor. Used from 2025 onwards.
_Avoid_: cut penalty, MISSED_CUT

**Tie-break**:
How Competitors level on score are separated: the higher Combined Odds wins, and if those are also equal, the Competitor with the single longest-odds Pick wins.

### Results and money

**Winner**:
The Competitor ranked first in a Competition after any Tie-break.

**Runner-up**:
The Competitor ranked second in a Competition after any Tie-break.

**Entry Fee**:
What each Competitor pays to enter a Competition; €10 by default.

**Pot**:
The total of all Competitors' Entry Fees for a Competition.
_Avoid_: purse, prize pool

**Payout**:
What the Runner-up or Winner receives. By default the Runner-up gets twice the Entry Fee and the Winner gets the rest of the Pot.
_Avoid_: prize, winnings

### Live play

**Leaderboard**:
The current ranking of a Tournament's Players or, for a Competition, of its Competitors, each grouped with their Picks.
_Avoid_: standings, table

**Leader**:
A Player in first place on a Leaderboard; there can be several when they are tied.

**Tournament Status**:
Whether a Tournament has not started, is in progress, or is completed.

**Round Status**:
Where the current round of a Tournament stands, e.g. upcoming, in progress, suspended or official.

**Player State**:
Where a Player stands in a Tournament, e.g. active, between rounds, cut, withdrawn or disqualified.

**Hot Streak**:
A Player on a run of good scoring, as flagged by the Tournament's data source.

### Feed

**Feed**:
The chronological stream of Feed Events for a Tournament, shown alongside the Leaderboard.
_Avoid_: timeline, activity

**Feed Event**:
A notable change to a Player or Competitor during a Tournament, found by comparing successive Leaderboards, such as the Leader changing or a Player missing the cut.
_Avoid_: notification, update
