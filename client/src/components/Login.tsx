import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [email,setEmail] = React.useState<string>('')
    const [password,setPassword] = React.useState<string>('')
    const handleClick = async(e: any) => {
       e.preventDefault()
        try {
        const reg = await fetch('http://localhost:2015/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
        const data = await reg.json()
        console.log(data)
        setEmail('')
        localStorage.setItem('token', data.token)
        window.location.href = "/"
        } catch(err) {
            console.error(err)
        }
    }
    ;
    return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-green-900 dark:text-green">
          Drej Fitness App
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-900 md:text-2xl dark:text-green">
              Login
            </h1>
            <form onSubmit={handleClick} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@finance.com"
                  required
                  value={email}
                  onChange={(e)=> {setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e)=> {setPassword(e.target.value)}}
                />
              </div>
              <button type="submit" className="w-full text-green bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Need to create an account? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
