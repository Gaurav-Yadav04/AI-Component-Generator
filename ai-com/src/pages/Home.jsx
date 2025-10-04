import React from 'react'
import Navbar from '../components/Navbar'
import Select from 'react-select';

const Home = () => {
 
    const options = [
      { value: 'html+css', label: 'HTML+CSS' },
      { value: 'html+tailwind', label: 'HTML+Tailwind' },
      { value: 'html+bootstrap', label: 'HTML+Bootstrap' },
    ];

  return (
    <div>
     <Navbar />

     <div className='flex items-center px-[100px] justify-between gap-[30px]'>
        <div className="left w-[50%] h-[80vh] mt-5 p-[20px] bg-[#141319]">
            <h3 className='text-[25px] font-semibold sp-text'>AI component generator</h3>
            <p className='text-[gray] mt-2 text-[16px]'>Describe your component and let AI will code for you.</p>
            <p className='text-15px] font-[700] mt-4'>Framework</p>
            <Select
             options={options}
             defaultValue={options[0]}
             styles={{
               control: (base) => ({
                 ...base,
                 backgroundColor: "#1a1a1a",   
                 borderColor: "#333",
                 color: "#fff",
                 boxShadow: "none",
                 "&:hover": { borderColor: "#555" },
               }),
               singleValue: (base) => ({
                 ...base,
                 color: "#fff", 
               }),
               menu: (base) => ({
                 ...base,
                 backgroundColor: "#1a1a1a",
                 color: "#fff",
               }),
               option: (base, state) => ({
                 ...base,
                 backgroundColor: state.isFocused ? "#333" : "#1a1a1a",
                 color: "#fff",
                 "&:active": { backgroundColor: "#444" },
               }),
               placeholder: (base) => ({
                 ...base,
                 color: "#aaa", 
               }),
             }}
            />
            <p className='text-15px] font-[700] mt-5'>Describe your component</p>
              <textarea className='w-full min-h-[200px] rounded-xl mt-3 bg-[#09090B] p-[10px]' placeholder="Describe your component in detail and let ai will code for your component"></textarea>
            <p className="generate flex items-center p-[15px] rounded-lg border-0">generate</p>
        </div>
        <div className="right w-[50%] h-[80vh] mt-5 bg-[#141319]"></div>
     </div>
    </div>
  )
}

export default Home
