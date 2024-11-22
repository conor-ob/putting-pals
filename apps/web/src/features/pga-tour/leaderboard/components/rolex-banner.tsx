import { ListItem } from "@components/list-item";
import { api } from "@providers/trpc-provider";

export function RolexBanner({ id }: { id?: string }) {
  const { data } = api.tournament.getById.useQuery({ id });

  if (data === undefined) {
    return <ListItem></ListItem>;
  } else {
    return (
      <ListItem>
        <div className="w-full px-4">
          <div className="h-16 rounded-md bg-rolex"></div>
        </div>
      </ListItem>
    );
  }
}
