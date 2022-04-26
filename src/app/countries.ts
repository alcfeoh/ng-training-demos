import {Observable, of} from 'rxjs';

export interface Country {
  name: string;
  continent: string;
}

const countries = [
  {
    name: 'Afghanistan',
    continent: 'Asia'
  },
  {
    name: 'Albania',
    continent: 'Europe'
  },
  {
    name: 'Algeria',
    continent: 'Africa'
  },
  {
    name: 'American Samoa',
    continent: 'Oceania'
  },
  {
    name: 'Andorra',
    continent: 'Europe'
  },
  {
    name: 'Angola',
    continent: 'Africa'
  },
  {
    name: 'Anguilla',
    continent: 'North America'
  },
  {
    name: 'Antarctica',
    continent: 'Antarctica'
  },
  {
    name: 'Antigua and Barbuda',
    continent: 'North America'
  },
  {
    name: 'Argentina',
    continent: 'South America'
  },
  {
    name: 'Armenia',
    continent: 'Asia'
  },
  {
    name: 'Aruba',
    continent: 'North America'
  },
  {
    name: 'Australia',
    continent: 'Oceania'
  },
  {
    name: 'Austria',
    continent: 'Europe'
  },
  {
    name: 'Azerbaijan',
    continent: 'Asia'
  },
  {
    name: 'Bahamas',
    continent: 'North America'
  },
  {
    name: 'Bahrain',
    continent: 'Asia'
  },
  {
    name: 'Bangladesh',
    continent: 'Asia'
  },
  {
    name: 'Barbados',
    continent: 'North America'
  },
  {
    name: 'Belarus',
    continent: 'Europe'
  },
  {
    name: 'Belgium',
    continent: 'Europe'
  },
  {
    name: 'Belize',
    continent: 'North America'
  },
  {
    name: 'Benin',
    continent: 'Africa'
  },
  {
    name: 'Bermuda',
    continent: 'North America'
  },
  {
    name: 'Bhutan',
    continent: 'Asia'
  },
  {
    name: 'Bolivia',
    continent: 'South America'
  },
  {
    name: 'Bosnia and Herzegovina',
    continent: 'Europe'
  },
  {
    name: 'Botswana',
    continent: 'Africa'
  },
  {
    name: 'Bouvet Island',
    continent: 'Antarctica'
  },
  {
    name: 'Brazil',
    continent: 'South America'
  },
  {
    name: 'British Indian Ocean Territory',
    continent: 'Africa'
  },
  {
    name: 'Brunei',
    continent: 'Asia'
  },
  {
    name: 'Bulgaria',
    continent: 'Europe'
  },
  {
    name: 'Burkina Faso',
    continent: 'Africa'
  },
  {
    name: 'Burundi',
    continent: 'Africa'
  },
  {
    name: 'Cambodia',
    continent: 'Asia'
  },
  {
    name: 'Cameroon',
    continent: 'Africa'
  },
  {
    name: 'Canada',
    continent: 'North America'
  },
  {
    name: 'Cape Verde',
    continent: 'Africa'
  },
  {
    name: 'Cayman Islands',
    continent: 'North America'
  },
  {
    name: 'Central African Republic',
    continent: 'Africa'
  },
  {
    name: 'Chad',
    continent: 'Africa'
  },
  {
    name: 'Chile',
    continent: 'South America'
  },
  {
    name: 'China',
    continent: 'Asia'
  },
  {
    name: 'Christmas Island',
    continent: 'Oceania'
  },
  {
    name: 'Cocos (Keeling) Islands',
    continent: 'Oceania'
  },
  {
    name: 'Colombia',
    continent: 'South America'
  },
  {
    name: 'Comoros',
    continent: 'Africa'
  },
  {
    name: 'Congo',
    continent: 'Africa'
  },
  {
    name: 'Cook Islands',
    continent: 'Oceania'
  },
  {
    name: 'Costa Rica',
    continent: 'North America'
  },
  {
    name: 'Croatia',
    continent: 'Europe'
  },
  {
    name: 'Cuba',
    continent: 'North America'
  },
  {
    name: 'Cyprus',
    continent: 'Asia'
  },
  {
    name: 'Czech Republic',
    continent: 'Europe'
  },
  {
    name: 'Denmark',
    continent: 'Europe'
  },
  {
    name: 'Djibouti',
    continent: 'Africa'
  },
  {
    name: 'Dominica',
    continent: 'North America'
  },
  {
    name: 'Dominican Republic',
    continent: 'North America'
  },
  {
    name: 'East Timor',
    continent: 'Asia'
  },
  {
    name: 'Ecuador',
    continent: 'South America'
  },
  {
    name: 'Egypt',
    continent: 'Africa'
  },
  {
    name: 'El Salvador',
    continent: 'North America'
  },
  {
    name: 'England',
    continent: 'Europe'
  },
  {
    name: 'Equatorial Guinea',
    continent: 'Africa'
  },
  {
    name: 'Eritrea',
    continent: 'Africa'
  },
  {
    name: 'Estonia',
    continent: 'Europe'
  },
  {
    name: 'Ethiopia',
    continent: 'Africa'
  },
  {
    name: 'Falkland Islands',
    continent: 'South America'
  },
  {
    name: 'Faroe Islands',
    continent: 'Europe'
  },
  {
    name: 'Fiji Islands',
    continent: 'Oceania'
  },
  {
    name: 'Finland',
    continent: 'Europe'
  },
  {
    name: 'France',
    continent: 'Europe'
  },
  {
    name: 'French Guiana',
    continent: 'South America'
  },
  {
    name: 'French Polynesia',
    continent: 'Oceania'
  },
  {
    name: 'French Southern territories',
    continent: 'Antarctica'
  },
  {
    name: 'Gabon',
    continent: 'Africa'
  },
  {
    name: 'Gambia',
    continent: 'Africa'
  },
  {
    name: 'Georgia',
    continent: 'Asia'
  },
  {
    name: 'Germany',
    continent: 'Europe'
  },
  {
    name: 'Ghana',
    continent: 'Africa'
  },
  {
    name: 'Gibraltar',
    continent: 'Europe'
  },
  {
    name: 'Greece',
    continent: 'Europe'
  },
  {
    name: 'Greenland',
    continent: 'North America'
  },
  {
    name: 'Grenada',
    continent: 'North America'
  },
  {
    name: 'Guadeloupe',
    continent: 'North America'
  },
  {
    name: 'Guam',
    continent: 'Oceania'
  },
  {
    name: 'Guatemala',
    continent: 'North America'
  },
  {
    name: 'Guinea',
    continent: 'Africa'
  },
  {
    name: 'Guinea-Bissau',
    continent: 'Africa'
  },
  {
    name: 'Guyana',
    continent: 'South America'
  },
  {
    name: 'Haiti',
    continent: 'North America'
  },
  {
    name: 'Heard Island and McDonald Islands',
    continent: 'Antarctica'
  },
  {
    name: 'Holy See (Vatican City State)',
    continent: 'Europe'
  },
  {
    name: 'Honduras',
    continent: 'North America'
  },
  {
    name: 'Hong Kong',
    continent: 'Asia'
  },
  {
    name: 'Hungary',
    continent: 'Europe'
  },
  {
    name: 'Iceland',
    continent: 'Europe'
  },
  {
    name: 'India',
    continent: 'Asia'
  },
  {
    name: 'Indonesia',
    continent: 'Asia'
  },
  {
    name: 'Iran',
    continent: 'Asia'
  },
  {
    name: 'Iraq',
    continent: 'Asia'
  },
  {
    name: 'Ireland',
    continent: 'Europe'
  },
  {
    name: 'Israel',
    continent: 'Asia'
  },
  {
    name: 'Italy',
    continent: 'Europe'
  },
  {
    name: 'Ivory Coast',
    continent: 'Africa'
  },
  {
    name: 'Jamaica',
    continent: 'North America'
  },
  {
    name: 'Japan',
    continent: 'Asia'
  },
  {
    name: 'Jordan',
    continent: 'Asia'
  },
  {
    name: 'Kazakhstan',
    continent: 'Asia'
  },
  {
    name: 'Kenya',
    continent: 'Africa'
  },
  {
    name: 'Kiribati',
    continent: 'Oceania'
  },
  {
    name: 'Kuwait',
    continent: 'Asia'
  },
  {
    name: 'Kyrgyzstan',
    continent: 'Asia'
  },
  {
    name: 'Laos',
    continent: 'Asia'
  },
  {
    name: 'Latvia',
    continent: 'Europe'
  },
  {
    name: 'Lebanon',
    continent: 'Asia'
  },
  {
    name: 'Lesotho',
    continent: 'Africa'
  },
  {
    name: 'Liberia',
    continent: 'Africa'
  },
  {
    name: 'Libyan Arab Jamahiriya',
    continent: 'Africa'
  },
  {
    name: 'Liechtenstein',
    continent: 'Europe'
  },
  {
    name: 'Lithuania',
    continent: 'Europe'
  },
  {
    name: 'Luxembourg',
    continent: 'Europe'
  },
  {
    name: 'Macao',
    continent: 'Asia'
  },
  {
    name: 'North Macedonia',
    continent: 'Europe'
  },
  {
    name: 'Madagascar',
    continent: 'Africa'
  },
  {
    name: 'Malawi',
    continent: 'Africa'
  },
  {
    name: 'Malaysia',
    continent: 'Asia'
  },
  {
    name: 'Maldives',
    continent: 'Asia'
  },
  {
    name: 'Mali',
    continent: 'Africa'
  },
  {
    name: 'Malta',
    continent: 'Europe'
  },
  {
    name: 'Marshall Islands',
    continent: 'Oceania'
  },
  {
    name: 'Martinique',
    continent: 'North America'
  },
  {
    name: 'Mauritania',
    continent: 'Africa'
  },
  {
    name: 'Mauritius',
    continent: 'Africa'
  },
  {
    name: 'Mayotte',
    continent: 'Africa'
  },
  {
    name: 'Mexico',
    continent: 'North America'
  },
  {
    name: 'Micronesia, Federated States of',
    continent: 'Oceania'
  },
  {
    name: 'Moldova',
    continent: 'Europe'
  },
  {
    name: 'Monaco',
    continent: 'Europe'
  },
  {
    name: 'Mongolia',
    continent: 'Asia'
  },
  {
    name: 'Montenegro',
    continent: 'Europe'
  },
  {
    name: 'Montserrat',
    continent: 'North America'
  },
  {
    name: 'Morocco',
    continent: 'Africa'
  },
  {
    name: 'Mozambique',
    continent: 'Africa'
  },
  {
    name: 'Myanmar',
    continent: 'Asia'
  },
  {
    name: 'Namibia',
    continent: 'Africa'
  },
  {
    name: 'Nauru',
    continent: 'Oceania'
  },
  {
    name: 'Nepal',
    continent: 'Asia'
  },
  {
    name: 'Netherlands',
    continent: 'Europe'
  },
  {
    name: 'Netherlands Antilles',
    continent: 'North America'
  },
  {
    name: 'New Caledonia',
    continent: 'Oceania'
  },
  {
    name: 'New Zealand',
    continent: 'Oceania'
  },
  {
    name: 'Nicaragua',
    continent: 'North America'
  },
  {
    name: 'Niger',
    continent: 'Africa'
  },
  {
    name: 'Nigeria',
    continent: 'Africa'
  },
  {
    name: 'Niue',
    continent: 'Oceania'
  },
  {
    name: 'Norfolk Island',
    continent: 'Oceania'
  },
  {
    name: 'North Korea',
    continent: 'Asia'
  },
  {
    name: 'Northern Ireland',
    continent: 'Europe'
  },
  {
    name: 'Northern Mariana Islands',
    continent: 'Oceania'
  },
  {
    name: 'Norway',
    continent: 'Europe'
  },
  {
    name: 'Oman',
    continent: 'Asia'
  },
  {
    name: 'Pakistan',
    continent: 'Asia'
  },
  {
    name: 'Palau',
    continent: 'Oceania'
  },
  {
    name: 'Palestine',
    continent: 'Asia'
  },
  {
    name: 'Panama',
    continent: 'North America'
  },
  {
    name: 'Papua New Guinea',
    continent: 'Oceania'
  },
  {
    name: 'Paraguay',
    continent: 'South America'
  },
  {
    name: 'Peru',
    continent: 'South America'
  },
  {
    name: 'Philippines',
    continent: 'Asia'
  },
  {
    name: 'Pitcairn',
    continent: 'Oceania'
  },
  {
    name: 'Poland',
    continent: 'Europe'
  },
  {
    name: 'Portugal',
    continent: 'Europe'
  },
  {
    name: 'Puerto Rico',
    continent: 'North America'
  },
  {
    name: 'Qatar',
    continent: 'Asia'
  },
  {
    name: 'Reunion',
    continent: 'Africa'
  },
  {
    name: 'Romania',
    continent: 'Europe'
  },
  {
    name: 'Russian Federation',
    continent: 'Europe'
  },
  {
    name: 'Rwanda',
    continent: 'Africa'
  },
  {
    name: 'Saint Helena',
    continent: 'Africa'
  },
  {
    name: 'Saint Kitts and Nevis',
    continent: 'North America'
  },
  {
    name: 'Saint Lucia',
    continent: 'North America'
  },
  {
    name: 'Saint Pierre and Miquelon',
    continent: 'North America'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    continent: 'North America'
  },
  {
    name: 'Samoa',
    continent: 'Oceania'
  },
  {
    name: 'San Marino',
    continent: 'Europe'
  },
  {
    name: 'Sao Tome and Principe',
    continent: 'Africa'
  },
  {
    name: 'Saudi Arabia',
    continent: 'Asia'
  },
  {
    name: 'Scotland',
    continent: 'Europe'
  },
  {
    name: 'Senegal',
    continent: 'Africa'
  },
  {
    name: 'Serbia',
    continent: 'Europe'
  },
  {
    name: 'Seychelles',
    continent: 'Africa'
  },
  {
    name: 'Sierra Leone',
    continent: 'Africa'
  },
  {
    name: 'Singapore',
    continent: 'Asia'
  },
  {
    name: 'Slovakia',
    continent: 'Europe'
  },
  {
    name: 'Slovenia',
    continent: 'Europe'
  },
  {
    name: 'Solomon Islands',
    continent: 'Oceania'
  },
  {
    name: 'Somalia',
    continent: 'Africa'
  },
  {
    name: 'South Africa',
    continent: 'Africa'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    continent: 'Antarctica'
  },
  {
    name: 'South Korea',
    continent: 'Asia'
  },
  {
    name: 'South Sudan',
    continent: 'Africa'
  },
  {
    name: 'Spain',
    continent: 'Europe'
  },
  {
    name: 'Sri Lanka',
    continent: 'Asia'
  },
  {
    name: 'Sudan',
    continent: 'Africa'
  },
  {
    name: 'Suriname',
    continent: 'South America'
  },
  {
    name: 'Svalbard and Jan Mayen',
    continent: 'Europe'
  },
  {
    name: 'Swaziland',
    continent: 'Africa'
  },
  {
    name: 'Sweden',
    continent: 'Europe'
  },
  {
    name: 'Switzerland',
    continent: 'Europe'
  },
  {
    name: 'Syria',
    continent: 'Asia'
  },
  {
    name: 'Tajikistan',
    continent: 'Asia'
  },
  {
    name: 'Tanzania',
    continent: 'Africa'
  },
  {
    name: 'Thailand',
    continent: 'Asia'
  },
  {
    name: 'The Democratic Republic of Congo',
    continent: 'Africa'
  },
  {
    name: 'Togo',
    continent: 'Africa'
  },
  {
    name: 'Tokelau',
    continent: 'Oceania'
  },
  {
    name: 'Tonga',
    continent: 'Oceania'
  },
  {
    name: 'Trinidad and Tobago',
    continent: 'North America'
  },
  {
    name: 'Tunisia',
    continent: 'Africa'
  },
  {
    name: 'Turkey',
    continent: 'Asia'
  },
  {
    name: 'Turkmenistan',
    continent: 'Asia'
  },
  {
    name: 'Turks and Caicos Islands',
    continent: 'North America'
  },
  {
    name: 'Tuvalu',
    continent: 'Oceania'
  },
  {
    name: 'Uganda',
    continent: 'Africa'
  },
  {
    name: 'Ukraine',
    continent: 'Europe'
  },
  {
    name: 'United Arab Emirates',
    continent: 'Asia'
  },
  {
    name: 'United Kingdom',
    continent: 'Europe'
  },
  {
    name: 'United States',
    continent: 'North America'
  },
  {
    name: 'United States Minor Outlying Islands',
    continent: 'Oceania'
  },
  {
    name: 'Uruguay',
    continent: 'South America'
  },
  {
    name: 'Uzbekistan',
    continent: 'Asia'
  },
  {
    name: 'Vanuatu',
    continent: 'Oceania'
  },
  {
    name: 'Venezuela',
    continent: 'South America'
  },
  {
    name: 'Vietnam',
    continent: 'Asia'
  },
  {
    name: 'Virgin Islands, British',
    continent: 'North America'
  },
  {
    name: 'Virgin Islands, U.S.',
    continent: 'North America'
  },
  {
    name: 'Wales',
    continent: 'Europe'
  },
  {
    name: 'Wallis and Futuna',
    continent: 'Oceania'
  },
  {
    name: 'Western Sahara',
    continent: 'Africa'
  },
  {
    name: 'Yemen',
    continent: 'Asia'
  },
  {
    name: 'Zambia',
    continent: 'Africa'
  },
  {
    name: 'Zimbabwe',
    continent: 'Africa'
  }
];

export const FRANCE: Country = countries[72];

export const countryList$: Observable<Country[]> = of(countries);
