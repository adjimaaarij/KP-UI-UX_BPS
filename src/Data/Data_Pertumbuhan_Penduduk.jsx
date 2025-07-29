import React, { useState, PureComponent } from 'react';
import LogoBps from '../Component/Logo_bps.jsx'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data_kecamatan = [
  {
    name: 'Tanete Riaja',
    data: [
      { tahun: 2020, jml_penduduk: 25217 },
      { tahun: 2021, jml_penduduk: 25449 },
      { tahun: 2022, jml_penduduk: 25718 }, 
      { tahun: 2023, jml_penduduk: 26755 },
      { tahun: 2024, jml_penduduk: 26869 },
    ]
  },
  {
    name: 'Pujananting',
    data: [
      { tahun: 2020, jml_penduduk: 13104 },
      { tahun: 2021, jml_penduduk: 13077 },
      { tahun: 2022, jml_penduduk: 13119 }, 
      { tahun: 2023, jml_penduduk: 13964 },
      { tahun: 2024, jml_penduduk: 13999 },
    ]
  },
  {
    name: 'tanete Rilau',
    data: [
      { tahun: 2020, jml_penduduk: 37196 },
      { tahun: 2021, jml_penduduk: 37487 },
      { tahun: 2022, jml_penduduk: 37831 }, 
      { tahun: 2023, jml_penduduk: 39451 },
      { tahun: 2024, jml_penduduk: 39736 },
    ]
  },
  {
    name: 'Barru',
    data: [
      { tahun: 2020, jml_penduduk: 43975 },
      { tahun: 2021, jml_penduduk: 44363 },
      { tahun: 2022, jml_penduduk: 44817 }, 
      { tahun: 2023, jml_penduduk: 46642 },
      { tahun: 2024, jml_penduduk: 46827 },
    ]
  },
  {
    name: 'Soppeng Riaja',
    data: [
      { tahun: 2020, jml_penduduk: 18471 },
      { tahun: 2021, jml_penduduk: 18475 },
      { tahun: 2022, jml_penduduk: 18503 }, 
      { tahun: 2023, jml_penduduk: 18900 },
      { tahun: 2024, jml_penduduk: 18977 },
    ]
  },
  {
    name: 'Balusu',
    data: [
      { tahun: 2020, jml_penduduk: 18913 },
      { tahun: 2021, jml_penduduk: 18963 },
      { tahun: 2022, jml_penduduk: 19038 }, 
      { tahun: 2023, jml_penduduk: 20331 },
      { tahun: 2024, jml_penduduk: 20439 },
    ]
  },
  {
    name: 'Mallusetasi',
    data: [
      { tahun: 2020, jml_penduduk: 27576 },
      { tahun: 2021, jml_penduduk: 27711 },
      { tahun: 2022, jml_penduduk: 27884 }, 
      { tahun: 2023, jml_penduduk: 28500 },
      { tahun: 2024, jml_penduduk: 28538 }, 
    ]
  },
  {
    name: 'Kabupaten Barru',
    data: [
      { tahun: 2020, jml_penduduk: 184452 },
      { tahun: 2021, jml_penduduk: 185525},
      { tahun: 2022, jml_penduduk: 186910 }, 
      { tahun: 2023, jml_penduduk: 194543 },
      { tahun: 2024, jml_penduduk: 195385 },
    ]
  },
];

const Data_penduduk_2024 = [
  {
    name: 'laki-laki',
    data: [
      { tahun: 0-4, jumlah: 5792},
      { tahun: 5-9, jumlah: 7934},
      { tahun: 10-14, jumlah: 8641},
      { tahun: 15-19, jumlah: 8683},
      { tahun: 20-24, jumlah: 8305},
      { tahun: 25-29, jumlah: 7569},
      { tahun: 30-34, jumlah: ''},
      { tahun: 35-39, jumlah: 6083},
      { tahun: 40-44, jumlah: 6528},
      { tahun: 45-49, jumlah: 6213},
      { tahun: 50-54, jumlah: 6267},
      { tahun: 55-59, jumlah: 5168},
      { tahun: 60-64, jumlah: ''},
      { tahun: 65-69, jumlah: ''},
      { tahun: 70-74, jumlah: 2238},
      { tahun: 75, jumlah: 3201},
    ]
  },
  {
    name: 'perempuan',
    data: [
      { tahun: 0-4, jumlah: 4739},
      { tahun: 5-9, jumlah: 2653},
      { tahun: 10-14, jumlah: 3677},
      { tahun: 15-19, jumlah: 5012},
      { tahun: 20-24, jumlah: 5773},
      { tahun: 25-29, jumlah: 6594},
      { tahun: 30-34, jumlah: 7481},
      { tahun: 35-39, jumlah: 6567},
      { tahun: 40-44, jumlah: 6722},
      { tahun: 45-49, jumlah: 6321},
      { tahun: 50-54, jumlah: 6266},
      { tahun: 55-59, jumlah: 7488},
      { tahun: 60-64, jumlah: 8223},
      { tahun: 65-69, jumlah: 8359},
      { tahun: 70-74, jumlah: 8013},
      { tahun: 75, jumlah: 5491},
    ]
  }
];

const dataChart = [2020, 2021, 2022, 2023, 2024].map((tahun) => {
  const entry = { tahun };
  data_kecamatan.forEach((kec) => {
    const found = kec.data.find((d) => d.tahun === tahun);
    entry[kec.name] = found?.jml_penduduk || 0;
  });
  return entry;
});

const Example = () => {
  const [hoveringDataKey, setHoveringDataKey] = useState(null);
  const years = [2020, 2021, 2022, 2023, 2024];

  const getOpacity = (key) => {
    if (!hoveringDataKey) return 1;
    return hoveringDataKey === key ? 1 : 0.4;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      {<LogoBps />}
      <h2 className="text-xl font-semibold mb-4 text-center">Jumlah Penduduk Kabupaten Barru (2020–2024)</h2>

      <p className="text-sm text-gray-500 mt-2 text-center italic">
        Jumlah Penduduk Kecamatan Barru dari tahun 2020 hingga 2024.
      </p>

      {/* 📋 TABEL */}
      <div className="overflow-x-auto mt-8">
        <table className="w-full table-auto text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Kecamatan</th>
              {years.map((year) => (
                <th key={year} className="border px-4 py-2 text-center">{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data_kecamatan.map((kecamatan, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{kecamatan.name}</td>
                {years.map((year) => {
                  const found = kecamatan.data.find((d) => d.tahun === year);
                  return (
                    <td key={year} className="border px-4 py-2 text-center">
                      {found ? found.jml_penduduk.toLocaleString('id-ID') : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📈 CHART */}
      {/* <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dataChart} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tahun" />
          <YAxis />
          <Tooltip />
          <Legend
            onMouseEnter={(e) => setHoveringDataKey(e.dataKey)}
            onMouseLeave={() => setHoveringDataKey(null)}
          />
          {data_kecamatan.map((kec, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={kec.name}
              stroke={`hsl(${index * 45}, 70%, 50%)`}
              strokeWidth={2}
              strokeOpacity={getOpacity(kec.name)}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  );
};

export default Example;