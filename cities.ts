import { StateData } from '../types';

export const statesData: StateData[] = [
  {
    slug: 'california',
    name: 'California',
    cities: [
      {
        slug: 'los-angeles',
        name: 'Los Angeles',
        phone: '(213) 310-6265',
        epaStat: 'According to EPA frameworks, indoor air in Southern California can gather up to 5x higher concentration of ultra-fine particulate matter. In the Los Angeles basin, vehicle exhaust and port dust settle into residential ventilation systems.',
        healthTrigger: 'Persistent Santa Ana wind cycles driving heavy ash and dust-storm particulate matter, mixed with coastal mold spores and urban pollen.',
        serviceRadius: '15-25 miles covering Downtown LA, Santa Monica, Pasadena, Glendale, Long Beach, Beverly Hills, and Torrance.',
        neighborhoods: ['Silver Lake', 'Westwood', 'Venice', 'Hollywood', 'Pasadena', 'Sherman Oaks', 'Echo Park', 'Santa Monica'],
        pollenLevel: 'High',
        wildfireRisk: 'Extreme',
        averageHumidity: '55%'
      },
      {
        slug: 'san-francisco',
        name: 'San Francisco',
        phone: '(415) 300-4155',
        epaStat: 'EPA assessments highlight that coastal San Francisco residences trap dense marine humidity within HVAC networks, cultivating optimal conditions for micro-fungi and bacterial spores inside dark ducting.',
        healthTrigger: 'Marine layer condensation triggers, bay winds carrying industrial particulate, and periodic wildfire smoke settling in microclimates.',
        serviceRadius: '20-mile radius covering SF Proper, Daly City, San Mateo, San Rafael, Berkeley, and Oakland.',
        neighborhoods: ['Mission District', 'Pacific Heights', 'Sunset District', 'Marina', 'Noe Valley', 'Richmond', 'SOMA', 'Presidio'],
        pollenLevel: 'Moderate',
        wildfireRisk: 'High',
        averageHumidity: '72%'
      },
      {
        slug: 'san-jose',
        name: 'San Jose',
        phone: '(408) 500-4082',
        epaStat: 'South Bay reports suggest office and residential systems accumulate fine silicon compounds, urban dust, and organic debris that cycle continuously unless physically extracted.',
        healthTrigger: 'Valley pollen combined with dry air cycles and dust stirred by rapid technology-park developments.',
        serviceRadius: '20-mile radius covering San Jose, Santa Clara, Sunnyvale, Cupertino, Milpitas, and Campbell.',
        neighborhoods: ['Willow Glen', 'Almaden Valley', 'Downtown San Jose', 'West San Jose', 'Berryessa', 'Rose Garden'],
        pollenLevel: 'High',
        wildfireRisk: 'High',
        averageHumidity: '58%'
      },
      {
        slug: 'sacramento',
        name: 'Sacramento',
        phone: '(916) 400-9168',
        epaStat: 'As the tree capital, Central Valley residences face massive particulate loads. The EPA notes that residential recirculation systems build thick barriers of organic allergen feedback.',
        healthTrigger: 'Intense agricultural cycles, tree pollen (oak and sycamore), and dense valley dust trapped beneath atmospheric layers.',
        serviceRadius: '25-mile radius covering Sacramento, Roseville, Folsom, Elk Grove, Citrus Heights, and Davis.',
        neighborhoods: ['Midtown', 'East Sacramento', 'Land Park', 'Natomas', 'Pocket', 'Arden-Arcade', 'Curtis Park'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Extreme',
        averageHumidity: '52%'
      },
      {
        slug: 'san-diego',
        name: 'San Diego',
        phone: '(619) 300-6192',
        epaStat: 'Coastal humidity combined with inland dry desert sweeps causes sudden temperature deltas. EPA research reveals these shifts accelerate mold and allergen accumulation in older vent plenums.',
        healthTrigger: 'Inland grass pollen, coastal marine-layer mildew, and microscopic dust mites thriving in sustained warmth.',
        serviceRadius: '20-mile radius covering Downtown San Diego, La Jolla, Chula Vista, El Cajon, Escondido, and Del Mar.',
        neighborhoods: ['La Jolla', 'North Park', 'Hillcrest', 'Little Italy', 'Pacific Beach', 'Point Loma', 'Coronado'],
        pollenLevel: 'Moderate',
        wildfireRisk: 'High',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    cities: [
      {
        slug: 'denver',
        name: 'Denver',
        phone: '(303) 700-3030',
        epaStat: 'The EPA warns Denver residents about high altitude dryness and ozone shifts. Low-humidity environments preserve dander, pollen, and synthetic carpet fibers, keeping them suspended in air ducts.',
        healthTrigger: 'High altitude mountain cedar pollen, rapid grass blooms, and severe pine pollen spikes mixed with dry mountain windstorms.',
        serviceRadius: '25-mile radius covering Denver Metro, Aurora, Lakewood, Thornton, Westminster, and Littleton.',
        neighborhoods: ['Capitol Hill', 'Five Points', 'Cherry Creek', 'LoDo', 'Highlands', 'Washington Park', 'Stapleton'],
        pollenLevel: 'High',
        wildfireRisk: 'Extreme',
        averageHumidity: '38%'
      },
      {
        slug: 'colorado-springs',
        name: 'Colorado Springs',
        phone: '(719) 400-7195',
        epaStat: 'Mountain air carries wild micro-allergens that accumulate in standard home furnace registers. Environmental logs verify that typical heating systems cycle these irritants over and over.',
        healthTrigger: 'High pine pollen counts, dusty winds descending from Pikes Peak, and fire-season woodsmoke.',
        serviceRadius: '20-mile radius covering Colorado Springs, Monument, Falcon, Fountain, and Manitou Springs.',
        neighborhoods: ['Broadmoor', 'Old Colorado City', 'Briargate', 'Downtown', 'Rockrimmon', 'Westside'],
        pollenLevel: 'High',
        wildfireRisk: 'Extreme',
        averageHumidity: '40%'
      }
    ]
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    cities: [
      {
        slug: 'chicago',
        name: 'Chicago',
        phone: '(312) 800-3122',
        epaStat: 'Extreme seasonal changes in Illinois mean systems operate 24/7. Long winters keep homes sealed, increasing dust-mite carcasses, pet dander, and soot concentrations inside air shafts as per EPA statistics.',
        healthTrigger: 'Midwestern ragweed, heavy seasonal oak/grass pollen, and prolonged winter moisture creating condensation mold.',
        serviceRadius: '25-mile radius covering Chicago, Evanston, Naperville, Aurora, Oak Park, and Schaumburg.',
        neighborhoods: ['Lincoln Park', 'Lakeview', 'Wicker Park', 'Logan Square', 'Gold Coast', 'Hyde Park', 'River North'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '65%'
      }
    ]
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    cities: [
      {
        slug: 'las-vegas',
        name: 'Las Vegas',
        phone: '(702) 900-7022',
        epaStat: 'Desert heat requires heavy AC utilization. Fine silica sand, desert dust, and mineralized organic particles settle deeply behind air filters into standard evaporator coils and supply registers.',
        healthTrigger: 'Intense desert dust storms, heavy spring mulberry and olive tree pollen, and dry air static keeping dander floating.',
        serviceRadius: '20-mile radius covering Las Vegas, Henderson, North Las Vegas, Spring Valley, and Summerlin.',
        neighborhoods: ['Summerlin', 'Henderson', 'Green Valley', 'Centennial Hills', 'The Lakes', 'Southern Highlands'],
        pollenLevel: 'High',
        wildfireRisk: 'High',
        averageHumidity: '22%'
      }
    ]
  },
  {
    slug: 'washington',
    name: 'Washington',
    cities: [
      {
        slug: 'seattle',
        name: 'Seattle',
        phone: '(206) 600-2062',
        epaStat: 'EPA indicators reveal Pacific Northwest moisture fosters rapid damp-wood and masonry mold spores inside ducts. Without thermal remediation, these spores disperse during peak fan cycles.',
        healthTrigger: 'Prolonged damp seasons multiplying mold spores, alder and cedar pollen spikes in spring, and summer wildfire smoke drafts.',
        serviceRadius: '25-mile radius covering Seattle, Bellevue, Redmond, Renton, Kirkland, and Tacoma.',
        neighborhoods: ['Capitol Hill', 'Ballard', 'Fremont', 'Queen Anne', 'West Seattle', 'Green Lake', 'University District'],
        pollenLevel: 'Moderate',
        wildfireRisk: 'High',
        averageHumidity: '78%'
      }
    ]
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    cities: [
      {
        slug: 'portland',
        name: 'Portland',
        phone: '(503) 800-5034',
        epaStat: 'Persistent damp air and heavy tree cover supply a relentless stream of spores. Clean-air studies indicate standard ventilation registers in Portland house elevated levels of biological dust.',
        healthTrigger: 'Massive grass seed pollen from the Willamette Valley, outdoor mold spore drift, and summer wildfire particulate.',
        serviceRadius: '20-mile radius covering Portland, Beaverton, Hillsboro, Gresham, Lake Oswego, and Vancouver (WA).',
        neighborhoods: ['Pearl District', 'Alberta Arts', 'Hawthorne', 'Sellwood', 'Laurelhurst', 'NW 23rd', 'St. Johns'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'High',
        averageHumidity: '75%'
      }
    ]
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    cities: [
      {
        slug: 'nashville',
        name: 'Nashville',
        phone: '(615) 205-3379',
        epaStat: 'The EPA highlights Tennessee as a primary allergen zone. Humid air captures cedar chest residues and local dander, baking them into warm internal duct liners.',
        healthTrigger: 'Severe spring tree pollen, mountain cedar sweeps, and humid summer stagnation locking in urban particulate.',
        serviceRadius: '25-mile radius covering Nashville, Franklin, Brentwood, Hendersonville, and Murfreesboro.',
        neighborhoods: ['East Nashville', 'The Gulch', '12 South', 'Germantown', 'Green Hills', 'Bellevue', 'Sylvan Park'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    cities: [
      {
        slug: 'minneapolis',
        name: 'Minneapolis',
        phone: '(612) 400-6126',
        epaStat: 'Under tight winter seals, indoor pollutants reach up to 10 times higher than outdoor limits. Recirculated micro-fibers, pollen skeletons, and furnace soot collect in sub-floor mainlines.',
        healthTrigger: 'Midwestern maple/elm tree pollen, heavy autumn ragweed, and indoor mold induced by radiator humidity leaks.',
        serviceRadius: '25-mile radius covering Minneapolis-St. Paul metro, Edina, Bloomington, Minnetonka, and St. Paul.',
        neighborhoods: ['Linden Hills', 'North Loop', 'Uptown', 'Northeast', 'Dinkytown', 'Kingfield', 'Longfellow'],
        pollenLevel: 'High',
        wildfireRisk: 'Moderate',
        averageHumidity: '63%'
      }
    ]
  },
  {
    slug: 'texas',
    name: 'Texas',
    cities: [
      {
        slug: 'dallas',
        name: 'Dallas',
        phone: '(214) 900-2144',
        epaStat: 'High temperatures generate heavy AC compression. EPA documentation details high condensation inside cooling coils that converts stagnant dust into allergens.',
        healthTrigger: 'Severe cedar fever (winter cedar pollen), dense spring ragweed, and desert dust winds.',
        serviceRadius: '25-mile radius covering Dallas, Fort Worth, Plano, Frisco, Irving, and Arlington.',
        neighborhoods: ['Uptown', 'Deep Ellum', 'Lakewood', 'Oak Lawn', 'Kessler Park', 'Bishop Arts', 'M-Streets'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'High',
        averageHumidity: '59%'
      },
      {
        slug: 'houston',
        name: 'Houston',
        phone: '(713) 800-7132',
        epaStat: 'Ranked constantly among the most humid zones, Houston HVAC lines are vulnerable to biolayer growths. The EPA emphasizes mechanical scrubbing to halt spore propagation.',
        healthTrigger: 'Relentless coastal humidity, severe mold spore counts, and intense pine tree pollen cycles.',
        serviceRadius: '25-mile radius covering Houston, The Woodlands, Sugar Land, Katy, Pasadena, and Pearland.',
        neighborhoods: ['The Heights', 'Montrose', 'Midtown', 'River Oaks', 'West University', 'Museum District'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '78%'
      },
      {
        slug: 'austin',
        name: 'Austin',
        phone: '(512) 600-5122',
        epaStat: 'Hill Country air carries intensive cedar pollen. Ventilation channels act as massive dust collectors, capturing pollen that is re-blown into living spaces.',
        healthTrigger: 'Intense winter mountain cedar (Cedar Fever), mold-inducing autumn rain cycles, and oak tree pollen.',
        serviceRadius: '20-mile radius covering Austin Proper, Round Rock, West Lake Hills, Kyle, Buda, and Pflugerville.',
        neighborhoods: ['South Congress', 'East Austin', 'Downtown Austin', 'Clarksville', 'Hyde Park', 'Zilker', 'Bouldin Creek'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'High',
        averageHumidity: '62%'
      },
      {
        slug: 'san-antonio',
        name: 'San Antonio',
        phone: '(210) 500-2104',
        epaStat: 'The combination of calcareous soil dust and cedar pollen compiles a heavy plaster-like dust layer on internal duct walls over time.',
        healthTrigger: 'Oak and mountain cedar dander, dry dust sweeping from the dry plains, and sudden humid drafts.',
        serviceRadius: '25-mile radius covering San Antonio, Boerne, New Braunfels, Schertz, and Helotes.',
        neighborhoods: ['Alamo Heights', 'Stone Oak', 'The Pearl', 'King William', 'Monte Vista', 'Southtown'],
        pollenLevel: 'High',
        wildfireRisk: 'High',
        averageHumidity: '64%'
      }
    ]
  },
  {
    slug: 'alabama',
    name: 'Alabama',
    cities: [
      {
        slug: 'mobile',
        name: 'Mobile',
        phone: '(251) 400-2512',
        epaStat: 'With some of the highest rainfall levels in the US, wet crawlspaces and hot attics trigger duct-wall sweat. Inactive systems during shoulder months breed micro-organic threats.',
        healthTrigger: 'Sustained coastal humidity, marsh grass spores, and intense spring pine dander.',
        serviceRadius: '20-mile radius covering Mobile, Daphne, Fairhope, Spanish Fort, and Saraland.',
        neighborhoods: ['Oakleigh Historic District', 'Midtown Mobile', 'Spring Hill', 'Downtown Mobile', 'Bel Air'],
        pollenLevel: 'High',
        wildfireRisk: 'Moderate',
        averageHumidity: '79%'
      }
    ]
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    cities: [
      {
        slug: 'indianapolis',
        name: 'Indianapolis',
        phone: '(317) 555-0182',
        epaStat: 'Industrial and agricultural dust layers settle in residential air distribution networks. Cold winter seasons trap indoor pet dander and combustion soot closely.',
        healthTrigger: 'Ragweed pollen drift, local soybean and corn agricultural dust, and mold spores from damp basements.',
        serviceRadius: '25-mile radius covering Indianapolis, Carmel, Fishers, Greenwood, Noblesville, and Zionsville.',
        neighborhoods: ['Broad Ripple', 'Mass Ave', 'Fountain Square', 'Meridian-Kessler', 'Downtown Indy', 'Mile Square'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    cities: [
      {
        slug: 'charlotte',
        name: 'Charlotte',
        phone: '(704) 300-7041',
        epaStat: 'Piedmont pines supply fine allergen dust. Indoor testing tracks deep layers of yellow organic dust settling directly into return duct plenums.',
        healthTrigger: 'Heavy pine dust layers, seasonal oak blooms, and rapid mold spore generation during damp summer periods.',
        serviceRadius: '25-mile radius covering Charlotte, Concord, Huntersville, Gastonia, Rock Hill (SC), and Matthews.',
        neighborhoods: ['NoDa', 'Plaza Midwood', 'Myers Park', 'Dilworth', 'South End', 'Center City', 'Elizabeth'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '66%'
      },
      {
        slug: 'raleigh',
        name: 'Raleigh',
        phone: '(919) 800-9195',
        epaStat: 'Research Triangle tests clarify that HVAC configurations capture elevated levels of organic pollen matrices, which circulate repeatedly within insulated ducts.',
        healthTrigger: 'Dense pine tree pollen coating, warm humectant mold indices, and high outdoor dust-mite feedback.',
        serviceRadius: '25-mile radius covering Raleigh, Durham, Chapel Hill, Cary, Apex, and Wake Forest.',
        neighborhoods: ['Downtown Raleigh', 'Oakwood', 'Boylan Heights', 'Cameron Village', 'Five Points', 'North Hills'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    cities: [
      {
        slug: 'boston',
        name: 'Boston',
        phone: '(617) 800-6172',
        epaStat: 'Historic housing structures utilize older ductwork. These century-old conduits often house layers of legacy coal soot, leaded residues, and rodent dander that threaten respiratory wellbeing.',
        healthTrigger: 'Maple, oak, and birch allergens, coastal mold blooms, and high dust loading from thermal heating cycles.',
        serviceRadius: '20-mile radius covering Boston Proper, Cambridge, Quincy, Newton, Brookline, and Somerville.',
        neighborhoods: ['Back Bay', 'Beacon Hill', 'South End', 'North End', 'Charlestown', 'South Boston', 'Dorchester'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '67%'
      }
    ]
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    cities: [
      {
        slug: 'new-haven',
        name: 'New Haven',
        phone: '(203) 400-2032',
        epaStat: 'Coastal New England climates maintain elevated humidity levels. This feeds persistent spores within residential air returns, promoting biological layers on filter borders.',
        healthTrigger: 'Marine fungal blooms, heavy woodland tree pollen, and classic winter fuel soot.',
        serviceRadius: '20-mile radius covering New Haven, West Haven, Hamden, East Haven, Milford, and Branford.',
        neighborhoods: ['East Rock', 'Wooster Square', 'Downtown New Haven', 'Westville', 'Prospect Hill'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    cities: [
      {
        slug: 'philadelphia',
        name: 'Philadelphia',
        phone: '(215) 700-2152',
        epaStat: 'Urban particulate matter in Philadelphia blends with river humidity, creating a sticky coating on metal ducts that traps hair, dander, and pollen skeletons.',
        healthTrigger: 'Urban pollutants, river valley damp-mold vectors, and spring mulberry/ragweed allergen tides.',
        serviceRadius: '20-mile radius covering Philly Center, Cherry Hill (NJ), Upper Darby, King of Prussia, and Levittown.',
        neighborhoods: ['Rittenhouse Square', 'Fishtown', 'Northern Liberties', 'Old City', 'Passyunk Crossing', 'University City'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '66%'
      }
    ]
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    cities: [
      {
        slug: 'new-jersey',
        name: 'New Jersey (Newark Metro)',
        phone: '(201) 300-2012',
        epaStat: 'Dense housing configurations trap stagnant air. Industrial traffic creates a steady flow of fine particle soot that enters buildings and lines air passages.',
        healthTrigger: 'Heavy coastal humidity, industrial exhaust particulate, and garden state grass allergens.',
        serviceRadius: '25-mile radius covering Bergen County, Jersey City, Hoboken, Newark, Paterson, and Elizabeth.',
        neighborhoods: ['Hoboken Waterfront', 'Downtown Jersey City', 'Ironbound', 'Weehawken', 'Montclair', 'Ridgewood'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'utah',
    name: 'Utah',
    cities: [
      {
        slug: 'salt-lake-city',
        name: 'Salt Lake City',
        phone: '(385) 462-1032',
        epaStat: 'The SLC inversion traps particulate pollution in the valley. This pollution is pulled into residential heating and cooling systems, concentrating pollutants indoors as per EPA audits.',
        healthTrigger: 'Winter inversion soot, fine salt dust from the basin, and mountain cottonweed pollen.',
        serviceRadius: '25-mile radius covering Salt Lake City, Sandy, Provo, West Valley City, and Park City.',
        neighborhoods: ['Sugar House', 'The Avenues', 'Capitol Hill', 'Downtown SLC', 'Foothill', 'Harvard-Yale'],
        pollenLevel: 'High',
        wildfireRisk: 'Extreme',
        averageHumidity: '34%'
      }
    ]
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    cities: [
      {
        slug: 'atlanta',
        name: 'Atlanta',
        phone: '(404) 948-4544',
        epaStat: 'EPA data catalogs Atlanta as a major hotspot for biological air deposits. High canopy cover combines with excessive warmth to breed spores in attic ducts.',
        healthTrigger: 'Catastrophic spring pine pollen sweeps, high humidity mold spikes, and urban highway particulate.',
        serviceRadius: '25-mile radius covering Atlanta Metro, Marietta, Alpharetta, Decatur, Sandy Springs, and Roswell.',
        neighborhoods: ['Midtown', 'Buckhead', 'Inman Park', 'Virginia-Highland', 'Old Fourth Ward', 'Decatur Proper', 'Cabbagetown'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '72%'
      }
    ]
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    cities: [
      {
        slug: 'cleveland',
        name: 'Cleveland',
        phone: '(216) 400-2162',
        epaStat: 'Lake humidity and historic industrial residues combine in residential systems. Sealed winter homes suffer from elevated spore-counts due to lack of deep ventilation.',
        healthTrigger: 'Lake Erie mold spore cycles, seasonal rust/coal dust, and heavy autumn ragweed loads.',
        serviceRadius: '20-mile radius covering Cleveland, Lakewood, Shaker Heights, Cleveland Heights, and Westlake.',
        neighborhoods: ['Tremont', 'Ohio City', 'Detroit-Shoreway', 'University Circle', 'Kamms Corners'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '70%'
      }
    ]
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    cities: [
      {
        slug: 'kansas-city',
        name: 'Kansas City',
        phone: '(816) 300-8162',
        epaStat: 'Prairie winds carry heavy topsoil dust and grain particles. These components assemble in plenums and can cause sudden motor strain on HVAC blower fans.',
        healthTrigger: 'Agricultural dust sweeps, intense grass pollen fields, and extreme hot-to-cold thermal shifts.',
        serviceRadius: '25-mile radius covering Kansas City Metro, Overland Park, Olathe, Independence, and Shawnee.',
        neighborhoods: ['Country Club Plaza', 'Brookside', 'River Market', 'Westside', 'Crossroads District'],
        pollenLevel: 'High',
        wildfireRisk: 'Moderate',
        averageHumidity: '64%'
      }
    ]
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    cities: [
      {
        slug: 'saint-louis',
        name: 'Saint Louis',
        phone: '(314) 584-7476',
        epaStat: 'Mississippi Valley humectants promote indoor allergen development. Older brick homes with duct modifications require regular debris removal to prevent structural dust settling.',
        healthTrigger: 'River humidity dampness, sycamore tree spores, and localized urban soot blankets.',
        serviceRadius: '25-mile radius covering St. Louis, Clayton, Kirkwood, Webster Groves, and Chesterfield.',
        neighborhoods: ['Soulard', 'Central West End', 'The Hill', 'Lafayette Square', 'Tower Grove South'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '68%'
      }
    ]
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    cities: [
      {
        slug: 'phoenix',
        name: 'Phoenix',
        phone: '(602) 584-2645',
        epaStat: 'With air conditioners running almost non-stop, desert dust particles pass through standard fiberglass filters. This coats critical HVAC mechanical units.',
        healthTrigger: 'Severe Haboob dust storms, high pollen from ash and olive trees, and fine desert dander.',
        serviceRadius: '25-mile radius covering Phoenix, Scottsdale, Mesa, Tempe, Chandler, and Glendale.',
        neighborhoods: ['Arcadia', 'Biltmore', 'Roosevelt Row', 'Downtown Phoenix', 'North Central', 'Desert Ridge'],
        pollenLevel: 'High',
        wildfireRisk: 'Extreme',
        averageHumidity: '18%'
      }
    ]
  },
  {
    slug: 'florida',
    name: 'Florida',
    cities: [
      {
        slug: 'miami',
        name: 'Miami',
        phone: '(305) 500-3051',
        epaStat: 'The EPA categorizes Florida coastal properties as high risk zones for toxic mold. Indoor cooling units run constantly, condensing moisture inside ceiling ducts.',
        healthTrigger: 'Persistent tropical humidity, coastal spore colonies, and palm pollen cycles.',
        serviceRadius: '25-mile radius covering Miami, Fort Lauderdale, Coral Gables, Key Biscayne, and Hollywood.',
        neighborhoods: ['Coconut Grove', 'Wynwood', 'Brickell', 'Little Havana', 'Coral Gables', 'Design District'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '78%'
      },
      {
        slug: 'jacksonville',
        name: 'Jacksonville',
        phone: '(904) 700-9041',
        epaStat: 'A mix of humid sea breezes and swampland moisture can generate organic growth in vents. Regular mechanical sweeping is critical to maintaining air quality.',
        healthTrigger: 'Salt-air moisture combined with marsh grass spores and pine tree allergens.',
        serviceRadius: '25-mile radius covering Jacksonville, Jax Beach, Ponte Vedra, Orange Park, and St. Augustine.',
        neighborhoods: ['Riverside', 'Avondale', 'San Marco', 'Springfield', 'Ponte Vedra Beach'],
        pollenLevel: 'High',
        wildfireRisk: 'Moderate',
        averageHumidity: '74%'
      },
      {
        slug: 'tampa',
        name: 'Tampa',
        phone: '(813) 600-8132',
        epaStat: 'Warm bay systems drive continuous relative humidity above 75%. Air systems compile organic deposits on localized supply grills that must be thoroughly scrubbed.',
        healthTrigger: 'Gulf moss particulates, tropical mold growth patterns, and heavy grass allergen releases.',
        serviceRadius: '25-mile radius covering Tampa, St. Petersburg, Clearwater, Brandon, and Riverview.',
        neighborhoods: ['Ybor City', 'Hyde Park', 'Seminole Heights', 'Davis Islands', 'Tampa Heights'],
        pollenLevel: 'High',
        wildfireRisk: 'Moderate',
        averageHumidity: '76%'
      },
      {
        slug: 'sarasota',
        name: 'Sarasota',
        phone: '(941) 400-9412',
        epaStat: 'The EPA advises coastal residents to inspect ducts after heavy storms. Seawater vapor carries organic compounds that build up in HVAC systems.',
        healthTrigger: 'Sustained coastal humidity, windblown bay micro-spores, and sudden sand dander.',
        serviceRadius: '20-mile radius covering Sarasota, Bradenton, Venice, Longboat Key, and Lakewood Ranch.',
        neighborhoods: ['St. Armands', 'Siesta Key', 'Gillespie Park', 'Southside Village', 'Laurel Park'],
        pollenLevel: 'Moderate',
        wildfireRisk: 'Low',
        averageHumidity: '75%'
      },
      {
        slug: 'naples',
        name: 'Naples',
        phone: '(239) 900-2394',
        epaStat: 'Luxury beachfront properties face significant organic growth challenges from indoor mold. Humidity can bypass standard air filtration setups unless ductwork is sealed.',
        healthTrigger: 'Marsh fungal moisture, intense palm and cypress allergens, and seasonal organic dust drafts.',
        serviceRadius: '20-mile radius covering Naples, Marco Island, Bonita Springs, and Estero.',
        neighborhoods: ['Port Royal', 'Old Naples', 'Park Shore', 'Pelican Bay', 'Moorings'],
        pollenLevel: 'Moderate',
        wildfireRisk: 'Low',
        averageHumidity: '74%'
      },
      {
        slug: 'fort-lauderdale',
        name: 'Fort Lauderdale',
        phone: '(954) 300-9541',
        epaStat: 'Canal moisture encourages mold development on fiberglass duct liners. This can distribute dust-mite particles when systems are activated.',
        healthTrigger: 'Intense water-vapor mold, tropical palm spores, and continuous vehicle soot.',
        serviceRadius: '20-mile radius covering Fort Lauderdale, Pompano Beach, Davie, Sunrise, and Weston.',
        neighborhoods: ['Las Olas', 'Victoria Park', 'Colee Hammock', 'Sailboat Bend', 'Coral Ridge'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '76%'
      },
      {
        slug: 'orlando',
        name: 'Orlando',
        phone: '(407) 800-4074',
        epaStat: 'Inland Florida heat drives continuous biological accumulation. Debris piles inside mechanical returns and creates a breeding ground for allergens.',
        healthTrigger: 'Oak and pine pollen clouds, central swamp humectants, and artificial carpet fibers from hotels/recreation hubs.',
        serviceRadius: '25-mile radius covering Orlando, Winter Park, Kissimmee, Windermere, Sanford, and Lake Nona.',
        neighborhoods: ['Thornton Park', 'Baldwin Park', 'Lake Eola Heights', 'College Park', 'Delaney Park'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'Moderate',
        averageHumidity: '72%'
      },
      {
        slug: 'fort-myers',
        name: 'Fort Myers',
        phone: '(239) 900-2394', // Shared area code with Naples
        epaStat: 'Warm river drafts trigger biological condensation in attics. These conditions promote rapid mold spores on duct connections.',
        healthTrigger: 'River estuary spores, dense palm pollen, and mold counts triggered by tropical rains.',
        serviceRadius: '20-mile radius covering Fort Myers, Cape Coral, Fort Myers Beach, and Sanibel.',
        neighborhoods: ['McGregor Boulevard', 'River District', 'Fort Myers Shores', 'Whiskey Creek'],
        pollenLevel: 'High',
        wildfireRisk: 'Low',
        averageHumidity: '75%'
      }
    ]
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    cities: [
      {
        slug: 'oklahoma-city',
        name: 'Oklahoma City',
        phone: '(405) 300-4052',
        epaStat: 'Oklahoma wind carries agricultural and red-dirt particulate for miles. This fine grit can penetrate return air ducts, causing potential mechanical wear.',
        healthTrigger: 'Fine red soil dust sweeps, dry grass pollen, and ragweed blooms.',
        serviceRadius: '25-mile radius covering OKC Metro, Edmond, Norman, Moore, Yukon, and Midwest City.',
        neighborhoods: ['The Paseo', 'Mesta Park', 'Plaza District', 'Midtown OKC', 'Nichols Hills', 'Deep Deuce'],
        pollenLevel: 'Extreme',
        wildfireRisk: 'High',
        averageHumidity: '55%'
      }
    ]
  }
];
