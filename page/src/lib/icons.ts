const iconMap = new Map<string, string>([
  ['Governance', 'GovernanceDRep'],
  ['Staking', 'StakingOutline'],
  ['DApp Browser', 'DApp2'],
]);

export function getIconPath(name: string): string {
  const mapped = iconMap.get(name) ?? name;
  const clean = mapped.startsWith('Icon') ? mapped.slice(4) : mapped;
  return `/gitbook-assets/icons/${clean}.svg`;
}
