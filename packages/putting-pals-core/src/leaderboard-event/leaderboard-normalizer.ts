type NormalizedObject = Record<string, unknown>;

export function normalize(data: unknown): unknown {
  // Handle null/undefined
  if (data == null) {
    return data;
  }

  // Handle arrays - convert to record keyed by id
  if (Array.isArray(data)) {
    // Check if array items have 'id' property
    const hasIds = data.every(
      (item) => typeof item === "object" && item !== null && "id" in item,
    );

    if (hasIds) {
      // Transform to record keyed by id
      const record: NormalizedObject = {};
      for (const item of data) {
        const { id, ...rest } = item as {
          id: string | number;
          [key: string]: unknown;
        };
        record[String(id)] = normalize(rest);
      }
      // Sort the record keys
      return sortObjectKeys(record);
    }

    // If no ids, just normalize each element
    return data.map((item) => normalize(item));
  }

  // Handle objects - sort keys and recurse
  if (typeof data === "object") {
    const normalized: NormalizedObject = {};
    const sortedKeys = Object.keys(data).sort();

    for (const key of sortedKeys) {
      normalized[key] = normalize((data as NormalizedObject)[key]);
    }

    return normalized;
  }

  // Primitives - return as-is
  return data;
}

function sortObjectKeys(obj: NormalizedObject): NormalizedObject {
  const sorted: NormalizedObject = {};
  const sortedKeys = Object.keys(obj).sort();

  for (const key of sortedKeys) {
    sorted[key] = obj[key];
  }

  return sorted;
}
