import z from "zod";

export const ScheduleTournamentSchema = z.object({
  id: z.string(),
  date: z.string(),
  startDate: z.number(),
  dateAccessibilityText: z.string(),
  country: z.string(),
  countryCode: z.string().length(3),
  state: z.string(),
  stateCode: z.string().length(2),
  city: z.string(),
  status: z
    .object({
      roundStatusDisplay: z.string(),
      roundDisplay: z.string(),
      roundStatus: z.string(),
      roundStatusColor: z.string(),
      leaderboardTakeover: z.boolean(),
    })
    .nullable()
    .optional(),
  tournamentName: z.string(),
  tournamentLogo: z.string(),
});

export const ScheduleMonthSchema = z.object({
  year: z.string(),
  month: z.string(),
  monthSort: z.number().nullable().optional(),
  tournaments: z.array(ScheduleTournamentSchema),
});

export const ScheduleSchema = z.object({
  completed: z.array(ScheduleMonthSchema),
  upcoming: z.array(ScheduleMonthSchema),
});

export const ScheduleUpcomingSchema = z.object({
  tournaments: z.array(ScheduleTournamentSchema),
});
