export type Allergen = {
  id: number;
  label: string;
  description: string;
  exceptions?: string[];
};

export const ALLERGENS: Allergen[] = [
  {
    id: 1,
    label: 'Glutén',
    description:
      'Glutént tartalmazó gabonafélék, azaz búza (például tönkölybúza vagy khorasan búza), rozs, árpa, zab illetve hibridizált fajtáik, valamint a belőlük készült termékek, kivéve:',
    exceptions: [
      'búzából készült glükózszirup, beleértve a dextrózt is',
      'búzából készült maltodextrin',
      'árpából készült glükózszirup',
      'alkoholpárlatok - így például mezőgazdasági eredetű etil-alkohol - készítéséhez használt gabonafélék',
    ],
  },
  {
    id: 2,
    label: 'Rákfélék',
    description: 'Rákfélék és a belőlük készült termékek.',
  },
  {
    id: 3,
    label: 'Tojás',
    description: 'Tojás és a belőle készült termékek.',
  },
  {
    id: 4,
    label: 'Hal',
    description: 'Hal és a belőle készült termékek, kivéve:',
    exceptions: [
      'vitaminok vagy karotinoidkészítmények hordozójaként használt halenyv',
      'a sör és a bor derítőanyagaként használt halenyv vagy vizahólyag',
    ],
  },
  {
    id: 5,
    label: 'Földimogyoró',
    description: 'Földimogyoró és a belőle készült termékek.',
  },
  {
    id: 6,
    label: 'Szója',
    description: 'Szójabab és a belőle készült termékek, kivéve:',
    exceptions: [
      'teljes mértékben finomított szójababolaj és zsír',
      'szójababból származó természetes vegyes tokoferolok (E306), természetes D-alfa tokoferol, természetes D-alfa tokoferol-acetát, természetes D-alfa tokoferol-szukcinát',
      'szójabab olajából nyert fitoszterolok és fitoszterol-észterek',
      'szójabab olajából nyert szterolokból előállított fitosztanol-észter',
    ],
  },
  {
    id: 7,
    label: 'Tej',
    description:
      'Tej és az abból készült termékek (beleértve a laktózt), kivéve:',
    exceptions: [
      'alkoholpárlatok - így például mezőgazdasági eredetű etil-alkohol - készítéséhez használt tejsavó',
      'laktit',
    ],
  },
  {
    id: 8,
    label: 'Diófélék',
    description:
      'Diófélék, azaz mandula, mogyoró, dió, kesudió, pekándió, brazil dió, pisztácia, makadámia- vagy queenslandi dió és a belőlük készült termékek, kivéve:',
    exceptions: [
      'alkoholpárlatok - így például mezőgazdasági eredetű etil-alkohol - készítéséhez használt csonthéjasok',
    ],
  },
  {
    id: 9,
    label: 'Zeller',
    description: 'Zeller és a belőle készült termékek.',
  },
  {
    id: 10,
    label: 'Mustár',
    description: 'Mustár és a belőle készült termékek.',
  },
  {
    id: 11,
    label: 'Szezámmag',
    description: 'Szezámmag és a belőle készült termékek.',
  },
  {
    id: 12,
    label: 'Szulfit',
    description:
      'Kén-dioxid és az SO2-ben kifejezett szulfitok 10 mg/kg, illetve 10 mg/liter összkoncentrációt meghaladó mennyiségben; a számítást a fogyasztásra kész termékekre vagy a gyártó utasítása alapján elkészített termékekre vonatkozóan kell elvégezni.',
  },
  {
    id: 13,
    label: 'Csillagfürt',
    description: 'Csillagfürt és a belőle készült termékek.',
  },
  {
    id: 14,
    label: 'Puhatestűek',
    description: 'Puhatestűek és a belőlük készült termékek.',
  },
];
