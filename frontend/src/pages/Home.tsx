//import { useEffect, useState } from 'react';
import { MathQuiz } from '../components/Math-quiz'; 
//import  DialogComponent  from '../components/DialogComponent'; 

export default function Home() {
  //const [showDialog, setShowDialog] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowDialog(true);
  //   }, 2000);

  //   return () => clearTimeout(timer); 
  // }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center p-4 sm:p-8 md:p-24 overflow-y-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <h1 className="mb-8 text-4xl font-bold text-gray-800 text-center animate-fade-in-down">
      Realtime Math Quiz
    </h1>
    <MathQuiz />
    {/* {showDialog && <DialogComponent />} */}
  </div>
  
  );
}
