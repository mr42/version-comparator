/**
 * Compares two version strings.
 *
 * Returns
 * -1 if version < otherVersion
 * 1 if version > otherVersion
 * 0 if version == otherVersion
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function compare(version: string, otherVersion: string): number {
  // Split the version into its parts, e.g. '5.06' -> ['5', '06'],
  const v1 = version.split('.');
  const v2 = otherVersion.split('.');
  const k = Math.min(v1.length, v2.length);
  // Compare the first k parts
  for (let i = 0; i < k; ++i) {
    const result = compareVersionPart(v1[i], v2[i]);
    if (result !== 0) return result;
  }
  // If the first k parts are equal compare the length
  return v1.length === v2.length ? 0 : v1.length < v2.length ? -1 : 1;
}

/**
 * Checks if version <= otherVersion.
 *
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function lte(version: string, otherVersion: string): boolean {
  const comp = compare(version, otherVersion);
  return comp !== 1;
}

/**
 * Checks if version >= otherVersion.
 *
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function gte(version: string, otherVersion: string): boolean {
  const comp = compare(version, otherVersion);
  return comp !== -1;
}

/**
 * Checks if version > otherVersion.
 *
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function gt(version: string, otherVersion: string): boolean {
  const comp = compare(version, otherVersion);
  return comp === 1;
}

/**
 * Checks if version < otherVersion.
 *
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function lt(version: string, otherVersion: string): boolean {
  const comp = compare(version, otherVersion);
  return comp === -1;
}

/**
 * Checks if version == otherVersion.
 *
 * @param version A version string (e.g. 5.4.1 or 5.04)
 * @param otherVersion A version string (e.g. 5.4.1 or 5.04)
 */
export function eq(version: string, otherVersion: string): boolean {
  const comp = compare(version, otherVersion);
  return comp === 0;
}

function compareVersionPart(
  versionPart1: string,
  versionPart2: string
): number {
  const v1PartAsInt = parseInt(versionPart1, 10);
  const v2PartAsInt = parseInt(versionPart2, 10);
  if (v1PartAsInt > v2PartAsInt) return 1;
  if (v1PartAsInt < v2PartAsInt) return -1;
  return 0;
}
