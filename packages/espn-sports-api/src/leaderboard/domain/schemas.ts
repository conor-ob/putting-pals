import { z } from "zod";

export const ApiLeaderboardSchema = z.object({
  events: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      date: z.string(),
      endDate: z.string(),
      name: z.string(),
      shortName: z.string(),
      primary: z.boolean(),
      hasPlayerStats: z.boolean(),
      hasCourseStats: z.boolean(),
      purse: z.number(),
      displayPurse: z.string(),
      league: z.object({
        id: z.string(),
        name: z.string(),
        abbreviation: z.string(),
        shortName: z.string(),
        slug: z.string(),
      }),
      season: z.object({
        year: z.number(),
      }),
      seasonType: z.object({
        id: z.string(),
        name: z.string(),
      }),
      tournament: z.object({
        id: z.string(),
        displayName: z.string(),
        major: z.boolean(),
        scoringSystem: z.object({
          id: z.string(),
          name: z.string(),
        }),
        numberOfRounds: z.number(),
        cutRound: z.number(),
        cutScore: z.number(),
        cutCount: z.number(),
      }),
      status: z.object({
        type: z.object({
          id: z.string(),
          name: z.string(),
          state: z.string(),
          completed: z.boolean(),
          description: z.string(),
        }),
      }),
      defendingChampion: z.object({
        athlete: z.object({
          id: z.string(),
          displayName: z.string(),
          amateur: z.boolean(),
        }),
        displayName: z.string(),
      }),
      playoffType: z.object({
        id: z.number(),
        description: z.string(),
        minimumHoles: z.number(),
      }),
      competitions: z.array(
        z.object({
          id: z.string(),
          uid: z.string(),
          date: z.string(),
          endDate: z.string(),
          recent: z.boolean(),
          onWatchESPN: z.boolean(),
          dataFormat: z.string(),
          status: z.object({
            period: z.number(),
            type: z.object({
              id: z.string(),
              name: z.string(),
              state: z.string(),
              description: z.string(),
              detail: z.string(),
              shortDetail: z.string(),
            }),
          }),
          competitors: z.array(
            z.object({
              id: z.string(),
              uid: z.string(),
              movement: z.number(),
              earnings: z.number(),
              sortOrder: z.number(),
              amateur: z.boolean(),
              featured: z.boolean(),
              status: z.object({
                displayValue: z.string(),
                period: z.number(),
                teeTime: z.string().optional(),
                startHole: z.number(),
                thru: z.number(),
                playoff: z.boolean(),
                behindCurrentRound: z.boolean(),
                detail: z.string(),
                type: z.object({
                  id: z.string(),
                  name: z.string(),
                  state: z.string(),
                  description: z.string(),
                  detail: z.string(),
                  shortDetail: z.string(),
                }),
                position: z.object({
                  id: z.string(),
                  displayName: z.string(),
                  isTie: z.boolean(),
                }),
              }),
              score: z.object({
                value: z.number(),
                displayValue: z.string(),
              }),
              athlete: z.object({
                id: z.string(),
                uid: z.string(),
                guid: z.string(),
                displayName: z.string(),
                shortName: z.string(),
                lastName: z.string(),
                amateur: z.boolean(),
                flag: z.object({
                  href: z.url(),
                  alt: z.string(),
                }),
                birthplace: z
                  .object({
                    countryAbbreviation: z.string(),
                  })
                  .optional(),
                headshot: z
                  .object({
                    href: z.string(),
                  })
                  .optional(),
              }),
            }),
          ),
        }),
      ),
      courses: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          totalYards: z.number(),
          shotsToPar: z.number(),
          parIn: z.number(),
          parOut: z.number(),
          host: z.boolean(),
          holes: z.array(
            z.object({
              number: z.number(),
              shotsToPar: z.number(),
              totalYards: z.number(),
            }),
          ),
          address: z.object({
            city: z.string(),
            country: z.string(),
          }),
        }),
      ),
    }),
  ),
});
