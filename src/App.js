import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/pesertamagangui/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import PesertaMagang from "./pages/PesertaMagang";
import Hirakata from "./pages/Hirakata";
import Kanjin5 from "./pages/Kanjin5";
import KataBenda from "./pages/KataBenda";
import KataKerja from "./pages/KataKerja";
import KataSifat from "./pages/KataSifat";
import Pembayaran from "./pages/Pembayaran";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import AddPesertaMagang from "./pages/pesertamagang/AddPesertaMagang";
import EditPesertaMagang from "./pages/pesertamagang/EditPesertaMagang";
import AddPembayaran from "./pages/pembayaran/AddPembayaran";
import EditPembayaran from "./pages/pembayaran/EditPembayaran";
import AddHirakata from "./pages/hirakata/AddHirakata";
import EditHirakata from "./pages/hirakata/EditHirakata";
import AddKanji5 from "./pages/kanjin5/AddKanjin5";
import EditKanjin5 from "./pages/kanjin5/Editkanji5";
import AddKataBenda from "./pages/katabenda/AddKataBenda";
import EditKataBenda from "./pages/katabenda/EditKataBenda";
import AddKataKerja from "./pages/katakerja/AddKataKerja";
import EditKataKerja from "./pages/katakerja/EditKataKerja";
import AddKataSifat from "./pages/katasifat/AddKataSifat";
import EditKataSifat from "./pages/katasifat/EditKataSifat";
import Home from "./components/Home";
import LoginKenshusei from "./pages/pesertamagangui/LoginKenshusei";
import HirakataPage from "./pages/pesertamagangui/HirakataPage";
import Kanjin5Page from "./pages/pesertamagangui/Kanjin5";
import KataBendaPage from "./pages/pesertamagangui/KataBenda";
import KataKerjaPage from "./pages/pesertamagangui/KataKerja";
import KataSifatPage from "./pages/pesertamagangui/KataSifat";
import Partikel from './pages/tatabahasa/partikel/Pertikel';
import Partikel2 from './pages/tatabahasa/partikel/Partikel2';
import Partikel3 from './pages/tatabahasa/partikel/Partikel3';
import Partikel4 from './pages/tatabahasa/partikel/Partikel4';
import Partikel5 from './pages/tatabahasa/partikel/Partikel5';
import Epilog from './pages/tatabahasa/pola/epilog';
import Nakanaka from './pages/tatabahasa/pola/nakanaka';
import Mou from './pages/tatabahasa/pola/mou';
import Darou from './pages/tatabahasa/pola/darou';
import Nonakade from './pages/tatabahasa/pola/nonakade';
import Nisuru from './pages/tatabahasa/pola/nisuru';
import Surup from './pages/tatabahasa/suru/Suru';
import Bentuk1p from './pages/tatabahasa/bentuk1/Bentuk1';
import Taip from './pages/tatabahasa/bentuk1/Tai';
import Sugirup from './pages/tatabahasa/bentuk1/Sugiru';
import Maenip from './pages/tatabahasa/suru/Maeni';
import Yasuip from './pages/tatabahasa/bentuk1/Yasui';
import Naip from './pages/tatabahasa/bentuk2/Nai';
import Naips from './pages/tatabahasa/bentuk2/Naidekudasai';
import Naipk from './pages/tatabahasa/bentuk2/Nakerebanaranai';


// materi peserta magang
import Partikelk1 from './pages/pesertamagangui/pages/partikel/Partikelk1';
import Partikelk2 from './pages/pesertamagangui/pages/partikel/Partikelk2';
import Partikelk3 from './pages/pesertamagangui/pages/partikel/Partikelk3';
import Partikelk4 from './pages/pesertamagangui/pages/partikel/Partikelk4';
import Partikelk5 from './pages/pesertamagangui/pages/partikel/Partikelk5';
import Bentuk1k from './pages/pesertamagangui/pages/bentuk1/Bentuk1';
import Taik from './pages/pesertamagangui/pages/bentuk1/Tai';
import Sugiruk from './pages/pesertamagangui/pages/bentuk1/Sugiru';
import Yasuik from './pages/pesertamagangui/pages/bentuk1/Yasui';
import Suru1 from "./pages/pesertamagangui/pages/suru/Suru";
import Maeni1 from "./pages/pesertamagangui/pages/suru/Maeni";
import Pengertian1 from "./pages/pesertamagangui/pages/pola/epilog";
import Darou1 from "./pages/pesertamagangui/pages/pola/darou";
import Mou1 from "./pages/pesertamagangui/pages/pola/mou";
import Nonakade1 from "./pages/pesertamagangui/pages/pola/nonakade";
import Nisuru1 from "./pages/pesertamagangui/pages/pola/nisuru";
import Nakanaka1 from "./pages/pesertamagangui/pages/pola/nakanaka";
import Nai1 from "./pages/pesertamagangui/pages/bentuk2/Nai";
import Naidekudasai1 from "./pages/pesertamagangui/pages/bentuk2/Naidekudasai";
import Nakerebanaranai1 from "./pages/pesertamagangui/pages/bentuk2/Nakerebanaranai";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          {/* bagian user */}
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          {/* ------------------------------------------------------- */}

          {/* bagian kenshusei */}
          <Route path="/kenshusei" element={<PesertaMagang/>}/>
          <Route path="/kenshusei/add" element={<AddPesertaMagang/>}/>
          <Route path="/kenshusei/edit/:id" element={<EditPesertaMagang/>}/>
          {/* ------------------------------------------------------- */}

          {/* bagian hirakata */}
          <Route path="/hirakata" element={<Hirakata/>}/>
          <Route path="/hirakata/add" element={<AddHirakata/>}/>
          <Route path="/hirakata/edit/:id" element={<EditHirakata/>}/>
          {/* ------------------------------------------------------- */}

          {/* bagian kanjin5 */}
          <Route path="/kanjin5" element={<Kanjin5/>}/>
          <Route path="/kanjin5/add" element={<AddKanji5/>}/>
          <Route path="/kanjin5/edit/:id" element={<EditKanjin5/>}/>
          {/* ------------------------------------------------------- */}

          {/* bagian kata benda */}
          <Route path="/katabenda" element={<KataBenda/>}/>
          <Route path="/katabenda/add" element={<AddKataBenda/>}/>
          <Route path="/katabenda/edit/:id" element={<EditKataBenda/>}/>

          {/* ------------------------------------------------------- */}

          {/* bagian kata kerja */}
          <Route path="/katakerja" element={<KataKerja/>}/>
          <Route path="/katakerja/add" element={<AddKataKerja/>}/>
          <Route path="/katakerja/edit/:id" element={<EditKataKerja/>}/>

          {/* ------------------------------------------------------- */}

          {/* bagian kata sifat */}
          <Route path="/katasifat" element={<KataSifat/>}/>
          <Route path="/katasifat/add" element={<AddKataSifat/>}/>
          <Route path="/katasifat/edit/:id" element={<EditKataSifat/>}/>

          {/* ------------------------------------------------------- */}

          {/* bagian pembayaran */}
          <Route path="/pembayaran" element={<Pembayaran/>}/>
          <Route path="/pembayaran/add" element={<AddPembayaran/>}/>
          <Route path="/pembayaran/edit/:id" element={<EditPembayaran/>}/>
          
          {/* ------------------------------------------------------- */}
          {/* bagian tata bahasa */}
          <Route path="/partikel" element={<Partikel/>}/>
          <Route path="/partikel2" element={<Partikel2/>}/>
          <Route path="/partikel3" element={<Partikel3/>}/>
          <Route path="/partikel4" element={<Partikel4/>}/>
          <Route path="/partikel5" element={<Partikel5/>}/>
          <Route path="/pengertian" element={<Epilog/>}/>
          <Route path="/nakanaka" element={<Nakanaka/>}/>
          <Route path="/mou" element={<Mou/>}/>
          <Route path="/darou" element={<Darou/>}/>
          <Route path="/nonakade" element={<Nonakade/>}/>
          <Route path="/nisuru" element={<Nisuru/>}/>
          <Route path="/suru" element={<Surup/>}/>
          <Route path="/maeni" element={<Maenip/>}/>
          <Route path="/bentuk1" element={<Bentuk1p/>}/>
          <Route path="/tai" element={<Taip/>}/>
          <Route path="/sugiru" element={<Sugirup/>}/>
          <Route path="/yasui" element={<Yasuip/>}/>
          <Route path="/nai" element={<Naip/>}/>
          <Route path="/naidekudasai" element={<Naips/>}/>
          <Route path="/nakerebanaranai" element={<Naipk/>}/>









          {/* ------------------------------------------------------- */}

          {/* bagian peserta magang interface */}
          <Route path="/login2" element={<LoginKenshusei/>}/>
          <Route path="/beranda" element={<Dashboard2/>}/>
          <Route path="/hirakatapage" element={<HirakataPage/>}/>
          <Route path="/kanjin5page" element={<Kanjin5Page/>}/>
          <Route path="/katabendapage" element={<KataBendaPage/>}/>
          <Route path="/katakerjapage" element={<KataKerjaPage/>}/>
          <Route path="/katasifatpage" element={<KataSifatPage/>}/>
          <Route path="/partikelk1" element={<Partikelk1/>}/>
          <Route path="/partikelk2" element={<Partikelk2/>}/>
          <Route path="/partikelk3" element={<Partikelk3/>}/>
          <Route path="/partikelk4" element={<Partikelk4/>}/>
          <Route path="/partikelk5" element={<Partikelk5/>}/>
          <Route path="/bentuk1k" element={<Bentuk1k/>}/>
          <Route path="/taik" element={<Taik/>}/>
          <Route path="/sugiruk" element={<Sugiruk/>}/>
          <Route path="/yasuik" element={<Yasuik/>}/>
          <Route path="/surup" element={<Suru1/>}/>
          <Route path="/maenip" element={<Maeni1/>}/>
          <Route path="/pengertian1" element={<Pengertian1/>}/>
          <Route path="/darou1" element={<Darou1/>}/>
          <Route path="/mou1" element={<Mou1/>}/>
          <Route path="/nonakade1" element={<Nonakade1/>}/>
          <Route path="/nisuru1" element={<Nisuru1/>}/>
          <Route path="/nakanaka1" element={<Nakanaka1/>}/>
          <Route path="/nai1" element={<Nai1/>}/>
          <Route path="/naidekudasai1" element={<Naidekudasai1/>}/>
          <Route path="/nakerebanaranai1" element={<Nakerebanaranai1/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
