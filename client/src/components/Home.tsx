import React from 'react'

function Home() {
    const [age,setAge] = React.useState<number>(23)
    const [weight,setWeight] = React.useState<number>(225)
    const [gender, setGender] = React.useState<string>("male")
    const [height,setHeight] = React.useState<string>("5'10")
    const [goals, setGoals] = React.useState<string>('loss')
    const [level, setLevel] = React.useState<string>('newbie')
    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(level)
    }
    console.log('lol')
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:flex md:flex-col md:flex-wrap">
                <div className='flex justify-between w-full'>
                    <div className="md:col-span-1 mr-2">
                        <label>Age</label>
                        <input type="number" name="age" id="age" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={age} onChange={(e:any) => {setAge(e.target.value)}} />
                    </div>

                    <div className="md:col-span-1 mr-2">
                        <label>Gender</label>
                        <select name="gender" id="gender" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none" value={gender} onChange={(e:any) => {setGender(e.target.value)}}>
                            <option value="male">Male</option>
                            <option value='women'>Women</option>
                        </select>
                    </div>

                    <div className="md:col-span-1 mr-2">
                        <label>Weight</label>
                        <input type="number" name="weight" id="weight" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ex: 223" value={weight} onChange={(e:any) => {setWeight(e.target.value)}} />
                    </div>

                    <div className="md:col-span-1 mr-2">
                        <label>Height</label>
                        <input type="text" name="height" id="height" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ex: 5'10" value={height} onChange={(e:any) => (setHeight(e.target.value))} />
                    </div>
                </div>

                <div className='justify-between w-full'>
                    <div className="md:col-span-1 mr-2">
                        <label>Fitness Goals</label>
                        <select name="goals" id="goals" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={goals} onChange={(e:any) => {setGoals(e.target.value)}}>
                            <option value="loss">Weight Loss</option>
                            <option value='gain'>Weight Gain</option>
                            <option value="endurance">Endurance</option>
                        </select>
                    </div>
                </div>

                <div className='justify-between w-full'>
                    <div className="md:col-span-1 mr-2">
                        <label>Current Fitness Level</label>
                        <select name="level" id="level" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"  value={goals} onChange={(e:any) => {setLevel(e.target.value)}}>
                            <option value="newbie">No Exercise</option>
                            <option value="Light">Light Exercise/Sports 1-3 Days/Week</option>
                            <option value="moderate">Moderate Exercise/Sports 3-5 Days/Week</option>
                            <option value="active">Hard Exercise/Sports 6-7 Days/Week</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-full'>
                    <h2 className='mb-2'>Exercise Preferences</h2>
                   <div className='flex justify-between w-full'>
                     <div className="md:col-span-1 mr-2">
                        <label>Duration</label>
                        <input type="number" name="time" id="time" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="In Minutes" value="60" />
                    </div>

                    <div className="md:col-span-1 mr-2">
                        <label>Location</label>
                        <select name="location" id="location" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none" placeholder='Home'>
                            <option value="home">Home</option>
                            <option value='gym'>Gym</option>
                            <option value='outside'>Outside</option>
                        </select>
                    </div>

                    <div className="md:col-span-1 mr-2">
                        <label>Workout Types</label>

                        <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                            <input type="checkbox" name="type" value="cardio" className="mr-2" />
                            Cardio
                            </label>

                            <label className="flex items-center">
                            <input type="checkbox" name="type" value="strength-training" className="mr-2" />
                            Strength Training
                            </label>

                            <label className="flex items-center">
                            <input type="checkbox" name="type" value="yoga" className="mr-2" />
                            Yoga
                            </label>

                            <label className="flex items-center">
                            <input type="checkbox" name="type" value="sports" className="mr-2" />
                            Sports
                            </label>
                        </div>
                       </div>
                   </div>
                </div>
      
              <div className="md:col-span-5 text-right mt-5">
                <div className="inline-flex items-end">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div> );
};

export default Home



            //   <div className="md:col-span-3">
            //     <label >Address / Street</label>
            //     <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
            //   </div>

            //   <div className="md:col-span-2">
            //     <label >City</label>
            //     <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
            //   </div>

            //   <div className="md:col-span-2">
            //     <label >Country / region</label>
            //     <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            //       <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
            //       <button  className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
            //         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            //           <line x1="18" y1="6" x2="6" y2="18"></line>
            //           <line x1="6" y1="6" x2="18" y2="18"></line>
            //         </svg>
            //       </button>
            //       <button  className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
            //         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            //       </button>
            //     </div>
            //   </div>

            //   <div className="md:col-span-2">
            //     <label >State / province</label>
            //     <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            //       <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
            //       <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
            //         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            //           <line x1="18" y1="6" x2="6" y2="18"></line>
            //           <line x1="6" y1="6" x2="18" y2="18"></line>
            //         </svg>
            //       </button>
            //       <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
            //         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            //       </button>
            //     </div>
            //   </div>

            //   <div className="md:col-span-1">
            //     <label>Zipcode</label>
            //     <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
            //   </div>

            //   <div className="md:col-span-5">
            //     <div className="inline-flex items-center">
            //       <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
            //       <label  className="ml-2">My billing address is different than above.</label>
            //     </div>
            //   </div>

            //   <div className="md:col-span-2">
            //     <label >How many soda pops?</label>
            //     <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            //       <button  className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
            //         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
            //           <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            //         </svg>
            //       </button>
            //       <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
            //       <button  className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
            //         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
            //           <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
            //         </svg>
            //       </button>
            //     </div>
            //   </div>