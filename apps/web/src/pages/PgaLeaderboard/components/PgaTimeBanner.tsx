import { ListItem } from "../../../components/ListItem/ListItem";
import { api } from "../../../providers/trpc-provider";

export function PgaTimeBanner({ id }: { id?: string }) {
  const { data } = api.tournament.getById.useQuery({ id });

  if (data === undefined) {
    return <ListItem></ListItem>;
  } else {
    return (
      <ListItem>
        <div className="w-full px-4">
          <div className="bg-rolex h-16 rounded-md"></div>
        </div>
      </ListItem>
    );
  }
}
