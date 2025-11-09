// Total materials: 613
const MATERIALS_DATA = [
  {price: 1.21, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '1-1/4"', partId: 'PVC114COUP'},
  {price: 0.25, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '1-1/2"', partId: 'PVC112COUP'},
  {price: 0.35, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '2"', partId: 'PVC2COUP'},
  {price: 1.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '3"', partId: 'PVC3COUP'},
  {price: 2.04, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '4"', partId: 'PVC4COUP'},
  {price: 6.44, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '6"', partId: 'PVC6COUP'},
  {price: 11.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '8"', partId: 'PVC8COUP'},
  {price: 26.88, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '10"', partId: 'PVC10COUP'},
  {price: 45.78, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COUPLING (H X H)', size: '12"', partId: 'PVC12COUP'},
  {price: 2.68, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '1-1/4"', partId: 'PVC114FA'},
  {price: 0.48, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '1-1/2"', partId: 'PVC112FA'},
  {price: 0.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '2"', partId: 'PVC2FA'},
  {price: 2.18, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '3"', partId: 'PVC3FA'},
  {price: 2.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '4"', partId: 'PVC4FA'},
  {price: 9.09, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '6"', partId: 'PVC6FA'},
  {price: 20.08, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FEMALE ADAPTER (FPT X H)', size: '8"', partId: 'PVC8FA'},
  {price: 1.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '1-1/2"×1-1/4"', partId: 'PVC112114BELL'},
  {price: 0.77, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '2"×1-1/2"', partId: 'PVC2112BELL'},
  {price: 1.74, bestHouse: 'Texas Plumbing Supply', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '3"×1-1/2"', partId: 'PVC3112BELL'},
  {price: 1.75, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '3"×2"', partId: 'PVC32BELL'},
  {price: 2.86, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '4"×1-1/2"', partId: 'PVC4112BELL'},
  {price: 3.44, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '4"×2"', partId: 'PVC42BELL'},
  {price: 3.68, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '4"×3"', partId: 'PVC43BELL'},
  {price: 14.31, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '6"×4"', partId: 'PVC64BELL'},
  {price: 19.92, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '8"×4"', partId: 'PVC84BELL'},
  {price: 16.01, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '8"×6"', partId: 'PVC86BELL'},
  {price: 37.93, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '10"×4"', partId: 'PVC104BELL'},
  {price: 54.99, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '10"×6"', partId: 'PVC106BELL'},
  {price: 40.33, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '10"×8"', partId: 'PVC108BELL'},
  {price: 70.57, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '12"×8"', partId: 'PVC128BELL'},
  {price: 74.09, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'PIPE INCREASER-REDUCER (H X H)', size: '12"×10"', partId: 'PVC1210BELL'},
  {price: 1.11, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '1-1/4"', partId: 'PVC114CAWP'},
  {price: 1.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '1-1/2"', partId: 'PVC112CAWP'},
  {price: 1.29, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '2"', partId: 'PVC2CAWP'},
  {price: 3.1, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '3"', partId: 'PVC3CAWP'},
  {price: 4.94, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '4"', partId: 'PVC4CAWP'},
  {price: 14.43, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FITTING CLEANOUT ADAPTER W/ C.O. PLUG (S X FPT)', size: '6"', partId: 'PVC6CAWP'},
  {price: 0.59, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '1-1/4"', partId: 'PVC114PLUG'},
  {price: 0.45, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '1-1/2"', partId: 'PVC112PLUG'},
  {price: 0.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '2"', partId: 'PVC2PLUG'},
  {price: 0.91, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '3"', partId: 'PVC3PLUG'},
  {price: 1.34, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '4"', partId: 'PVC4PLUG'},
  {price: 4.27, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '6"', partId: 'PVC6PLUG'},
  {price: 19.34, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT PLUG（MPT）', size: '8"', partId: 'PVC8PLUG'},
  {price: 1.01, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '1-1/2"×1-1/4"', partId: 'PVC112114BUSH'},
  {price: 1.16, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '2"×1-1/4"', partId: 'PVC2114BUSH'},
  {price: 0.44, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '2"×1-1/2"', partId: 'PVC2112BUSH'},
  {price: 2.11, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '3"×1-1/2"', partId: 'PVC3112BUSH'},
  {price: 1.11, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '3"×2"', partId: 'PVC32BUSH'},
  {price: 3.67, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '4"×2"', partId: 'PVC42BUSH'},
  {price: 1.89, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '4"×3"', partId: 'PVC43BUSH'},
  {price: 8.9, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '6"×3"', partId: 'PVC63BUSH'},
  {price: 9.43, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '6"×4"', partId: 'PVC64BUSH'},
  {price: 17.02, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '8"×4"', partId: 'PVC84BUSH'},
  {price: 18.47, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '8"×6"', partId: 'PVC86BUSH'},
  {price: 33.39, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '10"×6"', partId: 'PVC106BUSH'},
  {price: 34.41, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '10"×8"', partId: 'PVC108BUSH'},
  {price: 57.35, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '12"×6"', partId: 'PVC126BUSH'},
  {price: 60.22, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'FLUSH BUSHING (S X H)', size: '12"×8"', partId: 'PVC128BUSH'},
  {price: 1.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '1-1/4"', partId: 'PVC114MA'},
  {price: 0.48, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '1-1/2"', partId: 'PVC112MA'},
  {price: 0.65, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '2"', partId: 'PVC2MA'},
  {price: 1.81, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '3"', partId: 'PVC3MA'},
  {price: 4.09, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '4"', partId: 'PVC4MA'},
  {price: 12.31, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '6"', partId: 'PVC6MA'},
  {price: 0.7, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'MALE ADAPTER (MPT X H)', size: '1-1/4"×1-1/2"', partId: 'PVC114112MA'},
  {price: 0.9, bestHouse: 'Texas Plumbing Supply', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '1-1/2"', partId: 'PVC112TC'},
  {price: 1.07, bestHouse: 'Texas Plumbing Supply', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '2"', partId: 'PVC2TC'},
  {price: 2.85, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '3"', partId: 'PVC3YC'},
  {price: 4.07, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '4"', partId: 'PVC4TC'},
  {price: 10.27, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '6"', partId: 'PVC6TC'},
  {price: 27.6, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '8"', partId: 'PVC8TC'},
  {price: 34.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '10"', partId: 'PVC10TC'},
  {price: 43.65, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CAP (SOC)', size: '12"', partId: 'PVC12TC'},
  {price: 1.88, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '1-1/4"', partId: 'PVC11290'},
  {price: 0.54, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '1-1/2"', partId: 'PVC11290'},
  {price: 0.84, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '2"', partId: 'PVC290'},
  {price: 2.48, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '3"', partId: 'PVC390'},
  {price: 4.89, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '4"', partId: 'PVC490'},
  {price: 16.52, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '6"', partId: 'PVC690'},
  {price: 22.32, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND (H X H)', size: '8"', partId: 'PVC890'},
  {price: 3.05, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '1-1/4"', partId: 'PVC114S90'},
  {price: 0.69, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '1-1/2"', partId: 'PVC112S90'},
  {price: 1.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '2"', partId: 'PVC2S90'},
  {price: 2.97, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '3"', partId: 'PVC3S90'},
  {price: 4.98, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '4"', partId: 'PVC4S90'},
  {price: 22.29, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '6"', partId: 'PVC6S90'},
  {price: 41.74, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/4 BEND, STREET (S X H)', size: '8"', partId: 'PVC8S90'},
  {price: 1.24, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND (H X H)', size: '1-1/2"', partId: 'PVC112LS90'},
  {price: 1.38, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND (H X H)', size: '2"', partId: 'PVC2LS90'},
  {price: 3.19, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND (H X H)', size: '3"', partId: 'PVC3LS90'},
  {price: 6.05, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND (H X H)', size: '4"', partId: 'PVC4LS90'},
  {price: 23.63, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND (H X H)', size: '6"', partId: 'PVC6LS90'},
  {price: 1.92, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND, STREET (H X S)', size: '1-1/2"', partId: 'PVC112LSS90'},
  {price: 2.29, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND, STREET (H X S)', size: '2"', partId: 'PVC2LSS90'},
  {price: 5.71, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND, STREET (H X S)', size: '3"', partId: 'PVC3LSS90'},
  {price: 8.8, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'LONG SWEEP 1/4 BEND, STREET (H X S)', size: '4"', partId: 'PVC4LSS90'},
  {price: 1.28, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '1-1/4"', partId: 'PVC11445'},
  {price: 0.52, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '1-1/2"', partId: 'PVC11245'},
  {price: 0.78, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '2"', partId: 'PVC245'},
  {price: 2.22, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '3"', partId: 'PVC345'},
  {price: 3.89, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '4"', partId: 'PVC445'},
  {price: 15.14, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '6"', partId: 'PVC645'},
  {price: 19.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND (H X H)', size: '8"', partId: 'PVC845'},
  {price: 1.75, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '1-1/4"', partId: 'PVC114S45'},
  {price: 0.5, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '1-1/2"', partId: 'PVC112S45'},
  {price: 0.8, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '2"', partId: 'PVC2S45'},
  {price: 2.1, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '3"', partId: 'PVC3S45'},
  {price: 3.61, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '4"', partId: 'PVC4S45'},
  {price: 17.93, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '6"', partId: 'PVC6S45'},
  {price: 21.52, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '8"', partId: 'PVC8S45'},
  {price: 53.81, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/8 BEND, STREET (H X S)', size: '10"', partId: 'PVC10S45'},
  {price: 0.71, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '1-1/2"', partId: 'PVC11222'},
  {price: 0.88, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '2"', partId: 'PVC222'},
  {price: 2.19, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '3"', partId: 'PVC322'},
  {price: 3.46, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '4"', partId: 'PVC422'},
  {price: 19.99, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '6"', partId: 'PVC622'},
  {price: 33.09, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '8"', partId: 'PVC822'},
  {price: 51.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '10"', partId: 'PVC1022'},
  {price: 82.42, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND (H X H)', size: '12"', partId: 'PVC1222'},
  {price: 2.02, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND, STREET (H X S)', size: '1-1/2"', partId: 'PVC112S22'},
  {price: 2.16, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND, STREET (H X S)', size: '2"', partId: 'PVC2S22'},
  {price: 3.39, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND, STREET (H X S)', size: '3"', partId: 'PVC3S22'},
  {price: 4.92, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND, STREET (H X S)', size: '4"', partId: 'PVC4S22'},
  {price: 19.37, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '1/16 BEND, STREET (H X S)', size: '6"', partId: 'PVC6S22'},
  {price: 3.99, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLOSET BEND, REDUCING (H X H）', size: '4"x3"', partId: 'PVC4390'},
  {price: 2.01, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '1-1/4"', partId: 'PVC114T'},
  {price: 0.93, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '1-1/2"', partId: 'PVC112T'},
  {price: 1.37, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '2"', partId: 'PVC2T'},
  {price: 3.62, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '3"', partId: 'PVC3T'},
  {price: 6.65, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '4"', partId: 'PVC4T'},
  {price: 26.7, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '6"', partId: 'PVC6T'},
  {price: 59.16, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE (ALL HUB)', size: '8"', partId: 'PVC8T'},
  {price: 1.71, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '1-1/2×1-1/2×1-1/4"', partId: 'PVC112114T'},
  {price: 1.21, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '2×1-1/2×1-1/2"', partId: 'PVC2112112T'},
  {price: 1.21, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '2×2×1-1/2"', partId: 'PVC2112T'},
  {price: 1.47, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '2×1-1/2×2"', partId: 'PVC21122T'},
  {price: 2.64, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '3×3×1-1/2"', partId: 'PVC33112T'},
  {price: 2.72, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '3×3×2"', partId: 'PVC32T'},
  {price: 6.97, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '4×4×1-1/2"', partId: 'PVC4112T'},
  {price: 5.72, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '4×4×2"', partId: 'PVC42T'},
  {price: 7.78, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '4×4×3"', partId: 'PVC43T'},
  {price: 28.74, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '6×6×2"', partId: 'PVC62T'},
  {price: 31.55, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '6×6×3"', partId: 'PVC63T'},
  {price: 25.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING SANITARY TEE (ALL HUB)', size: '6×6×4"', partId: 'PVC64T'},
  {price: 2.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET (S X H X H)', size: '1-1/2"', partId: 'PVC112ST'},
  {price: 2.73, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET (S X H X H)', size: '2"', partId: 'PVC2ST'},
  {price: 4.56, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET (S X H X H)', size: '3"', partId: 'PVC3ST'},
  {price: 11.5, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET (S X H X H)', size: '4"', partId: 'PVC4ST'},
  {price: 2.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '2×1-1/2×1-1/2"', partId: 'PVC2112112ST'},
  {price: 2.15, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '2×1-1/2×2"', partId: 'PVC21122ST'},
  {price: 2.41, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '2×2×1-1/2"', partId: 'PVC2112ST'},
  {price: 5.24, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '3×3×1-1/2"', partId: 'PVC3112ST'},
  {price: 4.5, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '3×3×2"', partId: 'PVC32ST'},
  {price: 8.55, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE, STREET, REDUCING (S X H X H)', size: '4×4×2"', partId: 'PVC42ST'},
  {price: 7.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE W/ LEFT SIDE INLET (ALL HUB)', size: '3×3×3×2"', partId: 'PVC32SOTL'},
  {price: 7.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'SANITARY TEE W/ RIGHT SIDE INLET (ALL HUB)', size: '3×3×3×2"', partId: 'PVC32SOTR'},
  {price: 2.07, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE (ALL HUB)', size: '1-1/2"', partId: 'PVC112DT'},
  {price: 2.8, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE (ALL HUB)', size: '2"', partId: 'PVC2DT'},
  {price: 7.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE (ALL HUB)', size: '3"', partId: 'PVC3DT'},
  {price: 12.58, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE (ALL HUB)', size: '4"', partId: 'PVC4DT'},
  {price: 57.67, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE (ALL HUB)', size: '6"', partId: 'PVC6DT'},
  {price: 2.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '2×2×1-1/2×1-1/2"', partId: 'PVC2112DT'},
  {price: 4.38, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '3×3×2×1-1/2"', partId: 'PVC32112DT'},
  {price: 5.08, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '3×3×1-1/2×1-1/2"', partId: 'PVC3112DT'},
  {price: 5.52, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '3×3×2×2"', partId: 'PVC32DT'},
  {price: 16.78, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '4×4×1-1/2×1-1/2"', partId: 'PVC4112DT'},
  {price: 10.4, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '4×4×2×2"', partId: 'PVC42DT'},
  {price: 10.8, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '4×4×3×3"', partId: 'PVC43DT'},
  {price: 41.63, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '6×6×2×2"', partId: 'PVC62DT'},
  {price: 43.61, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '6×6×3×3"', partId: 'PVC63DT'},
  {price: 45.28, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE SANITARY TEE, REDUCING (ALL HUB）', size: '6×6×4×4"', partId: 'PVC64DT'},
  {price: 2.36, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '1-1/2"', partId: 'PVC112COTWP'},
  {price: 2.73, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '2"', partId: 'PVC2COTWP'},
  {price: 5.23, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '3"', partId: 'PVC3COTWP'},
  {price: 9.04, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '4"', partId: 'PVC4COTWP'},
  {price: 43.4, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '6"', partId: 'PVC6COTWP'},
  {price: 86.08, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'CLEANOUT TEE W/ C.O. PLUG (H X H)', size: '8"', partId: 'PVC8COTWP'},
  {price: 8.38, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '2-WAY CLEANOUT (ALL HUB)', size: '3"', partId: 'PVC32WCO'},
  {price: 10.85, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: '2-WAY CLEANOUT (ALL HUB)', size: '4"', partId: 'PVC42WCO'},
  {price: 4.76, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '2×2×2×2"', partId: 'PVC2DF'},
  {price: 10.28, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '3×3×3×3"', partId: 'PVC3DF'},
  {price: 5.86, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '2×1-1/2×1-1/2×1-1/2"', partId: 'PVC2112112DF'},
  {price: 5.47, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '2×2×1-1/2×1-1/2"', partId: 'PVC22112DF'},
  {price: 3.8, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '2×1-1/2×2×2"', partId: 'PVC21122DF'},
  {price: 11.41, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'DOUBLE FIXTURE FITTING (ALL HUB)', size: '3×2×3×3"', partId: 'PVC323DF'},
  {price: 2.28, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND (ONE PIECE) (All HUB)', size: '1-1/2"', partId: 'PVC112COMBO'},
  {price: 2.83, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND (ONE PIECE) (All HUB)', size: '2"', partId: 'PVC2COMBO'},
  {price: 6.23, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND (ONE PIECE) (All HUB)', size: '3"', partId: 'PVC3COMBO'},
  {price: 12.34, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND (ONE PIECE) (All HUB)', size: '4"', partId: 'PVC4COMBO'},
  {price: 4.37, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '2×1-1/2×1-1/2"', partId: 'PVC2112112COMBO'},
  {price: 3.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '2×2×1-1/2"', partId: 'PVC2112COMBO'},
  {price: 3.05, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '2×1-1/2×2"', partId: 'PVC21122COMBO'},
  {price: 5.71, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '3×3×1-1/2"', partId: 'PVC3112COMBO'},
  {price: 4.25, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '3×3×2"', partId: 'PVC32COMBO'},
  {price: 6.45, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '4×4×2"', partId: 'PVC42COMBO'},
  {price: 8.31, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'COMBINATION WYE AND 1/8 BEND, REDUCING (ONE PIECE) (All HUB)', size: '4×4×3"', partId: 'PVC43COMBO'},
  {price: 2.57, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '1-1/4"', partId: 'PVC114WYE'},
  {price: 1.71, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '1-1/2"', partId: 'PVC112WYE'},
  {price: 1.68, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '2"', partId: 'PVC2WYE'},
  {price: 4.52, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '3"', partId: 'PVC3WYE'},
  {price: 8.22, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '4"', partId: 'PVC4WYE'},
  {price: 23.88, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '6"', partId: 'PVC6WYE'},
  {price: 42.1, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'WYE (ALL HUB)', size: '8"', partId: 'PVC8WYE'},
  {price: 2.36, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '2×1-1/2×1-1/2"', partId: 'PVC2112112WYE'},
  {price: 2.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '2×2×1-1/2"', partId: 'PVC2112WYE'},
  {price: 3.65, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '2×1-1/2×2"', partId: 'PVC21122WYE'},
  {price: 3.05, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '3×3×1-1/2"', partId: 'PVC3112WYE'},
  {price: 3.34, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '3×3×2"', partId: 'PVC32WYE'},
  {price: 10.55, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '4×4×1-1/2"', partId: 'PVC4112WYE'},
  {price: 4.95, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '4×4×2"', partId: 'PVC42WYE'},
  {price: 6.68, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '4×4×3"', partId: 'PVC43WYE'},
  {price: 25.06, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '6×6×2"', partId: 'PVC62WYE'},
  {price: 23.2, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '6×6×3"', partId: 'PVC63WYE'},
  {price: 19.21, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '6×6×4"', partId: 'PVC64WYE'},
  {price: 40.51, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '8×8×4"', partId: 'PVC84WYE'},
  {price: 41.77, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '8×8×6"', partId: 'PVC86WYE'},
  {price: 52.9, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'REDUCING WYE ALL HUB）', size: '10×10×4"', partId: 'PVC104WYE'},
  {price: 1.14, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'P-TRAP, LOW PROFILE (H X H)', size: '1-1/2"', partId: 'PVC112PT'},
  {price: 2.87, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'P-TRAP, LOW PROFILE (H X H)', size: '2"', partId: 'PVC2PT'},
  {price: 8.22, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'P-TRAP, LOW PROFILE (H X H)', size: '3"', partId: 'PVC3PT'},
  {price: 18.75, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'P-TRAP, LOW PROFILE (H X H)', size: '4"', partId: 'PVC4PT'},
  {price: 57.82, bestHouse: 'Texas Wholesale', make: 'Lesso', model: 'DWV Fitting', detail: 'P-TRAP, LOW PROFILE (H X H)', size: '6"', partId: 'PVC6PT'},
  {price: 0.46, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX CPLG CSA "BULK"', size: '1/2"', partId: 'XP12COUP'},
  {price: 0.76, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX CPLG CSA "BULK"', size: '3/4\'"', partId: 'XP34COUP'},
  {price: 1.45, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX CPLG CSA', size: '1"', partId: 'XP1COUP'},
  {price: 0.61, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX CPLG CSA', size: '3/4"x1/2"', partId: 'XP3412COUP'},
  {price: 1.31, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX CPLG CSA', size: '1"x3/4"', partId: 'XP134COUP'},
  {price: 0.66, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX 90 ELBOW CSA "BULK"', size: '1/2"', partId: 'XP1290'},
  {price: 1.31, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX 90 ELBOW CSA "BULK"', size: '3/4"', partId: 'XP3490'},
  {price: 2.9, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX 90 ELBOW CSA', size: '1"', partId: 'XP190'},
  {price: 1.13, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX X MIPS 90 ELBOW CSA', size: '1/2"', partId: 'XP12MA90'},
  {price: 2.07, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX X MIPS 90 ELBOW CSA', size: '3/4"', partId: 'XP34MA90'},
  {price: 0.89, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA "BULK"', size: '1/2"', partId: 'XP12T'},
  {price: 1.83, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA "BULK"', size: '3/4"', partId: 'XP34T'},
  {price: 3.74, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1"', partId: 'XP1T'},
  {price: 1.48, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA"BULK"', size: '3/4"x3/4"x1/2"', partId: 'XP3412T'},
  {price: 1.48, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA"BULK"', size: '3/4"x1/2"x3/4"', partId: 'XP341234T'},
  {price: 1.19, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA"BULK"', size: '3/4"x1/2"1/2"', partId: 'XP341212T'},
  {price: 1.19, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1/2"x1/2"x3/4"', partId: 'XP1234T'},
  {price: 2.9, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1"x1"x3/4"', partId: 'XP134T'},
  {price: 2.77, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1"x1"x1/2"', partId: 'XP112T'},
  {price: 3.95, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1"x3/4"x1"', partId: 'XP1341T'},
  {price: 3.04, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX TEE CSA', size: '1"x3/4"x3/4"', partId: 'XP13434T'},
  {price: 0.41, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX PLUG CSA "BULK"', size: '1/2"', partId: 'XP12PLUG'},
  {price: 0.67, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX PLUG CSA "BULK"', size: '3/4"', partId: 'XP34PLUG'},
  {price: 1.06, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEX PLUG CSA', size: '1"', partId: 'XP1PLUG'},
  {price: 1.13, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEXxMIPS ADAPTER CSA', size: '1/2"', partId: 'XP12MA'},
  {price: 1.45, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEXxMIPS ADAPTER CSA', size: '3/4"', partId: 'XP34MA'},
  {price: 2.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEXxMIPS ADAPTER CSA', size: '1"', partId: 'XP1MA'},
  {price: 1.31, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEXxMIPS ADAPT.CSA', size: '1/2"x3/4"', partId: 'XP1234MA'},
  {price: 1.31, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Fitting', detail: 'POLY-ALLOY PEXxMIPS ADAPT.CSA', size: '3/4"x1/2"', partId: 'XP3412MA'},
  {price: 3.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT RED', size: '1/2"', partId: 'X1210STICKR'},
  {price: 7.36, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT RED', size: '1/2"', partId: 'X1220STICKR'},
  {price: 34.26, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL RED', size: '1/2"', partId: 'X12100R'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL RED', size: '1/2"', partId: 'X12300R'},
  {price: 171.33, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL RED', size: '1/2"', partId: 'X12500R'},
  {price: 6.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT RED', size: '3/4"', partId: 'X3410STICKR'},
  {price: 13.78, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT RED', size: '3/4"', partId: 'X3420STICKR'},
  {price: 64.25, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL RED', size: '3/4"', partId: 'X34100R'},
  {price: 192.74, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL RED', size: '3/4"', partId: 'X34300R'},
  {price: 321.23, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL RED', size: '3/4"', partId: 'X34500R'},
  {price: 22.06, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT RED', size: '1"', partId: 'X120STICKR'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL RED', size: '1"', partId: 'X1100R'},
  {price: 308.38, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL RED', size: '1"', partId: 'X1300R'},
  {price: 3.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT BLUE', size: '1/2"', partId: 'X1210STICKB'},
  {price: 7.36, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT BLUE', size: '1/2"', partId: 'X1220STICKB'},
  {price: 34.26, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL BLUE', size: '1/2"', partId: 'X12100B'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL BLUE', size: '1/2"', partId: 'X12300B'},
  {price: 171.33, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL BLUE', size: '1/2"', partId: 'X12500B'},
  {price: 6.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT BLUE', size: '3/4"', partId: 'X3410STICKB'},
  {price: 13.78, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT BLUE', size: '3/4"', partId: 'X3420STICKB'},
  {price: 64.25, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL BLUE', size: '3/4"', partId: 'X34100B'},
  {price: 192.74, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL BLUE', size: '3/4"', partId: 'X34300B'},
  {price: 321.23, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL BLUE', size: '3/4"', partId: 'X34500B'},
  {price: 22.06, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT BLUE', size: '1"', partId: 'X120STICKB'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL BLUE', size: '1"', partId: 'X1100B'},
  {price: 308.38, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL BLUE', size: '1"', partId: 'X1300B'},
  {price: 513.96, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL BLUE', size: '1"', partId: 'X1500B'},
  {price: 3.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT WHITE', size: '1/2"', partId: 'X1210STICKW'},
  {price: 7.36, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT WHITE', size: '1/2"', partId: 'X1220STICKW'},
  {price: 34.26, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL WHITE', size: '1/2"', partId: 'X12100W'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL WHITE', size: '1/2"', partId: 'X12300W'},
  {price: 171.33, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL WHITE', size: '1/2"', partId: 'X12500W'},
  {price: 6.43, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT WHITE', size: '3/4"', partId: 'X3410STICKW'},
  {price: 13.78, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT WHITE', size: '3/4"', partId: 'X3420STICKW'},
  {price: 64.25, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL WHITE', size: '3/4"', partId: 'X34100W'},
  {price: 192.74, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL WHITE', size: '3/4"', partId: 'X34300W'},
  {price: 321.23, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '500\' COIL WHITE', size: '3/4"', partId: 'X34500W'},
  {price: 10.29, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '10\' STRAIGHT WHITE', size: '1"', partId: 'X110STICKW'},
  {price: 22.06, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '20\' STRAIGHT WHITE', size: '1"', partId: 'X120STICKW'},
  {price: 102.79, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '100\' COIL WHITE', size: '1"', partId: 'X1100W'},
  {price: 308.38, bestHouse: 'Texas Wholesale', make: 'Everflow', model: 'PEX Poly Pipe', detail: '300\' COIL WHITE', size: '1"', partId: 'X1300W'},
  {price: 0.56, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1/2"', partId: 'B12COUP'},
  {price: 0.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '3/4"', partId: 'B34COUP'},
  {price: 1.04, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1"', partId: 'B1COUP'},
  {price: 1.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/4"', partId: 'B114COUP'},
  {price: 3.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/2"', partId: 'B112COUP'},
  {price: 4.86, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"', partId: 'B2COUP'},
  {price: 1.13, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1/2"x3/8"', partId: 'B1238RED'},
  {price: 1.19, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1/2"x1/4"', partId: 'B1214RED'},
  {price: 1.29, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1/2"x1/8"', partId: 'B1218RED'},
  {price: 0.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '3/4"x1/2"', partId: 'B3412RED'},
  {price: 1.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '3/4"x3/8"', partId: 'B3438RED'},
  {price: 0.77, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '3/4"x1/4"', partId: 'B3414RED'},
  {price: 1.51, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '3/4"x1/8"', partId: 'B3418RED'},
  {price: 1.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1"x3/4"', partId: 'B134RED'},
  {price: 1.07, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1"x1/2"', partId: 'B1X12RED'},
  {price: 2.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1"x1/8"', partId: 'B118RED'},
  {price: 1.18, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: '', size: '1"x1/4"', partId: 'B1X14RED'},
  {price: 1.52, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/4"x1"', partId: 'B1141RED'},
  {price: 1.58, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/4"x3/4"', partId: 'B11434RED'},
  {price: 1.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/4"x1/2"', partId: 'B11412RED'},
  {price: 3.15, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/2"x1-1/4"', partId: 'B112114RED'},
  {price: 3.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/2"x1"', partId: 'B1121RED'},
  {price: 4.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/2"x3/4"', partId: 'B11234RED'},
  {price: 3.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '1-1/2"x1/2"', partId: 'B11212RED'},
  {price: 4.58, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"x1-1/2"', partId: 'B2112RED'},
  {price: 5.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"x1-1/4"', partId: 'B2114RED'},
  {price: 4.96, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"x1"', partId: 'B21RED'},
  {price: 5.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"x3/4"', partId: 'B234RED'},
  {price: 5.96, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK COUPLING', size: '2"x1/2"', partId: 'B212RED'},
  {price: 3.22, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK EXTENTION PIECE', size: '1/2"', partId: 'B12EXT'},
  {price: 2.6, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '1/2"', partId: 'B12U'},
  {price: 3.31, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '3/4"', partId: 'B34U'},
  {price: 3.88, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '1"', partId: 'B1U'},
  {price: 7.84, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '1-1/4"', partId: 'B114U'},
  {price: 10.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '1-1/2"', partId: 'B112U'},
  {price: 15.68, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK UNION', size: '2"', partId: 'B2U'},
  {price: 1.44, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1/2"x3/8"', partId: 'B1238BUSH'},
  {price: 1.44, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1/2"x1/4"', partId: 'B1214BUSH'},
  {price: 1.44, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1/2"x1/8"', partId: 'B1218BUSH'},
  {price: 1.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '3/4"x1/2"', partId: 'B3412BUSH'},
  {price: 1.41, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '3/4"x3/8"', partId: 'B3438BUSH'},
  {price: 1.41, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '3/4"x1/4"', partId: 'B3414BUSH'},
  {price: 1.41, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '3/4"x1/8"', partId: 'B3418BUSH'},
  {price: 1.35, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1"x3/4"', partId: 'B134BUSH'},
  {price: 1.35, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1"x1/2"', partId: 'B112BUSH'},
  {price: 1.8, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1"x3/8"', partId: 'B138BUSH'},
  {price: 1.75, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1"x1/4"', partId: 'B114BUSH'},
  {price: 1.64, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1"x1/8"', partId: 'B118BUSH'},
  {price: 1.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1-1/4"x1"', partId: 'B1141BUSH'},
  {price: 1.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1-1/4"x3/4"', partId: 'B11434BUSH'},
  {price: 1.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/4"x1/2"', partId: 'B11412BUSH'},
  {price: 2.02, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/4"x3/8"', partId: 'B11438BUSH'},
  {price: 2.27, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/4"x1/4"', partId: 'B11414BUSH'},
  {price: 2.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1-1/2"x1-1/4"', partId: 'B112114BUSH'},
  {price: 1.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '1-1/2"x1"', partId: 'B1121BUSH'},
  {price: 2.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/2"x3/4"', partId: 'B11234BUSH'},
  {price: 2.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/2"x1/2"', partId: 'B11212BUSH'},
  {price: 2.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/2"x3/8"', partId: 'B11238BUSH'},
  {price: 2.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '1-1/2"x1/4"', partId: 'B11214BUSH'},
  {price: 3.76, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '2"x1/4"', partId: 'B214BUSH'},
  {price: 2.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '2"x1-1/2"', partId: 'B2112BUSH'},
  {price: 2.63, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXO BUSHING', size: '2"x1-1/4"', partId: 'B2114BUSH'},
  {price: 2.63, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '2"x1"', partId: 'B21BUSH'},
  {price: 2.8, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '2"x3/4"', partId: 'B234BUSH'},
  {price: 3.31, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '2"x1/2"', partId: 'B212BUSH'},
  {price: 3.76, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK HEXI BUSHING', size: '2"x3/8"', partId: 'B238BUSH'},
  {price: 1.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '1/2"', partId: 'B1245'},
  {price: 1.61, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '3/4"', partId: 'B3445'},
  {price: 2.05, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '1"', partId: 'B145'},
  {price: 3.58, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '1-1/4"', partId: 'B11445'},
  {price: 4.42, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '1-1/2"', partId: 'B11245'},
  {price: 6.65, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 45', size: '2"', partId: 'B245'},
  {price: 1.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '1/2"', partId: 'B12S45'},
  {price: 2.64, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '3/4"', partId: 'B34S45'},
  {price: 3.07, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '1"', partId: 'B1S45'},
  {price: 5.31, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '1-1/4"', partId: 'B114S45'},
  {price: 6.58, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '1-1/2"', partId: 'B112S45'},
  {price: 11.1, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST. 45 (MF)', size: '2"', partId: 'B2S45'},
  {price: 0.81, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1/2"', partId: 'B12890'},
  {price: 0.98, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '3/4"', partId: 'B3490'},
  {price: 1.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1"', partId: 'B190'},
  {price: 2.78, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/4"', partId: 'B11490'},
  {price: 3.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/2"', partId: 'B11290'},
  {price: 6.26, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"', partId: 'B290'},
  {price: 1.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1/2"x3/8"', partId: 'B1238RED90'},
  {price: 0.84, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1/2"x1/4"', partId: 'B1214RED90'},
  {price: 1.5, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1/2"x1/8"', partId: 'B1218RED90'},
  {price: 0.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '3/4"x1/2"', partId: 'B3412RED90'},
  {price: 2.02, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '3/4"x3/8"', partId: 'B3438RED90'},
  {price: 1.1, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '3/4"x1/4"', partId: 'B3414RED90'},
  {price: 2.0, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '3/4"x1/8"', partId: 'B3418RED90'},
  {price: 1.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1"x3/4"', partId: 'B134RED90'},
  {price: 2.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1"x1/2"', partId: 'B112RED90'},
  {price: 3.18, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/4"x1"', partId: 'B1141RED90'},
  {price: 2.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/4"x3/4"', partId: 'B11434RED90'},
  {price: 2.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/4"x1/2"', partId: 'B11412RED90'},
  {price: 5.21, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/2"x1-1/4"', partId: 'B112114RED90'},
  {price: 5.21, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/2"x1"', partId: 'B1121RED90'},
  {price: 5.21, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/2"x3/4"', partId: 'B11234RED90'},
  {price: 5.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '1-1/2"x1/2"', partId: 'B11212RED90'},
  {price: 6.6, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"x1-1/2"', partId: 'B2112RED90'},
  {price: 7.51, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"x1-1/4"', partId: 'B2114RED90'},
  {price: 7.51, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"x1"', partId: 'B21RED90'},
  {price: 7.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"x3/4"', partId: 'B234RED90'},
  {price: 7.66, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK 90', size: '2"x1/2"', partId: 'B212RED90'},
  {price: 1.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '1/2"', partId: 'B12S90'},
  {price: 1.63, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '3/4"', partId: 'B34S90'},
  {price: 2.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '1"', partId: 'B1S90'},
  {price: 3.58, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '1-1/4"', partId: 'B114S90'},
  {price: 4.77, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '1-1/2"', partId: 'B112S90'},
  {price: 7.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK ST 90 (MF)', size: '2"', partId: 'B2S90'},
  {price: 1.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/2"', partId: 'B12T'},
  {price: 1.49, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"', partId: 'B34T'},
  {price: 2.63, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"', partId: 'B1T'},
  {price: 2.61, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"', partId: 'B114T'},
  {price: 5.31, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"', partId: 'B112T'},
  {price: 9.01, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"', partId: 'B2T'},
  {price: 2.28, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/2"x1/2"x1"', partId: 'B12121T'},
  {price: 1.36, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/2"x1/2"x3/4"', partId: 'B121234T'},
  {price: 1.13, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/2"x1/2"x3/8"', partId: 'B121238T'},
  {price: 1.78, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/2"x1/2"x1/4"', partId: 'B121214T'},
  {price: 1.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x3/4"x1"', partId: 'B34341T'},
  {price: 1.38, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x3/4"x1/2"', partId: 'B343412T'},
  {price: 1.56, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x3/4"x3/8"', partId: 'B343438T'},
  {price: 1.37, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x3/4"x1/4"', partId: 'B343414T'},
  {price: 3.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x1/2"x1"', partId: 'B34121T'},
  {price: 1.36, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x1/2"x3/4"', partId: 'B341234T'},
  {price: 1.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '3/4"x1/2"x1/2"', partId: 'B341212'},
  {price: 4.41, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x1-1/2"', partId: 'B11112T'},
  {price: 3.1, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x1-1/4"', partId: 'B11114T'},
  {price: 2.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x3/4"', partId: 'B1134T'},
  {price: 2.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x1/2"', partId: 'B1112T'},
  {price: 2.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x3/8"', partId: 'B1138T'},
  {price: 1.96, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1"x1/4"', partId: 'B1114T'},
  {price: 2.11, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x3/4"x1"', partId: 'B1341T'},
  {price: 3.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x3/4"x3/4"', partId: 'B13434T'},
  {price: 2.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x3/4"x1/2"', partId: 'B13412T'},
  {price: 3.33, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1/2"x1"', partId: 'B1121T'},
  {price: 2.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1/2"x3/4"', partId: 'B11234T'},
  {price: 2.15, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1"x1/2"x1/2"', partId: 'B11212T'},
  {price: 3.78, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1-1/4"x1-1/2"', partId: 'B114114112T'},
  {price: 4.64, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1-1/4"x1"', partId: 'B1141141T'},
  {price: 4.64, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1-1/4"x3/4"', partId: 'B11411434T'},
  {price: 3.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1-1/4"x1/2"', partId: 'B11411412T'},
  {price: 3.25, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1"x1/1-4"', partId: 'B1141114T'},
  {price: 3.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1"x1"', partId: 'B11411T'},
  {price: 3.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1"x3/4"', partId: 'B114134T'},
  {price: 3.27, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1"x1/2"', partId: 'B114112T'},
  {price: 3.25, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x3/4"x1-1/4"', partId: 'B11434114T'},
  {price: 3.26, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x3/4"x1"', partId: 'B114341T'},
  {price: 3.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x3/4"x3/4"', partId: 'B1143434T'},
  {price: 3.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x3/4"x1/2"', partId: 'B1143412T'},
  {price: 3.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1/2"x1-1/4"', partId: 'B11412114T'},
  {price: 3.05, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1/2"x1"', partId: 'B114121T'},
  {price: 3.02, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/4"x1/2"x3/4"', partId: 'B1141234T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/2"x1-1/4"', partId: 'B112112114T'},
  {price: 5.88, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/2"x1"', partId: 'B1121121T'},
  {price: 5.88, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/2"x3/4"', partId: 'B11211234T'},
  {price: 6.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/2"x1/2"', partId: 'B11211212T'},
  {price: 9.79, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/4"x1-1/2"', partId: 'B112114112T'},
  {price: 9.79, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1-4"x1-1/4"', partId: 'B112114114T'},
  {price: 6.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/4"x1"', partId: 'B1121141T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/4"x3/4"', partId: 'B11211434T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1-1/4"x1/2"', partId: 'B11211412T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1"x1/2"', partId: 'B112112T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1/1-2"x1"x1-1/4"', partId: 'B1121114T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1"x1"', partId: 'B11211T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1"x3/4"', partId: 'B1121434T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x3/4"1-1/2"', partId: 'B11234112T'},
  {price: 11.54, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x3/4"x1-1/4"', partId: 'B11234114T'},
  {price: 11.54, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x3/4"x3/4"', partId: 'B1123434T'},
  {price: 11.54, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x3/4"x1/2"', partId: 'B1123412T'},
  {price: 7.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '1-1/2"x1/2"x1-1/2"', partId: 'B11212112'},
  {price: 9.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x2"x1-1/2"', partId: 'B22112T'},
  {price: 9.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x2"x1-1/4"', partId: 'B22114T'},
  {price: 9.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x2"x1"', partId: 'B221T'},
  {price: 9.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x2"x3/4"', partId: 'B2234T'},
  {price: 9.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x2"x1/2"', partId: 'B2212T'},
  {price: 11.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/2"x2"', partId: 'B21122T'},
  {price: 11.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/2"x1-1/2"', partId: 'B2112112T'},
  {price: 11.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/2"x1-1/4"', partId: 'B2112114T'},
  {price: 11.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/2"x1"', partId: 'B21121T'},
  {price: 11.99, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/2"x3/4"', partId: 'B211234T'},
  {price: 11.76, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/4"x2"', partId: 'B21142T'},
  {price: 12.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/4"x1-1/2"', partId: 'B2114112T'},
  {price: 11.27, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1-1/4"x1-1/4"', partId: 'B2114114T'},
  {price: 11.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1"x2"', partId: 'B212T'},
  {price: 11.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1"x1"', partId: 'B221T'},
  {price: 11.08, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x3/4"x2"', partId: 'B2342T'},
  {price: 11.3, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK TEE', size: '2"x1/2"x2"', partId: 'B2122T'},
  {price: 0.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '1/2"', partId: 'B12PLUG'},
  {price: 0.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '3/4"', partId: 'B34PLUG'},
  {price: 0.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '1"', partId: 'B1PLUG'},
  {price: 1.17, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '1-1/4"', partId: 'B114PLUG'},
  {price: 1.62, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '1-1/2"', partId: 'B112PLUG'},
  {price: 2.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK PLUG', size: '2"', partId: 'B2PLUG'},
  {price: 3.83, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '1/2"', partId: 'B12X'},
  {price: 4.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '3/4"', partId: 'B34X'},
  {price: 5.74, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '1"', partId: 'B1X'},
  {price: 9.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '1-1/4"', partId: 'B114X'},
  {price: 11.54, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '1-1/2"', partId: 'B112X'},
  {price: 19.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CROSS', size: '2"', partId: 'B2X'},
  {price: 0.48, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '1/2"', partId: 'B12CAP'},
  {price: 0.59, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '3/4"', partId: 'B34CAP'},
  {price: 0.8, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '1"', partId: 'B1CAP'},
  {price: 1.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '1-1/4"', partId: 'B114CAP'},
  {price: 2.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '1-1/2"', partId: 'B112CAP'},
  {price: 3.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK CAP', size: '2"', partId: 'B2CAP'},
  {price: 2.93, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '1/2"', partId: 'B12FF'},
  {price: 3.15, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '3/4"', partId: 'B34FF'},
  {price: 4.1, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '1"', partId: 'B1FF'},
  {price: 4.38, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '1-1/4"', partId: 'B114FF'},
  {price: 4.77, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '1-1/2"', partId: 'B112FF'},
  {price: 6.23, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK FLOOR FLANGE', size: '2"', partId: 'B2FF'},
  {price: 1.21, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '1/2"', partId: 'B12NUT'},
  {price: 1.34, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '3/4"', partId: 'B34NUT'},
  {price: 2.21, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '1"', partId: 'B1NUT'},
  {price: 1.83, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '1-1/4"', partId: 'B114NUT'},
  {price: 2.94, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '1-1/2"', partId: 'B112NUT'},
  {price: 4.87, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Fitting', detail: 'BLACK LOCK-NUT', size: '2"', partId: 'B2NUT'},
  {price: 0.31, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X CLOSE(1 1/8") BLACK NIPPLE', size: '1/2"XCLOSE', partId: 'BN12CLOSE'},
  {price: 0.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 1 1/2 BLACK NIPPLE', size: '1/2"X1-1/2"', partId: 'BN12112'},
  {price: 0.32, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 2 BLACK NIPPLE', size: '1/2"X2"', partId: 'BN12112'},
  {price: 0.38, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 2 1/2 BLACK NIPPLE', size: '1/2"X2-1/2"', partId: 'BN12212'},
  {price: 0.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 3 BLACK NIPPLE', size: '1/2"X3"', partId: 'BN123'},
  {price: 0.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 3 1/2 BLACK NIPPLE', size: '1/2"X3-1/2"', partId: 'BN12312'},
  {price: 0.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 4 BLACK NIPPLE', size: '1/2"X4"', partId: 'BN124'},
  {price: 0.54, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 4 1/2 BLACK NIPPLE', size: '1/2"X4-1/2"', partId: 'BN12412'},
  {price: 0.59, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 5 BLACK NIPPLE', size: '1/2"X5"', partId: 'BN125'},
  {price: 0.61, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 5 1/2 BLACK NIPPLE', size: '1/2"X5-1/2"', partId: 'BN12512'},
  {price: 0.65, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 6 BLACK NIPPLE', size: '1/2"X6"', partId: 'BN126'},
  {price: 2.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 7 BLACK NIPPLE', size: '1/2"X7"', partId: 'BN127'},
  {price: 2.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 8 BLACK NIPPLE', size: '1/2"X8"', partId: 'BN128'},
  {price: 2.48, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 9 BLACK NIPPLE', size: '1/2"X9"', partId: 'BN129'},
  {price: 2.48, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 10 BLACK NIPPLE', size: '1/2"X10"', partId: 'BN1210'},
  {price: 2.92, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 10 1/2 BLACK NIPPLE', size: '1/2"X10-1/2"', partId: 'BN121012'},
  {price: 2.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 11 BLACK NIPPLE', size: '1/2"X11"', partId: 'BN1211'},
  {price: 2.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1/2 X 12 BLACK NIPPLE', size: '1/2"X12"', partId: 'BN1212'},
  {price: 0.36, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X CLOSE(1 3/8") BLACK NIPPLE', size: '3/4"XCLOSE', partId: 'BN34CLOSE'},
  {price: 0.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 1 1/2 BLACK NIPPLE', size: '3/4"X1-1/2"', partId: 'BN34112'},
  {price: 0.39, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 2 BLACK NIPPLE', size: '3/4"X2"', partId: 'BN342'},
  {price: 0.45, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 2 1/2 BLACK NIPPLE', size: '3/4"X2-1/2"', partId: 'BN34212'},
  {price: 0.47, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 3 BLACK NIPPLE', size: '3/4"X3"', partId: 'BN343'},
  {price: 0.57, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 3 1/2 BLACK NIPPLE', size: '3/4"X3-1/2"', partId: 'BN34312'},
  {price: 0.6, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 4 BLACK NIPPLE', size: '3/4"X4"', partId: 'BN344'},
  {price: 0.71, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 4 1/2 BLACK NIPPLE', size: '3/4"X4-1/2"', partId: 'BN34412'},
  {price: 0.72, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 5 BLACK NIPPLE', size: '3/4"X5"', partId: 'BN345'},
  {price: 0.83, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 5 1/2 BLACK NIPPLE', size: '3/4"X5-1/2"', partId: 'BN34512'},
  {price: 0.83, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 6 BLACK NIPPLE', size: '3/4"X6"', partId: 'BN346'},
  {price: 2.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 7 BLACK NIPPLE', size: '3/4"X7"', partId: 'BN347'},
  {price: 2.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 8 BLACK NIPPLE', size: '3/4"X8"', partId: 'BN348'},
  {price: 2.94, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 9 BLACK NIPPLE', size: '3/4"X9"', partId: 'BN349'},
  {price: 2.94, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 10 BLACK NIPPLE', size: '3/4"X10"', partId: 'BN3410'},
  {price: 3.25, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 11 BLACK NIPPLE', size: '3/4"X11"', partId: 'BN3411'},
  {price: 3.25, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '3/4 X 12 BLACK NIPPLE', size: '3/4"X12"', partId: 'BN3412'},
  {price: 0.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X CLOSE(1 1/2") BLACK NIPPLE', size: '1"XCLOSE', partId: 'BN1CLOSE'},
  {price: 0.6, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 2 BLACK NIPPLE', size: '1"X2:', partId: 'BN12'},
  {price: 0.62, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 2 1/2 BLACK NIPPLE', size: '1"X2-1/2"', partId: 'BN1212'},
  {price: 0.68, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 3 BLACK NIPPLE', size: '1"X3"', partId: 'BN13'},
  {price: 0.79, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 3 1/2 BLACK NIPPLE', size: '1"X3-1/2"', partId: 'BN1312'},
  {price: 0.97, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 4 BLACK NIPPLE', size: '1"X4"', partId: 'BN14'},
  {price: 0.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 4 1/2 BLACK NIPPLE', size: '1"X4-1/2"', partId: 'BN1412'},
  {price: 1.0, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 5 BLACK NIPPLE', size: '1"X5"', partId: 'BN15'},
  {price: 1.15, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 5 1/2 BLACK NIPPLE', size: '1"X5-1/2"', partId: 'BN1512'},
  {price: 1.16, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 6 BLACK NIPPLE', size: '1"X6"', partId: 'BN16'},
  {price: 2.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 6 1/2 BLACK NIPPLE', size: '1"X6-1/2"', partId: 'BN1612'},
  {price: 3.37, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 7 BLACK NIPPLE', size: '1"X7"', partId: 'BN17'},
  {price: 3.37, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 7 1/2 BLACK NIPPLE', size: '1"X7-1/2"', partId: 'BN1712'},
  {price: 3.37, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 8 BLACK NIPPLE', size: '1"X8"', partId: 'BN18'},
  {price: 3.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 9 BLACK NIPPLE', size: '1"X9"', partId: 'BN19'},
  {price: 3.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 10 BLACK NIPPLE', size: '1"X10"', partId: 'BN110'},
  {price: 4.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 11 BLACK NIPPLE', size: '1"X11"', partId: 'BN111'},
  {price: 4.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 X 12 BLACK NIPPLE', size: '1"X12"', partId: 'BN112'},
  {price: 0.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X CLOSE(1 5/8") BLACK NIPPLE', size: '1-1/4"XCLOSE', partId: 'BN114CLOSE'},
  {price: 0.78, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 2 BLACK NIPPLE', size: '1-1/4"X2:', partId: 'BN1142'},
  {price: 0.81, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 2 1/2 BLACK NIPPLE', size: '1-1/4"X2-1/2"', partId: 'BN114212'},
  {price: 0.85, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 3 BLACK NIPPLE', size: '1-1/4"X3"', partId: 'BN1143'},
  {price: 0.98, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 3 1/2 BLACK NIPPLE', size: '1-1/4"X3-1/2"', partId: 'BN114312'},
  {price: 1.0, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 4 BLACK NIPPLE', size: '1-1/4"X4"', partId: 'BN1144'},
  {price: 1.18, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 4 1/2 BLACK NIPPLE', size: '1-1/4"X4-1/2"', partId: 'BN114412'},
  {price: 1.25, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 5 BLACK NIPPLE', size: '1-1/4"X5"', partId: 'BN1145'},
  {price: 1.45, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 5 1/2 BLACK NIPPLE', size: '1-1/4"X5-1/2"', partId: 'BN114512'},
  {price: 1.46, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 6 BLACK NIPPLE', size: '1-1/4"X6"', partId: 'BN1146'},
  {price: 4.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 7 BLACK NIPPLE', size: '1-1/4"X7"', partId: 'BN1147'},
  {price: 4.24, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 8 BLACK NIPPLE', size: '1-1/4"X8"', partId: 'BN1148'},
  {price: 5.09, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 9 BLACK NIPPLE', size: '1-1/4"X9"', partId: 'BN1149'},
  {price: 5.09, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 10 BLACK NIPPLE', size: '1-1/4"X10"', partId: 'BN11410'},
  {price: 5.76, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 11 BLACK NIPPLE', size: '1-1/4"X11"', partId: 'BN11411'},
  {price: 5.76, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/4 X 12 BLACK NIPPLE', size: '1-1/4"X12"', partId: 'BN11412'},
  {price: 1.62, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X CLOSE(1 3/4") BLACK NIPPLE', size: '1-1/2"XCLOSE', partId: 'BN112CLOSE'},
  {price: 1.75, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 2 BLACK NIPPLE', size: '1-1/2"X2"', partId: 'BN1122'},
  {price: 1.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 2 1/2 BLACK NIPPLE', size: '1-1/2"X2-1/2"', partId: 'BN112212'},
  {price: 1.95, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 3 BLACK NIPPLE', size: '1-1/2"X3"', partId: 'BN1123'},
  {price: 2.19, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 3 1/2 BLACK NIPPLE', size: '1-1/2"X3-1/2"', partId: 'BN112312'},
  {price: 2.19, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 4 BLACK NIPPLE', size: '1-1/2"X4"', partId: 'BN1124'},
  {price: 2.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 4 1/2 BLACK NIPPLE', size: '1-1/2"X4-1/2"', partId: 'BN112412'},
  {price: 2.67, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 5 BLACK NIPPLE', size: '1-1/2"X5"', partId: 'BN1125'},
  {price: 3.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 5 1/2 BLACK NIPPLE', size: '1-1/2"X5-1/2"', partId: 'BN112512'},
  {price: 3.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 6 BLACK NIPPLE', size: '1-1/2"X6"', partId: 'BN1126'},
  {price: 4.86, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 7 BLACK NIPPLE', size: '1-1/2"X7"', partId: 'BN1127'},
  {price: 4.86, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 8 BLACK NIPPLE', size: '1-1/2"X8"', partId: 'BN1128'},
  {price: 5.68, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 9 BLACK NIPPLE', size: '1-1/2"X9"', partId: 'BN1129'},
  {price: 5.68, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 10 BLACK NIPPLE', size: '1-1/2"X10"', partId: 'BN11210'},
  {price: 6.55, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 11 BLACK NIPPLE', size: '1-1/2"X11"', partId: 'BN11211'},
  {price: 6.55, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '1 1/2 X 12 BLACK NIPPLE', size: '1-1/2"X12"', partId: 'BN11212'},
  {price: 2.2, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X CLOSE(2") BLACK NIPPLE', size: '2"XCLOSE', partId: 'BN2CLOSE'},
  {price: 2.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 2 1/2 BLACK NIPPLE', size: '2"X2-1/2"', partId: 'BN2212'},
  {price: 2.53, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 3 BLACK NIPPLE', size: '2"X3"', partId: 'BN23'},
  {price: 3.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 3 1/2 BLACK NIPPLE', size: '2"X3-1/2"', partId: 'BN2312'},
  {price: 3.06, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 4 BLACK NIPPLE', size: '2"X4"', partId: 'BN24'},
  {price: 3.52, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 4 1/2 BLACK NIPPLE', size: '2"X4-1/2"', partId: 'BN2412'},
  {price: 3.52, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 5 BLACK NIPPLE', size: '2"X5"', partId: 'BN25'},
  {price: 4.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 5 1/2 BLACK NIPPLE', size: '2"X5-1/2"', partId: 'BN2512'},
  {price: 4.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 6 BLACK NIPPLE', size: '2"X6"', partId: 'BN26'},
  {price: 6.92, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 7 BLACK NIPPLE', size: '2"X7"', partId: 'BN27'},
  {price: 6.92, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 8 BLACK NIPPLE', size: '2"X8"', partId: 'BN28'},
  {price: 8.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 9 BLACK NIPPLE', size: '2"X9"', partId: 'BN29'},
  {price: 8.12, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 10 BLACK NIPPLE', size: '2"X10"', partId: 'BN210'},
  {price: 9.36, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 11 BLACK NIPPLE', size: '2"X11"', partId: 'BN211'},
  {price: 9.36, bestHouse: 'Texas Wholesale', make: 'BMI', model: 'Black Iron Nipple', detail: '2 X 12 BLACK NIPPLE', size: '2"X12"', partId: 'BN212'}
];

// Template definitions - these are example material sets for each template
const TEMPLATES = {
    'rough-in': {
        name: 'Rough In',
        description: 'Basic rough-in materials for plumbing installation',
        defaultMaterials: ['PVC2COUP', 'PVC290', 'PVC2T', 'PVC2WYE', 'PVC2COMBO']
    },
    'top-out': {
        name: 'Top Out',
        description: 'Top-out materials for vertical plumbing connections',
        defaultMaterials: ['PVC11290', 'PVC2112T', 'PVC112WYE', 'PVC112T']
    },
    'trim-set': {
        name: 'Trim Set',
        description: 'Trim set materials for fixture connections',
        defaultMaterials: ['XP12COUP', 'XP1290', 'XP12T', 'XP12MA', 'B12COUP', 'B1290']
    },
    'all-parts': {
        name: 'All Parts',
        description: 'View all available parts and materials',
        defaultMaterials: [] // Empty means show all materials
    }
};

// Application state
let currentTemplate = 'all-parts';
let selectedMaterials = {}; // { partId: { material, quantity } }
let filteredMaterials = [...MATERIALS_DATA];

// DOM elements
const materialSearch = document.getElementById('materialSearch');
const materialsList = document.getElementById('materialsList');
const selectedItems = document.getElementById('selectedItems');
const totalItems = document.getElementById('totalItems');
const totalPrice = document.getElementById('totalPrice');
const deliveryDate = document.getElementById('deliveryDate');
const clearBtn = document.getElementById('clearBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const payNowBtn = document.getElementById('payNowBtn');
const payNowModal = document.getElementById('payNowModal');
const modalClose = document.querySelector('.modal-close');
const rushOption = document.getElementById('rushOption');
const deliveryDateGroup = document.getElementById('deliveryDateGroup');
const sendForCallbackBtn = document.getElementById('sendForCallbackBtn');
const payNowPaymentBtn = document.getElementById('payNowPaymentBtn');
const paymentModal = document.getElementById('paymentModal');
const paymentModalClose = document.querySelector('.payment-modal-close');
const stripeConnectButton = document.getElementById('stripeConnectButton');
const stripeStatus = document.getElementById('stripeStatus');
const completePaymentBtn = document.getElementById('completePaymentBtn');
const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');
const thankYouModal = document.getElementById('thankYouModal');
const thankYouModalClose = document.querySelector('.thank-you-modal-close');
const thankYouText = document.getElementById('thankYouText');
const closeThankYouBtn = document.getElementById('closeThankYouBtn');
const templateButtons = document.querySelectorAll('.template-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderMaterials();
    updateQuote();
});

// Event listeners
function setupEventListeners() {
    materialSearch.addEventListener('input', handleSearch);
    templateButtons.forEach(btn => {
        btn.addEventListener('click', () => handleTemplateChange(btn.dataset.template));
    });
    clearBtn.addEventListener('click', clearAll);
    exportPdfBtn.addEventListener('click', exportToPdf);
    
    // Pay Now modal
    if (payNowBtn) {
        payNowBtn.addEventListener('click', openPayNowModal);
    }
    if (modalClose) {
        modalClose.addEventListener('click', closePayNowModal);
    }
    if (payNowModal) {
        payNowModal.addEventListener('click', (e) => {
            if (e.target === payNowModal) {
                closePayNowModal();
            }
        });
    }
    if (rushOption) {
        rushOption.addEventListener('change', handleDeliveryOptionChange);
    }
    // Handle standard delivery option
    const standardOption = document.querySelector('input[name="deliveryOption"][value="standard"]');
    if (standardOption) {
        standardOption.addEventListener('change', handleDeliveryOptionChange);
    }
    if (sendForCallbackBtn) {
        sendForCallbackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const payNowForm = document.getElementById('payNowForm');
            if (payNowForm && payNowForm.checkValidity()) {
                const phoneNumber = document.getElementById('customerPhone').value;
                const email = document.getElementById('customerEmail').value;
                openThankYouModal(phoneNumber, email);
                // Close the pay now modal
                closePayNowModal();
            } else {
                payNowForm.reportValidity();
            }
        });
    }
    if (thankYouModalClose) {
        thankYouModalClose.addEventListener('click', closeThankYouModal);
    }
    if (thankYouModal) {
        thankYouModal.addEventListener('click', (e) => {
            if (e.target === thankYouModal) {
                closeThankYouModal();
            }
        });
    }
    if (closeThankYouBtn) {
        closeThankYouBtn.addEventListener('click', closeThankYouModal);
    }
    
    // Payment modal
    if (payNowPaymentBtn) {
        payNowPaymentBtn.addEventListener('click', openPaymentModal);
    }
    if (paymentModalClose) {
        paymentModalClose.addEventListener('click', closePaymentModal);
    }
    if (paymentModal) {
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                closePaymentModal();
            }
        });
    }
    if (stripeConnectButton) {
        stripeConnectButton.addEventListener('click', handleStripeConnect);
    }
    if (cancelPaymentBtn) {
        cancelPaymentBtn.addEventListener('click', closePaymentModal);
    }
    if (completePaymentBtn) {
        completePaymentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Payment completion would be handled here in production
            alert('Payment processing would be completed here. This is a demo.');
        });
    }
}

// Template change handler
function handleTemplateChange(template) {
    currentTemplate = template;
    
    // Update active button
    templateButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.template === template);
    });
    
    // Re-render materials (could filter by template if needed)
    renderMaterials();
}

// Search handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        filteredMaterials = [...MATERIALS_DATA];
    } else {
        filteredMaterials = MATERIALS_DATA.filter(material => {
            const searchable = `${material.partId} ${material.detail} ${material.size} ${material.make} ${material.model}`.toLowerCase();
            return searchable.includes(query);
        });
    }
    
    renderMaterials();
}

// Render materials list
function renderMaterials() {
    if (filteredMaterials.length === 0) {
        materialsList.innerHTML = '<div class="empty-state"><p>No materials found. Try a different search.</p></div>';
        return;
    }
    
    materialsList.innerHTML = filteredMaterials.map(material => {
        const isSelected = selectedMaterials[material.partId] !== undefined;
        const quantity = isSelected ? selectedMaterials[material.partId].quantity : 0;
        
        return `
            <div class="material-item" data-part-id="${material.partId}">
                <div class="material-info">
                    <div class="material-name">${material.detail}</div>
                    <div class="material-details">
                        ${material.partId} | ${material.size} | ${material.make} ${material.model}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="material-price">$${material.price.toFixed(2)}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn quantity-down" onclick="decrementQuantity('${material.partId}')" type="button">−</button>
                        <input 
                            type="number" 
                            class="quantity-input" 
                            min="0" 
                            value="${quantity}"
                            data-part-id="${material.partId}"
                            onchange="handleQuantityChange('${material.partId}', this.value)"
                        >
                        <button class="quantity-btn quantity-up" onclick="incrementQuantity('${material.partId}')" type="button">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Handle quantity change
function handleQuantityChange(partId, quantity) {
    const qty = parseInt(quantity) || 0;
    const material = MATERIALS_DATA.find(m => m.partId === partId);
    
    if (!material) return;
    
    if (qty > 0) {
        selectedMaterials[partId] = {
            material: material,
            quantity: qty
        };
    } else {
        delete selectedMaterials[partId];
    }
    
    updateQuote();
    renderSelectedItems();
}

// Render selected items
function renderSelectedItems() {
    const items = Object.values(selectedMaterials);
    
    if (items.length === 0) {
        selectedItems.innerHTML = '<div class="empty-state"><p>No items selected. Search and add materials above.</p></div>';
        return;
    }
    
    selectedItems.innerHTML = items.map(({ material, quantity }) => {
        const total = (material.price * quantity).toFixed(2);
        return `
            <div class="selected-item">
                <div class="selected-item-info">
                    <div class="selected-item-name">${material.detail}</div>
                    <div class="selected-item-details">
                        ${material.partId} | ${material.size} | Qty: ${quantity} × $${material.price.toFixed(2)}
                    </div>
                </div>
                <div style="display: flex; align-items: center;">
                    <span class="selected-item-total">$${total}</span>
                    <button class="remove-btn" onclick="removeItem('${material.partId}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');
}

// Remove item
function removeItem(partId) {
    delete selectedMaterials[partId];
    updateQuote();
    renderSelectedItems();
    renderMaterials(); // Refresh to update quantity inputs
}

// Clear all
function clearAll() {
    selectedMaterials = {};
    updateQuote();
    renderSelectedItems();
    renderMaterials();
}

// Update quote summary
function updateQuote() {
    const items = Object.values(selectedMaterials);
    const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceValue = items.reduce((sum, item) => sum + (item.material.price * item.quantity), 0);
    
    totalItems.textContent = totalItemsCount;
    totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
    
    // Estimate delivery date (3-5 business days from today)
    const deliveryDays = items.length > 0 ? 3 + Math.floor(items.length / 10) : 0;
    if (deliveryDays > 0) {
        const delivery = new Date();
        delivery.setDate(delivery.getDate() + deliveryDays);
        deliveryDate.textContent = delivery.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    } else {
        deliveryDate.textContent = '-';
    }
}

// Increment quantity
function incrementQuantity(partId) {
    const material = MATERIALS_DATA.find(m => m.partId === partId);
    if (!material) return;
    
    const currentQty = selectedMaterials[partId] ? selectedMaterials[partId].quantity : 0;
    const newQty = currentQty + 1;
    
    // Update the input field immediately
    const input = document.querySelector(`input[data-part-id="${partId}"]`);
    if (input) {
        input.value = newQty;
    }
    
    handleQuantityChange(partId, newQty);
}

// Decrement quantity
function decrementQuantity(partId) {
    const material = MATERIALS_DATA.find(m => m.partId === partId);
    if (!material) return;
    
    const currentQty = selectedMaterials[partId] ? selectedMaterials[partId].quantity : 0;
    if (currentQty > 0) {
        const newQty = currentQty - 1;
        
        // Update the input field immediately
        const input = document.querySelector(`input[data-part-id="${partId}"]`);
        if (input) {
            input.value = newQty;
        }
        
        handleQuantityChange(partId, newQty);
    }
}

// Export to PDF (opens print dialog)
function exportToPdf() {
    const items = Object.values(selectedMaterials);
    
    if (items.length === 0) {
        alert('Please add items to the quote before exporting.');
        return;
    }
    
    const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceValue = items.reduce((sum, item) => sum + (item.material.price * item.quantity), 0).toFixed(2);
    const deliveryDateText = deliveryDate.textContent;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Build table rows with proper escaping
    const tableRows = items.map(({ material, quantity }) => {
        const escapedDetail = (material.detail || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        const escapedPartId = (material.partId || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        const escapedMake = (material.make || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        const escapedModel = (material.model || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        const escapedSize = (material.size || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return `
                        <tr style="border-bottom: 1px solid #e9ecef;">
                            <td style="padding: 10px; border: 1px solid #e9ecef;">${escapedDetail}</td>
                            <td style="padding: 10px; border: 1px solid #e9ecef;">${escapedPartId}</td>
                            <td style="padding: 10px; border: 1px solid #e9ecef;">${escapedMake}</td>
                            <td style="padding: 10px; border: 1px solid #e9ecef;">${escapedModel}</td>
                            <td style="padding: 10px; border: 1px solid #e9ecef;">${escapedSize}</td>
                            <td style="padding: 10px; border: 1px solid #e9ecef;">Click Plumbing Supply</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid #e9ecef;">${quantity}</td>
                            <td style="padding: 10px; text-align: right; border: 1px solid #e9ecef;">$${material.price.toFixed(2)}</td>
                            <td style="padding: 10px; text-align: right; border: 1px solid #e9ecef; font-weight: 600;">$${(material.price * quantity).toFixed(2)}</td>
                        </tr>
                    `;
    }).join('');
    
    // Write the print content
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PlanHub Quote - Print</title>
            <style>
                @media print {
                    @page {
                        margin: 1cm;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                }
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    padding: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                h1 {
                    color: #667eea;
                    margin: 0;
                    font-size: 28px;
                }
                h2 {
                    color: #495057;
                    font-size: 20px;
                    margin-bottom: 15px;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 20px;
                }
                .subtitle {
                    color: #6c757d;
                    margin: 10px 0 0 0;
                    font-size: 16px;
                }
                .summary-box {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid #e9ecef;
                }
                .summary-row:last-child {
                    border-bottom: none;
                }
                .summary-label {
                    font-weight: 600;
                    color: #495057;
                }
                .summary-value {
                    font-weight: 700;
                    color: #667eea;
                    font-size: 18px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                    font-size: 11px;
                }
                th {
                    background: #667eea;
                    color: white;
                    padding: 10px;
                    text-align: left;
                    border: 1px solid #5568d3;
                }
                th:nth-child(7), th:nth-child(8), th:nth-child(9) {
                    text-align: right;
                }
                th:nth-child(7) {
                    text-align: center;
                }
                td {
                    padding: 10px;
                    border: 1px solid #e9ecef;
                }
                td:nth-child(7), td:nth-child(8), td:nth-child(9) {
                    text-align: right;
                }
                td:nth-child(7) {
                    text-align: center;
                }
                .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #e9ecef;
                    text-align: center;
                    color: #6c757d;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Click / PlanHub</h1>
                <p class="subtitle">Proposal for Click Plumbing Supply × PlanHub.com</p>
            </div>
            
            <div>
                <h2>Quote Summary</h2>
                <div class="summary-box">
                    <div class="summary-row">
                        <span class="summary-label">Total Items:</span>
                        <span class="summary-value">${totalItemsCount}</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">Total Price:</span>
                        <span class="summary-value">$${totalPriceValue}</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">Estimated Delivery:</span>
                        <span class="summary-value">${deliveryDateText}</span>
                    </div>
                </div>
            </div>
            
            <div>
                <h2>Selected Items</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th>Part ID</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Size</th>
                            <th>Supplier</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
            
            <div class="footer">
                <p>Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Wait for content to load, then trigger print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 250);
    };
}

// Pay Now Modal Functions
function openPayNowModal() {
    if (payNowModal) {
        payNowModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Set minimum date to today and default to 5 days from today
        const orderDeliveryDateInput = document.getElementById('orderDeliveryDate');
        if (orderDeliveryDateInput) {
            const today = new Date();
            const defaultDate = new Date(today);
            defaultDate.setDate(today.getDate() + 5);
            const todayStr = today.toISOString().split('T')[0];
            const defaultDateStr = defaultDate.toISOString().split('T')[0];
            orderDeliveryDateInput.setAttribute('min', todayStr);
            if (!orderDeliveryDateInput.value) {
                orderDeliveryDateInput.value = defaultDateStr;
            }
        }
    }
}

function closePayNowModal() {
    if (payNowModal) {
        payNowModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function handleDeliveryOptionChange() {
    const selectedOption = document.querySelector('input[name="deliveryOption"]:checked');
    const orderDeliveryDateInput = document.getElementById('orderDeliveryDate');
    
    if (selectedOption && selectedOption.value === 'rush') {
        // Hide delivery date field for rush
        if (deliveryDateGroup) {
            deliveryDateGroup.style.display = 'none';
        }
        if (orderDeliveryDateInput) {
            orderDeliveryDateInput.removeAttribute('required');
        }
    } else {
        // Show delivery date field for standard
        if (deliveryDateGroup) {
            deliveryDateGroup.style.display = 'block';
        }
        if (orderDeliveryDateInput) {
            orderDeliveryDateInput.setAttribute('required', 'required');
        }
    }
}

// Payment Modal Functions
function openPaymentModal() {
    if (paymentModal) {
        paymentModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Reset form state
        if (stripeStatus) {
            stripeStatus.style.display = 'none';
        }
        if (completePaymentBtn) {
            completePaymentBtn.disabled = true;
        }
        if (stripeConnectButton) {
            stripeConnectButton.style.display = 'flex';
            stripeConnectButton.disabled = false;
            stripeConnectButton.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.905 0-4.357-1.061-5.93-1.97L5 23.06c1.664.706 4.357 1.346 7.309 1.346 2.42 0 4.76-.624 6.43-1.688 1.86-1.188 2.966-3.152 2.966-5.267 0-4.763-2.315-6.302-6.73-7.281z" fill="#635BFF"/>
                </svg>
                Connect Bank Account with Stripe
            `;
        }
    }
}

function closePaymentModal() {
    if (paymentModal) {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function handleStripeConnect() {
    // Simulate Stripe connection process
    // In production, this would integrate with Stripe's API
    if (stripeConnectButton && stripeStatus && completePaymentBtn) {
        // Show loading state
        stripeConnectButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416;0 31.416" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416;-31.416" repeatCount="indefinite"/>
                </circle>
            </svg>
            Connecting...
        `;
        stripeConnectButton.disabled = true;
        
        // Simulate connection delay
        setTimeout(() => {
            stripeConnectButton.style.display = 'none';
            stripeStatus.style.display = 'block';
            completePaymentBtn.disabled = false;
        }, 2000);
    }
}

// Thank You Modal Functions
function openThankYouModal(phoneNumber, email) {
    if (thankYouModal && thankYouText) {
        thankYouText.innerHTML = `Thank you, we will attempt to call you three times at <strong>${phoneNumber}</strong> before requesting you re-submit the order via email <strong>${email}</strong>. A copy of your invoice has been sent to that email.`;
        thankYouModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeThankYouModal() {
    if (thankYouModal) {
        thankYouModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Make functions globally accessible for inline event handlers
window.handleQuantityChange = handleQuantityChange;
window.removeItem = removeItem;
window.incrementQuantity = incrementQuantity;
window.decrementQuantity = decrementQuantity;
