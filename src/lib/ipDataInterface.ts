export interface IPDataInterface {
  ip: string;
  is_eu: boolean;
  city: string;
  region: string;
  region_code: string;
  region_type: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  postal: null;
  calling_code: string;
  flag: string;
  emoji_flag: string;
  emoji_unicode: string;
  asn: Asn;
  carrier: Carrier;
  languages: Language[];
  currency: Currency;
  time_zone: TimeZone;
  threat: Threat;
  count: string;
}

export interface Asn {
  asn: string;
  name: string;
  domain: null;
  route: string;
  type: string;
}

export interface Carrier {
  name: string;
  mcc: string;
  mnc: string;
}

export interface Currency {
  name: string;
  code: string;
  symbol: string;
  native: string;
  plural: string;
}

export interface Language {
  name: string;
  native: string;
  code: string;
}

export interface Threat {
  is_tor: boolean;
  is_icloud_relay: boolean;
  is_proxy: boolean;
  is_datacenter: boolean;
  is_anonymous: boolean;
  is_known_attacker: boolean;
  is_known_abuser: boolean;
  is_threat: boolean;
  is_bogon: boolean;
  blocklists: Blocklist[];
}

export interface Blocklist {
  name: string;
  site: string;
  type: string;
}

export interface TimeZone {
  name: string;
  abbr: string;
  offset: string;
  is_dst: boolean;
  current_time: Date;
}
