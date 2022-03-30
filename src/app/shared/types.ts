export interface OptionValue {
  id:number;
  label: string
}

export interface PackageInfo {
  description: string;
  maintainers: Maintainers[];
  homepage: string;
  license: string
  readme: string;
  repository: Repository
  name: string;
  versions: Version;
  time: Time
}

export interface Maintainers {
  name: string;
  email: string;
}
export interface Version extends PackageInfo {
  dependencies: Record<string, string>;
  version: string
}

export interface Time {
  modified: string;
  created: string;
}



export interface Repository {
  type: string;
  url: string
}
