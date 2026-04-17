const iconMap = new Map<string, string>([
  ['Governance', 'GovernanceDRep'],
  ['Staking', 'StakingOutline'],
  ['DApp Browser', 'DApp2'],
]);

export function getIconPath(name: string): string {
  const mapped = iconMap.get(name) ?? name;
  return `/assets/icons/${mapped}.svg`;
}
