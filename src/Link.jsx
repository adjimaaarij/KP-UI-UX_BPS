import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Toaster } from "sonner";

import Homepage from './Homepage.jsx';
import App from './App.jsx';

//Folder Data
import Data_Pertumbuhan_Penduduk from './Data/Data_Pertumbuhan_Penduduk.jsx';
import Data_Index_Kemahalan_Kontruksi from './Data/Data_Index_Kemahalan_Kontruksi.jsx';
import Data_Index_Pembagunan_Manusia from './Data/Data_Index_Pembagunan_Manusia.jsx';
import Data_Inflasi from './Data/Data_Inflasi.jsx';
import Data_Kemisikinan_Ketimpangan from './Data/Data_Kemisikinan_Ketimpangan.jsx';
import Data_Ketenagakerjaan from './Data/Data_Ketenagakerjaan.jsx';
import Data_Pertumbuhan_Ekonomi from './Data/Data_Pertumbuhan_Ekonomi.jsx';


export const DataLinks = [
  { name: 'Data Pertumbuhan Penduduk', path: '/data/pertumbuhan-penduduk' },
  { name: 'Data Kemahalan Konstruksi', path: '/data/kemahalan-konstruksi' },
  { name: 'Data Pembangunan Manusia', path: '/data/pembangunan-manusia' },  
  { name: 'Data Inflasi', path: '/data/inflasi' },
  { name: 'Data Kemiskinan dan Ketimpangan', path: '/data/kemiskinan-ketimpangan' },
  { name: 'Data Ketenagakerjaan', path: '/data/ketenagakerjaan' },
  { name: 'Data Pertumbuhan Ekonomi', path: '/data/pertumbuhan-ekonomi' },
];


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Homepage />,
  },
  {
    path: '/data/pertumbuhan-penduduk',
    element: <Data_Pertumbuhan_Penduduk />,
  },
  {
    path: '/data/kemahalan-konstruksi',
    element: <Data_Index_Kemahalan_Kontruksi />,
  },
  {
    path: '/data/pembangunan-manusia',
    element: <Data_Index_Pembagunan_Manusia />,
  },
  {
    path: '/data/inflasi',
    element: <Data_Inflasi />,
  },
  {
    path: '/data/kemiskinan-ketimpangan',
    element: <Data_Kemisikinan_Ketimpangan />,
  },
  {
    path: '/data/ketenagakerjaan',
    element: <Data_Ketenagakerjaan />,
  },
  {
    path: '/data/pertumbuhan-ekonomi',
    element: <Data_Pertumbuhan_Ekonomi />,
  },
  {
    path: '*',
    element: <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to home</Link>
    </div>,
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={route} />
    </>
  );
};

export default AppRouter;
