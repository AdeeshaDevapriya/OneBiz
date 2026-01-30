// import React from 'react'
// import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Test from './components/Test'
// import Test2 from './components/Test2'
// //import Test3 from './components/Test3'
// import UUseFetch from './components/useFetch'


// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="sticky top-0 bg-white/80 backdrop-blur z-30 shadow-sm">
//         <div className="container flex items-center justify-between py-4">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold">B</div>
//             <div>
//               <div className="font-bold">gooky</div>
//               <div className="text-xs text-gray-500">Modern websites for small businesses</div>
//             </div>
//           </div>
//           <nav className="hidden md:flex gap-6 text-sm">
//             <a href="home" className="hover:text-blue-600">Home</a>
//             <a href="about" className="hover:text-blue-600">About</a>
//             <a href="services" className="hover:text-blue-600">Services</a>
//             <a href="contact" className="hover:text-blue-600">Contact</a>
//           </nav>
//           <a href="#contact" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded text-sm">Contact</a>
//         </div>
//       </header>

//       <main className="flex-1">
//         <Hero />
//         <About />
//         <Services />
//         <Contact />
//         {/* <Test /> */}
//         {/* <Test2 /> */}
//         {/* <Test3 /> */}
//         <UUseFetch />

//       </main>

//       <Footer />
//     </div>
//   )
// }


// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Users from "./pages/Users";
// // import UserDetails from "./pages/UserDetails";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/users" element={<Users />} />
// //         <Route path="/users/:id" element={<UserDetails />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }


import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UUseFetch from './components/useFetch';
import LoginPage from './components/LoginPage';
import { AuthProvider, useAuthContext } from "./components/AuthContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StudentForm from './components/StudentForm';
import Counter from './components/Counter';
//import Buttonn from './components/Buttonn';
import { lazy, SetStateAction, Suspense, useCallback, useState } from 'react';
import Display from './components/Display';

const queryClient = new QueryClient();

export default function App() {



  return (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <GuardedApp />
    </QueryClientProvider>
    // </AuthProvider>
  );
}

const Buttonn = lazy(() => import("./components/Buttonn"));

function GuardedApp() {
  //const [display, setDisplay] = useState<number | string>('');

  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  const increment = (count: any) => setNewCount(count)


  const buttonName = "Add 1"

  // const { user } = useAuthContext();

  // if (!user) return <LoginPage />;


  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-white/80 backdrop-blur z-30 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold">B</div>
            <div>
              <div className="font-bold">gooky</div>
              {/* <div className="text-xs text-gray-500">Modern websites for small businesses</div> */}
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="home" className="hover:text-blue-600">Home</a>
            <a href="about" className="hover:text-blue-600">About</a>
            <a href="services" className="hover:text-blue-600">Services</a>
            <a href="contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded text-sm">Contact</a>
        </div>

        <h2>{count}</h2>
        {/* <h2 className="text-xl font-bold">Current Count: {display}</h2> */}

        {/* <Buttonn countToDoDisplay={(count: any) => setDisplay(count)}/> */}
      </header>

      <main className="flex-1">
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Contact />
        <UUseFetch /> */}
        <StudentForm />


        {/* <Counter /> */}
        {/* <Button /> */}

        {/* <Buttonn countToDoDisplay={(count: any) => setDisplay(count)}/> */}

        {/* <Buttonn onClick={increment} buttonName={buttonName} /> */}

        {/* <Suspense fallback={<p>Loading...</p>}>
          <Buttonn toDisplay={increment} buttonName={buttonName} />
        </Suspense> */}

        <br></br>

        {/* <Display /> */}


      </main>

      <Footer />

    </div>
  );
}



