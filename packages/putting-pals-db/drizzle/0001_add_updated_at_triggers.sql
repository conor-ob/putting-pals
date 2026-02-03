-- Create a reusable trigger function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
--> statement-breakpoint
CREATE TRIGGER update_active_tournament_updated_at
  BEFORE UPDATE ON active_tournament
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
--> statement-breakpoint
CREATE TRIGGER update_feature_flag_updated_at
  BEFORE UPDATE ON feature_flag
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
--> statement-breakpoint
CREATE TRIGGER update_leaderboard_snapshot_updated_at
  BEFORE UPDATE ON leaderboard_snapshot
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
